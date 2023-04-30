import React from "react";
import "../../styles/SearchComponent/SearchComponent.css";
import SearchInput from "./SearchInput";
import CardList from "../CardList/CardList";

export default function SearchComponent() {
  return (
    <div className="search-comp">
      <SearchInput />
      <CardList />
    </div>
  );
}
