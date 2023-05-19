import { useCallback } from "react";
import { CardPropsType } from "../types/types";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setSavedData } from "../redux/slices/savedSlice";

const useSaveFunctions = (cardId: number) => {
  const vacData = useSelector((state: RootState) => state.setVacData.vacData);
  const savedData = useSelector(
    (state: RootState) => state.setSavedData.savedData
  );

  const dispatch = useDispatch();

  const addToSaved = useCallback(() => {
    vacData.map((item: CardPropsType) => {
      if (item.id === cardId) {
        dispatch(setSavedData([...savedData, item]));
        localStorage.setItem("saved", JSON.stringify(savedData));
      }
      return item;
    });
  }, [savedData, vacData]);

  const removeFromSaved = useCallback(() => {
    const filteredData = savedData.filter((item: CardPropsType) => {
      return item.id !== cardId;
    });
    dispatch(setSavedData(filteredData));
    localStorage.setItem("saved", JSON.stringify(filteredData));
  }, [savedData]);

  return { addToSaved, removeFromSaved };
};

export default useSaveFunctions;
