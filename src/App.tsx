import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import VacancyDetails from "./pages/VacancyDetails";
import EmptyState from "./components/EmptyState/EmptyState";
import { PAGE_SIZE } from "./_constants/constants";
import cardContext from "./context/CardsContext";
import ProtectedRoutes from "./components/ProtectedRoute/ProtectedRoute";
import useAuth from "./api/auth";
import MemoHeader from "./components/Header/Header";
import { RootState } from "../src/redux/store";
import {
  useGetVacsQuery,
  useGetCataloguesQuery,
  useGetDetailsQuery,
} from "./redux/slices/apiSlice";

function App() {
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

  const location = useLocation();
  const source = location.pathname
    .split("details/")
    .splice(1)
    .join("")
    .split("&")[0];

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

  const { data: catalogueData, isError: catalogueError } =
    useGetCataloguesQuery("", {
      skip: !loggedIn,
    });

  const { data: vacDetails, isError: vacDetailsError } = useGetDetailsQuery(
    source,
    {
      skip: !loggedIn,
    }
  );

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

  const VACANCY_DETAILS_URL = `/2.0/vacancies/${source}/`;

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
  }, [loggedIn, generalData]);

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
                <VacancyDetails details={vacDetails} loading={loading} />
              </ProtectedRoutes>
            }
          ></Route>
        </Routes>
      </cardContext.Provider>
    </>
  );
}

export default App;
