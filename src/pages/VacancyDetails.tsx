import React, { useContext } from "react";
import "../styles/VacancyDetails/VacancyDetails.css";
import CardDetailed from "../components/CardDetailed/CardDetailed";
import DetailsContainer from "../components/DetailsContainer/DetailsContainer";
import cardContext from "../context/CardsContext";
import { Loader } from "../components/Loader/Loader";

export default function VacancyDetails() {
  const { vacDetails } = useContext(cardContext);

  console.log(vacDetails);

  return (
    <div className="v-details">
      <div className="v-details__wrapper">
        {{ vacDetails } ? (
          <>
            <CardDetailed />
            <DetailsContainer />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
