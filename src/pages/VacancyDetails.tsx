import React, { FC, useContext } from "react";
import "../styles/VacancyDetails/VacancyDetails.css";
import CardDetailed from "../components/CardDetailed/CardDetailed";
import DetailsContainer from "../components/DetailsContainer/DetailsContainer";
import { Loader } from "../components/Loader/Loader";
import { useGetDetailsQuery } from "../redux/slices/apiSlice";
import { useLocation } from "react-router-dom";
import cardContext from "../context/CardsContext";

const VacancyDetails = () => {
  const location = useLocation();
  const source = location.pathname
    .split("details/")
    .splice(1)
    .join("")
    .split("&")[0];

  const { loggedIn } = useContext(cardContext);

  const {
    data: vacDetails,
    isError: vacDetailsError,
    isLoading,
  } = useGetDetailsQuery(source, {
    skip: !loggedIn,
  });

  return (
    <div className="v-details">
      <div className="v-details__wrapper">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <CardDetailed details={vacDetails} />
            <DetailsContainer details={vacDetails} />
          </>
        )}
      </div>
    </div>
  );
};

export default VacancyDetails;
