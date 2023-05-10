import React, { useContext } from "react";
import Card from "../Card/Card";
import "../../styles/CardList/CardList.css";
import cardContext from "../../context/CardsContext";
import { Loader } from "../Loader/Loader";
import { useLocation } from "react-router-dom";

export default function CardList() {
  const location = useLocation();

  const className =
    location.pathname === "/saved" ? "card-list card-list__saved" : "card-list";

  const { vacData, loading, savedData } = useContext(cardContext);

  const isData = vacData && vacData.objects;

  const getCards = () => {
    if (location.pathname === "/saved" && !savedData) {
      return [];
    } else if (location.pathname === "/saved" && savedData) {
      return savedData;
    } else return vacData.objects;
  };

  const renderElements = () => {
    if (loading === false) {
      return (
        <div className={className}>
          {isData &&
            getCards().map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  profession={item.profession}
                  payment_from={item.payment_from}
                  currency={item.currency}
                  town={item.town.title}
                  type_of_work={item.type_of_work.title}
                />
              );
            })}
        </div>
      );
    } else return <Loader />;
  };

  return renderElements();
}
