import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import VacancyDetails from "./pages/VacancyDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/saved" element={<Saved />}></Route>
        <Route path="/details" element={<VacancyDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
