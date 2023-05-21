import React, { FC } from "react";
import "../styles/VacancyDetails/VacancyDetails.css";
import CardDetailed from "../components/CardDetailed/CardDetailed";
import DetailsContainer from "../components/DetailsContainer/DetailsContainer";
import { Loader } from "../components/Loader/Loader";
import { useGetDetailsQuery } from "../redux/slices/apiSlice";
import { useLocation } from "react-router-dom";
import Error from "../components/Error/Error";

type vacancyDetailsProps = {
  loggedIn: boolean;
};

const VacancyDetails: FC<vacancyDetailsProps> = (props) => {
  const location = useLocation();
  const source = location.pathname
    .split("details/")
    .splice(1)
    .join("")
    .split("&")[0];

  const {
    data: vacDetails,
    isError,
    isLoading,
  } = useGetDetailsQuery(source, {
    skip: !props.loggedIn,
  });

  return (
    <>
      {isError && <Error />}
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
    </>
  );
};

export default VacancyDetails;
