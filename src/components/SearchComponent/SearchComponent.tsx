import React, { useContext } from "react";
import cardContext from "../../context/CardsContext";
import "../../styles/SearchComponent/SearchComponent.css";
import SearchInput from "./SearchInput";
import CardList from "../CardList/CardList";
import PaginationComponent from "../Pagination/Pagination";
import EmptyStateImg from "../EmptyState/EmptyStateImg";
import { Loader } from "../Loader/Loader";
import { useSelector } from "react-redux";

export default function SearchComponent() {
  const { vacData, loading, setPage, page } = useContext(cardContext);

  //const page = useSelector((state: RootState) => state.setPage.page);

  const renderSearchCopmponent = () => {
    if (loading) {
      return <Loader />;
    } else if (loading) {
      return <EmptyStateImg />;
    } else
      return (
        <>
          <CardList />
          <PaginationComponent setPage={setPage} total={125} page={page} />
        </>
      );
  };

  return (
    <div className="search-comp">
      <SearchInput />
      {renderSearchCopmponent()}
    </div>
  );
}
