import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import VacancyDetails from "./pages/VacancyDetails";
import EmptyState from "./components/EmptyState/EmptyState";
import cardContext from "./context/CardsContext";
import ProtectedRoutes from "./components/ProtectedRoute/ProtectedRoute";
import useAuth from "./api/auth";
import MemoHeader from "./components/Header/Header";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const { loggedIn } = useAuth();

  const [page, setPage] = useState<number>(1);

  const [vacId, setVacId] = useState<string>(
    () => JSON.parse(localStorage.getItem("id")!) || ""
  );

  const savedData = useSelector(
    (state: RootState) => state.setSavedData.savedData
  );

  return (
    <>
      <MemoHeader />
      <cardContext.Provider
        value={{
          loggedIn,
          setVacId,
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
