import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import VacancyDetails from "./pages/VacancyDetails";
import EmptyState from "./components/EmptyState/EmptyState";
import cardContext from "./context/CardsContext";
import ProtectedRoutes from "./components/ProtectedRoute/ProtectedRoute";
import useAuth from "./api/auth";
import MemoHeader from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useGetVacsQuery } from "./redux/slices/apiSlice";
import useSetParams from "./hooks/useSetParams";
import { setVacData } from "./redux/slices/vacGeneralSlice";

function App() {
  const { loggedIn } = useAuth();

  const cardId = useSelector((state: RootState) => state.setCardId.cardId);

  const { keyword, salaryFrom, salaryTo, catalogue, agreement } =
    useSetParams();

  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState<number>(1);

  const savedData = useSelector(
    (state: RootState) => state.setSavedData.savedData
  );

  const {
    data: generalData,
    isFetching: loading,
    isError,
  } = useGetVacsQuery(
    {
      keyword: keyword,
      page: activePage,
      catalogue: catalogue,
      salaryFrom: salaryFrom,
      salaryTo: salaryTo,
      agreement: agreement,
    },
    { skip: !loggedIn }
  );

  console.log(loading);

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(savedData));
  }, [savedData]);

  useEffect(() => {
    dispatch(setVacData(generalData?.objects));
  }, [generalData?.objects, dispatch]);

  return (
    <>
      <MemoHeader />
      <cardContext.Provider
        value={{
          loggedIn,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes loggedIn={loggedIn}>
                <Home
                  setActivePage={setActivePage}
                  activePage={activePage}
                  loading={loading}
                />
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
            path={`/details/:${cardId}`}
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
