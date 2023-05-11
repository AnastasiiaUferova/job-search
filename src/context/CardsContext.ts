import { createContext } from "react";
import { CardPropsType } from "../types/types";

type cardContext = {
  catalogueData: [];

  vacData: [];
  loading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  addToSaved: (id: number) => void;
  removeFromSaved: (id: number) => void;
  savedData: [];
  savedDataDisplayed: [];
  setSavedDataDisplayed: React.Dispatch<CardPropsType[]>;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
};

const cardContext = createContext<cardContext>({
  catalogueData: [],
  vacData: [],
  savedData: [],
  savedDataDisplayed: [],
  loading: false,
  page: 1,
  setPage: () => 1,
  addToSaved: () => [],
  removeFromSaved: () => [],
  setSavedDataDisplayed: () => [],
  setKeyword: () => [],
});

export default cardContext;
