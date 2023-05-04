import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import VacancyDetails from "./pages/VacancyDetails";
import EmptyState from "./components/EmptyState/EmptyState";
import useFetch from "./api/api";
import { BASIC_URL, CATALOGUES_URL } from "./constants/constants";

function App() {
  const {
    fetchDataAuth,
    dataAuth,
    fetchData,
    data: catalogueData,
  } = useFetch();
  const [data, setData] = useState([]);

  const getAuthToken = async () => {
    try {
      fetchDataAuth();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAuthToken().then(() => {
      fetchData(CATALOGUES_URL);
    });
    console.log(catalogueData);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/saved" element={<Saved />}></Route>
        <Route path="/details" element={<VacancyDetails />}></Route>
        <Route path="/em" element={<EmptyState />}></Route>
      </Routes>
    </>
  );
}

export default App;
