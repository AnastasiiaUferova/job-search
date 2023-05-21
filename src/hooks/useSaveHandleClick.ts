import { useCallback, useEffect, useState } from "react";
import { CardPropsType } from "../types/types";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setSavedData } from "../redux/slices/savedSlice";

export default function useSaveCard(id: number) {
  const vacData = useSelector((state: RootState) => state.setVacData.vacData);
  const savedData = useSelector(
    (state: RootState) => state.setSavedData.savedData
  );

  const dispatch = useDispatch();

  const addToSaved = useCallback(
    (id: number) => {
      vacData.map((item: CardPropsType) => {
        if (item.id === id) {
          dispatch(setSavedData([...savedData, item]));
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
      dispatch(setSavedData(filteredData));
      localStorage.setItem("saved", JSON.stringify(filteredData));
    },
    [savedData]
  );

  const savedCardIds = savedData.map((item: CardPropsType) => item.id);

  const [className, setClassName] = useState<string>(() => "card__button");

  console.log(savedCardIds);

  useEffect(() => {
    if (savedCardIds.includes(id)) {
      setClassName("card__button card__button_saved");
    } else setClassName("card__button");
  }, []);

  const onSaveClickHandle = () => {
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
    onSaveClickHandle,
  };
}

/*
  
*/
