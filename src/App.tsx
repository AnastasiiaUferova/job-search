import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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

function App() {
  const { data, getData, loading } = useGetData(true);
  const { data: catalogueData, getData: getCatalogue } = useGetData(false);
  const {
    vacDetails,
    getDetailedData,
    loading: detailsLoading,
  } = useGetDetailedData();
  const { loggedIn } = useAuth();
  const [page, setPage] = useState<number>(1);

  const [keyword, setKeyword] = useState<string>("");
  const [salaryFrom, setSalaryFrom] = useState<number | string>(1);
  const [salaryTo, setSalaryTo] = useState<number | string>(1);
  const [catalogue, setCatalogue] = useState<string>("");
  const [agreement, setAgreement] = useState<number>(0);
  const [isSearchSubmitted, setIsSearchSubmitted] = useState<boolean>(false);

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

  const VACANCIES_PAGE_URL = `/2.0/vacancies/?keyword=${keyword}&published=1&page=${page}&catalogues=${catalogue}&payment_from=${salaryFrom}&payment_to=${salaryTo}&no_agreement=${agreement}&count=4/`;
  const VACANCY_DETAILS_URL = `/2.0/vacancies/${source}/`;

  useEffect(() => {
    if (loggedIn) {
      getCatalogue(CATALOGUES_URL);
    }
  }, [loggedIn]);

  //render vac details
  useEffect(() => {
    if (loggedIn) {
      getDetailedData(VACANCY_DETAILS_URL);
    }
  }, [loggedIn, vacId]);

  //first render initial cards
  useEffect(() => {
    if (vacData && loggedIn) {
      setVacData(data);
    }
  }, [loading]);

  //view changes for saved data
  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(savedData));
  }, [savedData]);

  //render if search or filter change
  useEffect(() => {
    if (loggedIn) {
      getData(VACANCIES_PAGE_URL);
      setVacData(data);
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
          page,
          setPage,
          loading,
          savedData,
          setSavedData,
          savedDataDisplayed,
          setSavedDataDisplayed,
          setKeyword,
          keyword,
          setIsSearchSubmitted,
          setAgreement,
          setCatalogue,
          setSalaryFrom,
          setSalaryTo,
          setVacId,
          isSearchSubmitted,
          vacDetails,
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
