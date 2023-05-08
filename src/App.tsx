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
  const { data: vacData, fetchData: fetchVacData, loading } = useFetch();
  const { tokenCheck, loggedIn } = useAuth();

  const [vac, setVac] = useState(() => []);

  const VACANCIES_URL = "/2.0/vacancies/?published=1&page=2&count=4/";

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn && vacData) {
      fetchVacData(VACANCIES_URL);
      fetchData(CATALOGUES_URL);
      setVac(vacData);
    }
  }, [loggedIn]);

  useEffect(() => {
    if (vacData) {
      setVac(vacData);
    }
  }, [vacData]);

  return (
    <>
      <Header />
      <cardContext.Provider value={{ catalogueData, vac, loading }}>
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
