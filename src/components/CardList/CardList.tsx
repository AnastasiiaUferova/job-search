import React, { useContext, useState } from "react";
import Card from "../Card/Card";
import "../../styles/CardList/CardList.css";
import cardContext from "../../context/CardsContext";
import { Loader } from "../Loader/Loader";

export default function CardList() {
  const { vac: vacData, loading } = useContext(cardContext);
  //const [data, setData] = useState(vacData.objects);

  const isData = vacData && vacData.objects;

  console.log(vacData);

  const renderElements = () => {
    if (loading === false) {
      return (
        <div className="card-list">
          {isData &&
            vacData.objects.map((item) => {
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
