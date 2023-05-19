import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import VacancyDetails from "./pages/VacancyDetails";
import EmptyState from "./components/EmptyState/EmptyState";
import useGetData from "./api/api";
import { CATALOGUES_URL, PAGE_SIZE } from "./_constants/constants";
import cardContext from "./context/CardsContext";
import ProtectedRoutes from "./components/ProtectedRoute/ProtectedRoute";
import useAuth from "./api/auth";
import MemoHeader from "./components/Header/Header";
import useGetDetailedData from "./api/detailsApi";
import { RootState } from "../src/redux/store";
import { useGetVacsQuery } from "./redux/slices/apiSlice";

function App() {
  const { data: catalogueData, getData: getCatalogue } = useGetData(false);
  const {
    vacDetails,
    getDetailedData,
    loading: detailsLoading,
  } = useGetDetailedData();
  const { loggedIn } = useAuth();

  const [page, setPage] = useState<number>(1);

  const keyword = useSelector((state: RootState) => state.setKeyword.keyword);
  //const page = useSelector((state: RootState) => state.setPage.page);
  const salaryFrom = useSelector(
    (state: RootState) => state.setSalaryFrom.salaryFrom
  );
  const salaryTo = useSelector(
    (state: RootState) => state.setSalaryTo.salaryTo
  );
  const catalogue = useSelector(
    (state: RootState) => state.setCatalogue.catalogue
  );
  const agreement = useSelector(
    (state: RootState) => state.setAgreement.agreement
  );

  const [isSearchSubmitted, setIsSearchSubmitted] = useState<boolean>(false);

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

  const location = useLocation();
  const source = location.pathname
    .split("details/")
    .splice(1)
    .join("")
    .split("&")[0];

  const [vacId, setVacId] = useState<string>(
    () => JSON.parse(localStorage.getItem("id")!) || ""
  );

  const [vacData, setVacData] = useState<[]>([]);
  const [savedData, setSavedData] = useState(
    () => JSON.parse(localStorage.getItem("saved")!) || []
  );

  //for pagination
  const [savedDataDisplayed, setSavedDataDisplayed] = useState(
    savedData.slice(0, PAGE_SIZE)
  );
  console.log(vacData);

  const VACANCIES_PAGE_URL = `/2.0/vacancies/?keyword=${keyword}&published=1&page=${page}&catalogues=${catalogue}&payment_from=${salaryFrom}&payment_to=${salaryTo}&no_agreement=${agreement}&count=4/`;
  const VACANCY_DETAILS_URL = `/2.0/vacancies/${source}/`;

  //render vac details
  useEffect(() => {
    if (loggedIn) {
      getDetailedData(VACANCY_DETAILS_URL);
      getCatalogue(CATALOGUES_URL);
    }
  }, [loggedIn, vacId]);

  //first render initial cards
  useEffect(() => {
    if (generalData && loggedIn && !loading) {
      setVacData(generalData?.objects);
    }
  }, [loading]);

  //view changes for saved data
  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(savedData));
  }, [savedData]);

  //render if search or filter change
  useEffect(() => {
    if (loggedIn) {
      setVacData(generalData?.objects);
      setSavedDataDisplayed(savedDataDisplayed);
      setIsSearchSubmitted(false);
    }
  }, [loggedIn, page, isSearchSubmitted, catalogue, salaryFrom, salaryTo]);

  return (
    <>
      <MemoHeader />
      <cardContext.Provider
        value={{
          catalogueData,
          vacData,
          loading,
          savedData,
          setSavedData,
          savedDataDisplayed,
          setSavedDataDisplayed,
          setIsSearchSubmitted,
          setVacId,
          isSearchSubmitted,
          vacDetails,
          page,
          setPage,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes loggedIn={loggedIn}>
                <Home />
              </ProtectedRoutes>
            }
          ></Route>

          <Route
            path="/saved"
            element={
              <ProtectedRoutes loggedIn={loggedIn}>
                {savedData.length > 0 ? <Saved /> : <EmptyState />}
              </ProtectedRoutes>
            }
          ></Route>

          <Route
            path={`/details/:${vacId}`}
            element={
              <ProtectedRoutes loggedIn={loggedIn}>
                <VacancyDetails details={vacDetails} loading={detailsLoading} />
              </ProtectedRoutes>
            }
          ></Route>
        </Routes>
      </cardContext.Provider>
    </>
  );
}

export default App;
