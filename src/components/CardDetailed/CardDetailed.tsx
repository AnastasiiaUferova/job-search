import React, { useContext } from "react";
import SavedButton from "../Card/SavedButton";
import "../../styles/CardDetailed/CardDetailed.css";
import cardContext from "../../context/CardsContext";

export default function CardDetailed() {
  const { vacDetails } = useContext(cardContext);
  return (
    <div className="card_detailed">
      <div className="card_detailed__info">
        <h3 className="card_detailed__title">{vacDetails.profession}</h3>
        <div className="card_detailed__details">
          <span className="card_detailed__salary">
            {vacDetails.payment_from} {vacDetails.currency}
          </span>
          <li className="card_detailed__time">
            {vacDetails.type_of_work.title}
          </li>
        </div>
        <p className="card_detailed__place">{vacDetails.town.title}</p>
      </div>
      <SavedButton />
    </div>
  );
}
