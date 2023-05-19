import React, { FC } from "react";
import "../../styles/DetailsContainer/DetailsContainer.css";
import { detailsProps } from "../../types/types";

const DetailsContainer: FC<detailsProps> = (props) => {
  return (
    <div className="details-container">
      <div
        dangerouslySetInnerHTML={{ __html: props.details.vacancyRichText }}
      />
    </div>
  );
};

export default DetailsContainer;
