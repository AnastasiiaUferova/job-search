import React, { useContext, useEffect } from "react";
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

export default function SearchComponent() {
  const { setPage, page, loggedIn } = useContext(cardContext);

  const { keyword, salaryFrom, salaryTo, catalogue, agreement } = useParams();

  const dispatch = useDispatch();

  const vacData = useSelector((state: RootState) => state.setVacData.vacData);

  const {
    data: generalData,
    isLoading: loading,
    isError,
  } = useGetVacsQuery(
    {
      keyword: keyword,
      page: page,
      catalogue: catalogue,
      salaryFrom: salaryFrom,
      salaryTo: salaryTo,
      agreement: agreement,
    },
    { skip: !loggedIn }
  );

  useEffect(() => {
    dispatch(setVacData(generalData?.objects));
  }, [generalData?.objects, dispatch]);

  const renderSearchCopmponent = () => {
    if (loading) {
      return <Loader />;
    } else if (vacData && vacData.length === 0) {
      return <EmptyStateImg />;
    } else
      return (
        <>
          <CardList loading={loading} cards={vacData} />
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
