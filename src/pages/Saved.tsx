import React from "react";
import CardList from "../components/CardList/CardList";
import "../styles/Saved/Saved.css";

export default function Saved() {
  return (
    <div className="saved">
      <div className="saved__wrapper">
        <CardList />
      </div>
    </div>
  );
}
