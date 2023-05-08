import React, { useContext } from "react";
import "../styles/Home/Home.css";
import Filter from "../components/Filter/Filter";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import cardContext from "../context/CardsContext";

export default function Home() {
  const { vacData } = useContext(cardContext);

  console.log(vacData);
  return (
    <main className="home">
      <Filter />
      <SearchComponent />
    </main>
  );
}
