import { createContext } from "react";
import { CardPropsType, vacDetailsType } from "../types/types";

type cardContextType = {
  catalogueData: [];
  vacData: [];
  vacDetails: vacDetailsType;
  loading: boolean;
  savedData: [];
  setSavedData: React.Dispatch<CardPropsType[]>;
  savedDataDisplayed: [];
  setSavedDataDisplayed: React.Dispatch<CardPropsType[]>;
  setIsSearchSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchSubmitted: boolean;
  setVacId: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
};

const cardContext = createContext<cardContextType>({
  catalogueData: [],
  vacData: [],
  vacDetails: {
    id: 0,
    profession: "",
    payment_from: 0,
    currency: "",
    town: {
      title: "",
    },
    type_of_work: {
      title: "",
    },
    vacancyRichText: "",
  },
  savedData: [],
  savedDataDisplayed: [],
  loading: false,
  setSavedDataDisplayed: () => [],
  setSavedData: () => [],
  setIsSearchSubmitted: () => false,
  isSearchSubmitted: false,
  setVacId: () => "",
  setPage: () => 1,
  page: 1,
});

export default cardContext;
