import React from "react";
import "../styles/VacancyDetails/VacancyDetails.css";
import CardDetailed from "../components/CardDetailed/CardDetailed";
import DetailsContainer from "../components/DetailsContainer/DetailsContainer";

export default function VacancyDetails() {
  return (
    <div className="v-details">
      <div className="v-details__wrapper">
        <CardDetailed />
        <DetailsContainer />
      </div>
    </div>
  );
}
