import React, { FC } from "react";
import "../../styles/DetailsContainer/DetailsContainer.css";
import { vacDetailsProps } from "../../pages/VacancyDetails";

const DetailsContainer: FC<vacDetailsProps> = (props) => {
  return (
    <div className="details-container">
      <div
        dangerouslySetInnerHTML={{ __html: props.details.vacancyRichText }}
      />
    </div>
  );
};

export default DetailsContainer;
