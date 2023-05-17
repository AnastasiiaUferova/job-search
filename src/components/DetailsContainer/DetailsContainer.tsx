import React, { useContext } from "react";
import "../../styles/DetailsContainer/DetailsContainer.css";

import cardContext from "../../context/CardsContext";

export default function DetailsContainer() {
  const { vacDetails } = useContext(cardContext);

  return (
    <div className="details-container">
      <div dangerouslySetInnerHTML={{ __html: vacDetails.vacancyRichText }} />
    </div>
  );
}
