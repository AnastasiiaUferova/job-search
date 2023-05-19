import { useCallback, useContext } from "react";
import { CardPropsType } from "../types/types";
import cardContext from "../context/CardsContext";

const useSaveFunctions = () => {
  const { vacData, savedData, setSavedData } = useContext(cardContext);
  const addToSaved = useCallback(
    (id: number) => {
      vacData.map((item: CardPropsType) => {
        if (item.id === id) {
          setSavedData([...savedData, item]);
          localStorage.setItem("saved", JSON.stringify(savedData));
        }
        return item;
      });
    },
    [savedData, vacData]
  );

  const removeFromSaved = useCallback(
    (id: number) => {
      const filteredData = savedData.filter((item: CardPropsType) => {
        return item.id !== id;
      });
      setSavedData(filteredData);
      localStorage.setItem("saved", JSON.stringify(filteredData));
    },
    [savedData]
  );

  return { addToSaved, removeFromSaved };
};

export default useSaveFunctions;
