import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CardListItemType } from "../types/types";
import { PAGE_SIZE } from "../_constants/constants";
import { RootState } from "../redux/store";

export const useRenderSaved = () => {
  const [activePage, setPage] = useState(1);

  const savedData = useSelector(
    (state: RootState) => state.setSavedData.savedData
  );

  const [savedDataDisplayed, setSavedDataDisplayed] = useState<
    CardListItemType[]
  >(() => savedData.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (activePage - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setSavedDataDisplayed(savedData.slice(from, to));
  }, [activePage, savedData]);

  useEffect(() => {
    if (savedDataDisplayed.length === 0 && savedData.length !== 0) {
      setPage((prevPage) => prevPage - 1);
    }
  }, [savedDataDisplayed, savedData]);

  return {
    savedDataDisplayed,
    setPage,
    activePage,
  };
};
