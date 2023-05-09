import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import VacancyDetails from "./pages/VacancyDetails";
import EmptyState from "./components/EmptyState/EmptyState";
import useFetch from "./api/api";
import { CATALOGUES_URL, VACANCIES_URL } from "./_constants/constants";
import cardContext from "./context/CardsContext";
import ProtectedRoutes from "./components/ProtectedRoute/ProtectedRoute";
import useAuth from "./api/auth";

function App() {
  const { data: catalogueData, fetchData } = useFetch();
  const { data: vacApiData, fetchData: fetchVacData, loading } = useFetch();
  const { tokenCheck, loggedIn } = useAuth();
  const [page, setPage] = useState(1);
  const [vacData, setVacData] = useState<[]>([]);

  const VACANCIES_PAGE_URL = `/2.0/vacancies/?published=1&page=${page}&count=4/`;

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      fetchVacData(VACANCIES_PAGE_URL);
      fetchData(CATALOGUES_URL);
      setVacData(vacApiData);
    }
  }, [loggedIn, page]);

  useEffect(() => {
    if (vacData) {
      setVacData(vacApiData);
    }
  }, [loading]);

  /*useEffect(() => {
    fetchVacData(VACANCIES_PAGE_URL);
    setVacData(vacApiData);
  }, [page]);

  /*useEffect(() => {
    if (vacData) {
      fetchVacData(VACANCIES_PAGE_URL);
      setVacData(vacApiData);
    }
  }, []);*/

  console.log(vacData);

  return (
    <>
      <Header />
      <cardContext.Provider
        value={{ catalogueData, vacData, page, setPage, loading }}
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

          <Route path="/saved" element={<Saved />}></Route>
          <Route path="/details" element={<VacancyDetails />}></Route>
          <Route path="/em" element={<EmptyState />}></Route>
        </Routes>
      </cardContext.Provider>
    </>
  );
}

export default App;
