import React from "react";
import "../../styles/Card/Card.css";
import SavedButton from "./SavedButton";

export default function Card() {
  return (
    <div data-elem="vacancy-_vacancy_id_" className="card">
      <div className="card__info">
        <h3 className="card__title">Менеджер-дизайнер</h3>
        <div className="card__details">
          <span className="card__salary">з/п от 70000 rub</span>
          <li className="card__time">Полный рабочий день</li>
        </div>
        <p className="card__place">Новый Уренгой</p>
      </div>
      <SavedButton />
    </div>
  );
}
