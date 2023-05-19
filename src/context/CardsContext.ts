import { createContext } from "react";
import { CardPropsType } from "../types/types";

type cardContextType = {
  vacData: [];
  loading: boolean;
  savedData: [];
  setSavedData: React.Dispatch<CardPropsType[]>;
  savedDataDisplayed: [];
  setSavedDataDisplayed: React.Dispatch<CardPropsType[]>;
  setVacId: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  loggedIn: boolean;
};

const cardContext = createContext<cardContextType>({
  vacData: [],
  savedData: [],
  savedDataDisplayed: [],
  loading: false,
  setSavedDataDisplayed: () => [],
  setSavedData: () => [],
  setVacId: () => "",
  setPage: () => 1,
  page: 1,
  loggedIn: false,
});

export default cardContext;
