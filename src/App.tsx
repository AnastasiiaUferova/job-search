import React, { useEffect } from "react";
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

function App() {
  const { data: catalogueData, fetchData, tokenCheck } = useFetch();

  useEffect(() => {
    tokenCheck().then(() => {
      fetchData(CATALOGUES_URL);
    });
  }, []);

  return (
    <>
      <Header />
      <cardContext.Provider value={{ catalogueData }}>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes
                loggedIn={localStorage.getItem("token") !== null}
              >
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
