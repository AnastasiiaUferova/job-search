import React, { useState } from "react";
import CardList from "../components/CardList/CardList";
import "../styles/Saved/Saved.css";
import PaginationComponent from "../components/Pagination/Pagination";

export default function Saved() {
  const [page, setPage] = useState<number>(1);

  return (
    <div className="saved">
      <div className="saved__wrapper">
        <CardList />
        <PaginationComponent setPage={setPage} total={4} />
      </div>
    </div>
  );
}
