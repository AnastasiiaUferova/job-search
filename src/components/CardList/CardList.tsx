import React, { FC } from "react";
import Card from "../Card/Card";
import "../../styles/CardList/CardList.css";
import { Loader } from "../Loader/Loader";
import { useLocation } from "react-router-dom";
import { CardListItemType } from "../../types/types";

type cardListProps = {
  cards: [];
  loading?: boolean;
};

const CardList: FC<cardListProps> = (props) => {
  const location = useLocation();

  const { cards, loading } = props;
  const className =
    location.pathname === "/saved" ? "card-list card-list__saved" : "card-list";

  const renderElements = () => {
    if (!loading) {
      return (
        <div className={className}>
          {cards &&
            cards.map((item: CardListItemType) => {
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
};

export default CardList;
