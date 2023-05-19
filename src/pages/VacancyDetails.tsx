import React, { FC } from "react";
import "../styles/VacancyDetails/VacancyDetails.css";
import CardDetailed from "../components/CardDetailed/CardDetailed";
import DetailsContainer from "../components/DetailsContainer/DetailsContainer";
import { Loader } from "../components/Loader/Loader";
import { vacDetailsType } from "../types/types";

export type vacDetailsProps = {
  details: vacDetailsType;
  loading?: boolean;
};

const VacancyDetails: FC<vacDetailsProps> = (props) => {
  const { loading, details } = props;

  return (
    <div className="v-details">
      <div className="v-details__wrapper">
        {loading ? (
          <Loader />
        ) : (
          <>
            <CardDetailed details={details} />
            <DetailsContainer details={details} />
          </>
        )}
      </div>
    </div>
  );
};

export default VacancyDetails;
