import { useCallback, useContext } from "react";
import { CardPropsType } from "../types/types";
import cardContext from "../context/CardsContext";

const useSaveFunctions = (cardId: number) => {
  const { vacData, savedData, setSavedData } = useContext(cardContext);
  const addToSaved = useCallback(() => {
    vacData.map((item: CardPropsType) => {
      if (item.id === cardId) {
        setSavedData([...savedData, item]);
        localStorage.setItem("saved", JSON.stringify(savedData));
      }
      return item;
    });
  }, [savedData, vacData]);

  const removeFromSaved = useCallback(() => {
    const filteredData = savedData.filter((item: CardPropsType) => {
      return item.id !== cardId;
    });
    setSavedData(filteredData);
    localStorage.setItem("saved", JSON.stringify(filteredData));
  }, [savedData]);

  return { addToSaved, removeFromSaved };
};

export default useSaveFunctions;
