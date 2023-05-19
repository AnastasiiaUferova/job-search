import { useContext, useEffect, useState } from "react";
import cardContext from "../context/CardsContext";
import { CardPropsType } from "../types/types";

export default function useSaveHandleClick(
  id: number,
  addToSaved: () => void,
  removeFromSaved: () => void
) {
  const { savedData, loading } = useContext(cardContext);

  const storageCards = JSON.parse(localStorage.getItem("saved")!);

  const savedCardIds = savedData.map((item: CardPropsType) => item.id);

  const [className, setClassName] = useState<string>(() => "card__button");

  useEffect(() => {
    if (savedCardIds.includes(id) || storageCards.includes(id)) {
      setClassName("card__button card__button_saved");
    } else setClassName("card__button");
  }, [loading]);

  const onSaveClickHandle = () => {
    if (savedCardIds.includes(id) || storageCards.includes(id)) {
      removeFromSaved();
      setClassName("card__button");
    } else {
      setClassName("card__button card__button_saved");
      addToSaved();
    }
  };

  return {
    className,
    onSaveClickHandle,
  };
}
