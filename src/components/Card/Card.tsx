import { FC, useContext } from "react";
import "../../styles/Card/Card.css";
import SavedButton from "./SavedButton";
import cardContext from "../../context/CardsContext";
import { CardPropsType } from "../../types/types";
import { NavLink } from "react-router-dom";
import useSaveCard from "../../hooks/useSaveCard";

const Card: FC<CardPropsType> = (props) => {
  const { id, profession, payment_from, currency, town, type_of_work } = props;

  const { setVacId } = useContext(cardContext);

  const { className, onClickHandle } = useSaveCard(id);

  return (
    <div data-elem={`vacancy-_vacancy_id_${id}`} className="card">
      <div className="card__info">
        <NavLink
          onClick={() => setVacId(id)}
          target="_blank"
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
      <SavedButton className={className} onClick={() => onClickHandle()} />
    </div>
  );
};

export default Card;
