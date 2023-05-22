import React, { FC } from "react";
import "../styles/VacancyDetails/VacancyDetails.css";
import CardDetailed from "../components/CardDetailed/CardDetailed";
import DetailsContainer from "../components/DetailsContainer/DetailsContainer";
import { Loader } from "../components/Loader/Loader";
import { useGetDetailsQuery } from "../redux/slices/apiSlice";
import { useParams } from "react-router-dom";
import Error from "../components/Error/Error";

type vacancyDetailsProps = {
  loggedIn: boolean;
};

const VacancyDetails: FC<vacancyDetailsProps> = (props) => {
  const { id } = useParams();

  const {
    data: vacDetails,
    isError,
    isLoading,
  } = useGetDetailsQuery(id!, {
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
