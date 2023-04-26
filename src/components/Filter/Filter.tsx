import React from "react";
import Salary from "./Salary";
import Branch from "./Branch";
import "../../styles/Filter/Filter.css";
import ResetButton from "./ResetButton";

export default function Filter() {
  return (
    <div className="filter">
      <div className="filter__header">
        <h2 className="filter__title">Фильтры</h2>
        <ResetButton />
      </div>
      <Branch />
      <Salary />
    </div>
  );
}
