import React from "react";
import "../../styles/SearchComponent/SearchComponent.css";
import SearchInput from "./SearchInput";
import CardList from "../CardList/CardList";
import PaginationComponent from "../Pagination/Pagination";
//import { Loader } from "../Loader/Loader";

export default function SearchComponent() {
  return (
    <div className="search-comp">
      <SearchInput />
      <CardList />
      <PaginationComponent />
    </div>
  );
}

//  <Loader />
