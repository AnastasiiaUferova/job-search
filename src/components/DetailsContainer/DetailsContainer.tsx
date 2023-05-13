import React, { useContext } from "react";
import "../../styles/DetailsContainer/DetailsContainer.css";

import cardContext from "../../context/CardsContext";

export default function DetailsContainer() {
  const { vacDetails } = useContext(cardContext);

  const Component = () => (
    <div dangerouslySetInnerHTML={{ __html: vacDetails.vacancyRichText }} />
  );
  return (
    <div className="details-container">
      <Component />
    </div>
  );
}
