import React from "react";
import "../../styles/DetailsContainer/DetailsContainer.css";
import Details from "../Details/Details";

export default function DetailsContainer() {
  const text1 =
    "Разработка дизайн-макетов для наружной, интерьерной рекламы, полиграфии, сувенирной продукции. Подготовка и вёрстка макетов в CorelDraw, Adobe photoshop. Создание дизайна логотипов и брендбуков Управленческая функция: обучение, адаптация дизайнеров, их контроль, оценка";
  return (
    <div className="details-container">
      <Details title="Обязанности" text={text1} />
      <Details title="Требования" text={text1} />
      <Details title="Условия" text={text1} />
    </div>
  );
}
