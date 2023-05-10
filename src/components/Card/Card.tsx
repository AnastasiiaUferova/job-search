import React, { FC, useContext } from "react";
import "../../styles/Card/Card.css";
import SavedButton from "./SavedButton";
import cardContext from "../../context/CardsContext";

type CardPropsType = {
  id: number;
  profession: string;
  payment_from: number;
  currency: string;
  town: string;
  type_of_work: string;
};

const Card: FC<CardPropsType> = (props) => {
  const { id, profession, payment_from, currency, town, type_of_work } = props;

  const { addToSaved, removeFromSaved, savedData } = useContext(cardContext);

  const savedCardIds = savedData.map((item) => item.id);

  const onClickHandle = () => {
    if (savedCardIds.includes(id)) {
      removeFromSaved(id);
    } else addToSaved(id);
  };

  return (
    <div data-elem={`vacancy-_vacancy_id_${id}`} className="card">
      <div className="card__info">
        <h3 className="card__title">{profession}</h3>
        <div className="card__details">
          <span className="card__salary">
            з/п от {payment_from} {currency}
          </span>
          <li className="card__time">{type_of_work}</li>
        </div>
        <p className="card__place">{town}</p>
      </div>
      <SavedButton onClick={() => onClickHandle()} />
    </div>
  );
};

export default Card;
