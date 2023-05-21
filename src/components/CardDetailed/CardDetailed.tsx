import React, { FC } from "react";
import SavedButton from "../Card/SavedButton";
import "../../styles/CardDetailed/CardDetailed.css";
import useSaveHandleClick from "../../hooks/useSaveHandleClick";
import { detailsProps } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const CardDetailed: FC<detailsProps> = (props) => {
  const { profession, payment_from, currency, type_of_work, town } =
    props.details;

  const { className, onSaveClickHandle } = useSaveHandleClick(props.details.id);
  const vacData = useSelector((state: RootState) => state.setVacData.vacData);

  console.log(props.details.id);
  console.log(vacData);

  return (
    <div className="card_detailed">
      <div className="card_detailed__info">
        <h3 className="card_detailed__title">{profession}</h3>
        <div className="card_detailed__details">
          <span className="card_detailed__salary">
            {payment_from} {currency}
          </span>
          <li className="card_detailed__time">{type_of_work.title}</li>
        </div>
        <p className="card_detailed__place">{town.title}</p>
      </div>
      <SavedButton
        id={props.details.id}
        className={className}
        onClick={() => onSaveClickHandle()}
      />
    </div>
  );
};

export default CardDetailed;
