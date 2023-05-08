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

function App() {
  const {
    loading,
    data: catalogueData,
    fetchData,
    loadingData,
    token,
  } = useFetch();

  const { data: vacData, fetchData: fetchVacData, fetchDataAuth } = useFetch();

  useEffect(() => {
    tokenCheck().then(() => {
      fetchVacData(VACANCIES_URL);
      fetchData(CATALOGUES_URL);
    });
  }, []);

  const tokenCheck = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token === null) {
        fetchDataAuth();
        console.log("null223");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(vacData);

  return (
    <>
      <Header />
      <cardContext.Provider value={{ catalogueData }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/saved" element={<Saved />}></Route>
          <Route path="/details" element={<VacancyDetails />}></Route>
          <Route path="/em" element={<EmptyState />}></Route>
        </Routes>
      </cardContext.Provider>
    </>
  );
}

export default App;

/*

 console.log(options);
  console.log(token);
  console.log(catalogueData);

  /*const getVac = async () => {
    try {
      fetchData(VACANCIES_URL);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (loggedIn===true) {
    Promise.all([getUserInfo(), getCards()])
        .then(([userData, cards]) => {
            setCurrentUser(userData);
            setCards(cards);
        })
        .catch((err) => {
            console.log(err);
        });
    }
}, [loggedIn]);
//https://github.com/AnastasiiaUferova/react-mesto-auth/blob/main/src/components/App.js

/*useEffect(() => {
    getAuthToken().then(() => {
      console.log(token);
      Promise.all([getVac(), getOptions()])
        .then(([vacData, optionsData]) => {
          console.log(vacData);
          console.log(optionsData);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);
   {(isLoading || isCardsLoading) && <Loader />}
      {renderElements()}
  
  
  */
