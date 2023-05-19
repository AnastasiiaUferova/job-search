import React, { useContext, useEffect, useState } from "react";
import CardList from "../components/CardList/CardList";
import "../styles/Saved/Saved.css";
import PaginationComponent from "../components/Pagination/Pagination";
import cardContext from "../context/CardsContext";
import { PAGE_SIZE } from "../_constants/constants";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Saved() {
  const [activePage, setPage] = useState(1);

  const savedData = useSelector(
    (state: RootState) => state.setSavedData.savedData
  );

  /*useEffect(() => {
    dispatch(setVacData(generalData?.objects));
  }, [generalData?.objects, dispatch]);

  //for pagination
  const [savedDataDisplayed, setSavedDataDisplayed] = useState<[]>(() =>
    savedData.slice(0, PAGE_SIZE)
  );

  //view changes for saved data
  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(savedData));
  }, [savedData]);

  useEffect(() => {
    const from = (activePage - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setSavedDataDisplayed(savedData.slice(from, to));
  }, [activePage, savedData]);*/

  return (
    <div className="saved">
      <div className="saved__wrapper">
        <CardList cards={savedData} />
        <PaginationComponent
          setPage={setPage}
          total={Math.ceil(savedData.length / 4)}
          page={activePage}
        />
      </div>
    </div>
  );
}
