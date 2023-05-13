import React, { useContext } from "react";
import "../../styles/DetailsContainer/DetailsContainer.css";
import Details from "../Details/Details";
import cardContext from "../../context/CardsContext";

export default function DetailsContainer() {
  const text1 =
    "Разработка дизайн-макетов для наружной, интерьерной рекламы, полиграфии, сувенирной продукции. Подготовка и вёрстка макетов в CorelDraw, Adobe photoshop. Создание дизайна логотипов и брендбуков Управленческая функция: обучение, адаптация дизайнеров, их контроль, оценка";
  const { vacDetails } = useContext(cardContext);

  const Component = () => (
    <div dangerouslySetInnerHTML={{ __html: vacDetails.vacancyRichText }} />
  );
  return (
    <div className="details-container">
      <Details title="Обязанности" text={text1} />
      <Details title="Требования" text={text1} />
      <Details title="Условия" text={text1} />
      <Component />
    </div>
  );
}
