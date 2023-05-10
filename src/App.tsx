import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import VacancyDetails from "./pages/VacancyDetails";
import EmptyState from "./components/EmptyState/EmptyState";
import useFetch from "./api/api";
import { CATALOGUES_URL } from "./_constants/constants";
import cardContext from "./context/CardsContext";
import ProtectedRoutes from "./components/ProtectedRoute/ProtectedRoute";
import useAuth from "./api/auth";

function App() {
  const { data: catalogueData, fetchData } = useFetch();
  const { data: vacApiData, fetchData: fetchVacData, loading } = useFetch();
  const { tokenCheck, loggedIn } = useAuth();
  const [page, setPage] = useState<number>(1);
  const [vacData, setVacData] = useState<[]>([]);
  const [savedData, setSavedData] = useState(
    () => JSON.parse(localStorage.getItem("saved")) || []
  );

  const VACANCIES_PAGE_URL = `/2.0/vacancies/?published=1&page=${page}&count=4/`;

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(savedData));
  }, [savedData]);

  useEffect(() => {
    if (loggedIn) {
      fetchVacData(VACANCIES_PAGE_URL);
      setVacData(vacApiData);
    }
  }, [loggedIn, page]);

  useEffect(() => {
    if (vacData && loggedIn) {
      setVacData(vacApiData);
    }
  }, [loading]);

  useEffect(() => {
    if (loggedIn) {
      fetchData(CATALOGUES_URL);
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      fetchVacData(VACANCIES_PAGE_URL);
      setVacData(vacApiData);
    }
  }, [page, loggedIn]);

  function addToSaved(id: number) {
    vacData.objects.map((item) => {
      if (item.id === id) {
        setSavedData([...savedData, item]);
      }
      return item;
    });
  }

  function removeFromSaved(id: number) {
    const filteredData = savedData.filter((item) => {
      return item.id !== id;
    });
    setSavedData(filteredData);
  }

  return (
    <>
      <Header />
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
                <Saved />
              </ProtectedRoutes>
            }
          ></Route>

          <Route path="/details" element={<VacancyDetails />}></Route>
          <Route path="/em" element={<EmptyState />}></Route>
        </Routes>
      </cardContext.Provider>
    </>
  );
}

export default App;
