import React, { FC, useContext, useEffect, useState } from "react";
import cardContext from "../../context/CardsContext";
import "../../styles/SearchComponent/SearchComponent.css";
import SearchInput from "./SearchInput";
import CardList from "../CardList/CardList";
import PaginationComponent from "../Pagination/Pagination";
import EmptyStateImg from "../EmptyState/EmptyStateImg";
import { Loader } from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useParams from "../../hooks/useParams";
import { setVacData } from "../../redux/slices/vacGeneralSlice";
import { useGetVacsQuery } from "../../redux/slices/apiSlice";
import { homeProps } from "../../pages/Home";

const SearchComponent: FC<homeProps> = (props) => {
  const vacData = useSelector((state: RootState) => state.setVacData.vacData);

  const { setActivePage, activePage, loading } = props;

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
            total={125}
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
