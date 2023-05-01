import React from "react";
import SavedButton from "../Card/SavedButton";
import "../../styles/CardDetailed/CardDetailed.css";

export default function CardDetailed() {
  return (
    <div className="card_detailed">
      <div className="card_detailed__info">
        <h3 className="card_detailed__title">Менеджер-дизайнер</h3>
        <div className="card_detailed__details">
          <span className="card_detailed__salary">з/п от 70000 rub</span>
          <li className="card_detailed__time">Полный рабочий день</li>
        </div>
        <p className="card_detailed__place">Новый Уренгой</p>
      </div>
      <SavedButton />
    </div>
  );
}
