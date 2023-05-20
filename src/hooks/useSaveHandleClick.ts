import { useEffect, useState } from "react";
import { CardPropsType } from "../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function useSaveHandleClick(
  id: number,
  addToSaved: () => void,
  removeFromSaved: () => void
) {
  const savedData = useSelector(
    (state: RootState) => state.setSavedData.savedData
  );

  const storageCards = JSON.parse(localStorage.getItem("saved")!);
  const storageCardsIds =
    storageCards && storageCards.map((item: CardPropsType) => item.id);

  const savedCardIds = savedData.map((item: CardPropsType) => item.id);

  const [className, setClassName] = useState<string>(() => "card__button");

  useEffect(() => {
    if (storageCardsIds.includes(id)) {
      setClassName("card__button card__button_saved");
    } else setClassName("card__button");
  }, []);

  console.log(storageCardsIds);
  console.log(savedCardIds);

  const onSaveClickHandle = () => {
    if (!savedCardIds.includes(id)) {
      setClassName("card__button card__button_saved");
      addToSaved();
    } else {
      removeFromSaved();
      setClassName("card__button");
    }
  };

  return {
    className,
    onSaveClickHandle,
  };
}
