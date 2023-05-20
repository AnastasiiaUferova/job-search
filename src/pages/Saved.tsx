import React, { useEffect, useState } from "react";
import CardList from "../components/CardList/CardList";
import "../styles/Saved/Saved.css";
import PaginationComponent from "../components/Pagination/Pagination";
import { PAGE_SIZE } from "../_constants/constants";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CardListItemType } from "../types/types";

export default function Saved() {
  const [activePage, setPage] = useState(1);

  const savedData = useSelector(
    (state: RootState) => state.setSavedData.savedData
  );

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(savedData));
  }, [savedData]);

  const [savedDataDisplayed, setSavedDataDisplayed] = useState<
    CardListItemType[]
  >(() => savedData.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (activePage - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setSavedDataDisplayed(savedData.slice(from, to));
  }, [activePage, savedData]);

  return (
    <div className="saved">
      <div className="saved__wrapper">
        <CardList cards={savedDataDisplayed} />
        <PaginationComponent
          setPage={setPage}
          total={Math.ceil(savedData.length / 4)}
          page={activePage}
        />
      </div>
    </div>
  );
}
