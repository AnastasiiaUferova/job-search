import React from "react";
import CardList from "../components/CardList/CardList";
import "../styles/Saved/Saved.css";
import PaginationComponent from "../components/Pagination/Pagination";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useRenderSaved } from "../hooks/useRenderSaved";

export default function Saved() {
  const savedData = useSelector(
    (state: RootState) => state.setSavedData.savedData
  );
  const { savedDataDisplayed, setPage, activePage } = useRenderSaved();

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
