import { useContext, useState } from "react";
import cardContext from "../context/CardsContext";
import { CardPropsType } from "../types/types";

export default function useSaveCard(id: number) {
  const { addToSaved, removeFromSaved, savedData } = useContext(cardContext);

  const savedCardIds = savedData.map((item: CardPropsType) => item.id);

  const [className, setClassName] = useState<string>(
    savedCardIds.includes(id)
      ? "card__button card__button_saved"
      : "card__button"
  );

  const onClickHandle = () => {
    if (savedCardIds.includes(id)) {
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
