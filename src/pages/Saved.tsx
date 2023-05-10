import React, { useContext, useEffect, useState } from "react";
import CardList from "../components/CardList/CardList";
import "../styles/Saved/Saved.css";
import PaginationComponent from "../components/Pagination/Pagination";
import cardContext from "../context/CardsContext";
import { PAGE_SIZE } from "../_constants/constants";

export default function Saved() {
  const [activePage, setPage] = useState(1);

  const { savedData, setSavedDataDisplayed } = useContext(cardContext);

  useEffect(() => {
    const from = (activePage - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setSavedDataDisplayed(savedData.slice(from, to));
  }, [activePage, savedData]);

  return (
    <div className="saved">
      <div className="saved__wrapper">
        <CardList />
        <PaginationComponent
          setPage={setPage}
          total={Math.ceil(savedData.length / 4)}
        />
      </div>
    </div>
  );
}
