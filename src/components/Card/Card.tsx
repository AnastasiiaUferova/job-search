import React, { FC } from "react";
import "../../styles/Card/Card.css";
import SavedButton from "./SavedButton";
import { CardPropsType } from "../../types/types";
import { NavLink } from "react-router-dom";
import useSaveHandleClick from "../../hooks/useSaveHandleClick";

const Card: FC<CardPropsType> = (props) => {
  const { id, profession, payment_from, currency, town, type_of_work } = props;

  const { className, onSaveClickHandle } = useSaveHandleClick(id);

  return (
    <div data-elem={`vacancy-${id}`} className="card">
      <div className="card__info">
        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          to={`/details/${id}`}
        >
          <h3 className="card__title">{profession}</h3>
        </NavLink>

        <div className="card__details">
          <span className="card__salary">
            з/п от {payment_from} {currency}
          </span>
          <li className="card__time">{type_of_work}</li>
        </div>
        <p className="card__place">{town}</p>
      </div>
      <SavedButton
        id={id}
        className={className}
        onClick={() => onSaveClickHandle()}
      />
    </div>
  );
};

export default Card;
