import { useContext, useEffect, useState } from "react";
import cardContext from "../context/CardsContext";
import { CardPropsType } from "../types/types";

export default function useSaveCard(id: number) {
  const { addToSaved, removeFromSaved, savedData, loading } =
    useContext(cardContext);

  const storageCards = JSON.parse(localStorage.getItem("saved")!);

  const savedCardIds = savedData.map((item: CardPropsType) => item.id);

  const [className, setClassName] = useState<string>(() => "card__button");

  useEffect(() => {
    if (savedCardIds.includes(id) || storageCards.includes(id)) {
      setClassName("card__button card__button_saved");
    } else setClassName("card__button");
  }, [loading]);

  const onClickHandle = () => {
    if (savedCardIds.includes(id) || storageCards.includes(id)) {
      removeFromSaved(id);
      setClassName("card__button");
    } else {
      setClassName("card__button card__button_saved");
      addToSaved(id);
    }
  };

  return {
    className,
    onClickHandle,
  };
}
