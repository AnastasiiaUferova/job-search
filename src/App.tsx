import React, { useEffect, useState, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import VacancyDetails from "./pages/VacancyDetails";
import EmptyState from "./components/EmptyState/EmptyState";
import useFetch from "./api/api";
import { CATALOGUES_URL, PAGE_SIZE } from "./_constants/constants";
import cardContext from "./context/CardsContext";
import ProtectedRoutes from "./components/ProtectedRoute/ProtectedRoute";
import useAuth from "./api/auth";
import MemoHeader from "./components/Header/Header";
import { CardPropsType } from "./types/types";

function App() {
  const { catalogueData, fetchData } = useFetch();
  const { data: vacApiData, fetchData: fetchVacData, loading } = useFetch();
  const { vacDetails, fetchData: fetchDetails } = useFetch();
  const { tokenCheck, loggedIn } = useAuth();
  const [page, setPage] = useState<number>(1);

  const [keyword, setKeyword] = useState<string>("");
  const [salaryFrom, setSalaryFrom] = useState<number | string>("");
  const [salaryTo, setSalaryTo] = useState<number | string>("");
  const [catalogue, setCatalogue] = useState<string>("");
  const [agreement, setAgreement] = useState<number>(0);
  const [isSearchSubmitted, setIsSearchSubmitted] = useState<boolean>(false);
  const [vacId, setVacId] = useState<number | string>(
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
  const VACANCY_DETAILS_URL = `/2.0/vacancies/${vacId}/`;
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (loggedIn) {
      fetchData(CATALOGUES_URL);
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      fetchDetails(VACANCY_DETAILS_URL);
      localStorage.setItem("id", JSON.stringify(vacId));
    }
  }, [loggedIn, vacId]);

  const checkIfLoggedIn = useCallback(() => {
    tokenCheck();
  }, [token]);

  useEffect(() => {
    checkIfLoggedIn();
    localStorage.setItem("saved", JSON.stringify(savedData));
  }, [savedData]);

  //render if search or filter change
  useEffect(() => {
    if (loggedIn) {
      fetchVacData(VACANCIES_PAGE_URL);
      setVacData(vacApiData);
      setSavedDataDisplayed;
      setIsSearchSubmitted(false);

      if (salaryFrom === "" && salaryTo === "") {
        setAgreement(0);
      } else setAgreement(1);
    }
  }, [loggedIn, page, isSearchSubmitted, catalogue, salaryFrom, salaryTo]);

  //first render initial cards
  useEffect(() => {
    if (vacData && loggedIn) {
      setVacData(vacApiData);
    }
  }, [loading]);

  //saving functions
  const addToSaved = useCallback(
    (id: number) => {
      vacData.map((item: CardPropsType) => {
        if (item.id === id) {
          setSavedData([...savedData, item]);
          localStorage.setItem("saved", JSON.stringify(savedData));
        }
        return item;
      });
    },
    [savedData, vacData]
  );

  const removeFromSaved = useCallback(
    (id: number) => {
      const filteredData = savedData.filter((item: CardPropsType) => {
        return item.id !== id;
      });
      setSavedData(filteredData);
      localStorage.setItem("saved", JSON.stringify(filteredData));
    },
    [savedData]
  );

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
          addToSaved,
          removeFromSaved,
          savedData,
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
            path={`/details/${vacId}`}
            element={
              <ProtectedRoutes loggedIn={loggedIn}>
                <VacancyDetails />
              </ProtectedRoutes>
            }
          ></Route>
        </Routes>
      </cardContext.Provider>
    </>
  );
}

export default App;
