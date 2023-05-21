import React, { FC } from "react";
import "../../styles/SearchComponent/SearchComponent.css";
import SearchInput from "./SearchInput";
import CardList from "../CardList/CardList";
import PaginationComponent from "../Pagination/Pagination";
import EmptyStateImg from "../EmptyState/EmptyStateImg";
import { Loader } from "../Loader/Loader";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { homeProps } from "../../pages/Home";

const SearchComponent: FC<homeProps> = (props) => {
  const vacData = useSelector((state: RootState) => state.setVacData.vacData);

  const { setActivePage, activePage, loading, totalPages } = props;

  const renderSearchCopmponent = () => {
    if (loading) {
      return <Loader />;
    } else if (vacData && vacData.length === 0) {
      return <EmptyStateImg />;
    } else
      return (
        <>
          <CardList loading={loading} cards={vacData} />
          <PaginationComponent
            setPage={setActivePage}
            total={totalPages}
            page={activePage}
          />
        </>
      );
  };

  return (
    <div className="search-comp">
      <SearchInput />
      {renderSearchCopmponent()}
    </div>
  );
};

export default SearchComponent;
