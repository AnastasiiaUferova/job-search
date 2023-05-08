import React, { useEffect } from "react";
import "../styles/Home/Home.css";
import Filter from "../components/Filter/Filter";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import useFetch from "../api/api";
import { VACANCIES_URL } from "../_constants/constants";
import cardContext from "../context/CardsContext";

export default function Home() {
  const { data: vacData, fetchData: fetchVacData } = useFetch();

  useEffect(() => {
    fetchVacData(VACANCIES_URL);
  }, []);

  console.log(vacData);
  return (
    <cardContext.Provider value={{ vacData: vacData }}>
      <main className="home">
        <Filter />
        <SearchComponent />
      </main>
    </cardContext.Provider>
  );
}
