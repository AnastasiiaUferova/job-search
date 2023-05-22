import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import VacancyDetails from "./pages/VacancyDetails";
import EmptyState from "./components/EmptyState/EmptyState";
import ProtectedRoutes from "./components/ProtectedRoute/ProtectedRoute";
import useAuth from "./auth/useAuth";
import MemoHeader from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useGetVacsQuery } from "./redux/slices/apiSlice";
import useSetParams from "./hooks/useSetParams";
import { setVacData } from "./redux/slices/vacGeneralSlice";
import Error from "./components/Error/Error";
import useSetTotalPages from "./hooks/useSetPages";

function App() {
  const { loggedIn } = useAuth();

  const { keyword, salaryFrom, salaryTo, catalogue, agreement } =
    useSetParams();

  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState<number>(1);

  const savedData = useSelector(
    (state: RootState) => state.setSavedData.savedData
  );

  const {
    data,
    isFetching: loading,
    isError,
  } = useGetVacsQuery(
    {
      keyword: keyword,
      page: activePage - 1,
      catalogue: catalogue,
      salaryFrom: salaryFrom,
      salaryTo: salaryTo,
      agreement: agreement,
    },
    { skip: !loggedIn }
  );

  const { totalPages } = useSetTotalPages(data);

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(savedData));
  }, [savedData]);

  useEffect(() => {
    dispatch(setVacData(data?.objects));
  }, [data?.objects, dispatch]);

  return (
    <>
      <MemoHeader />
      {isError && <Error />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes loggedIn={loggedIn}>
              <Home
                setActivePage={setActivePage}
                activePage={activePage}
                loading={loading}
                totalPages={totalPages}
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
          path={`/details/:id`}
          element={
            <ProtectedRoutes loggedIn={loggedIn}>
              <VacancyDetails loggedIn={loggedIn} />
            </ProtectedRoutes>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
