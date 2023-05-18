import { createContext } from "react";
import { CardPropsType, vacDetailsType } from "../types/types";

type cardContextType = {
  catalogueData: [];
  vacData: [];
  vacDetails: vacDetailsType;
  loading: boolean;
  page: number;
  keyword: string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  addToSaved: (id: number) => void;
  removeFromSaved: (id: number) => void;
  savedData: [];
  savedDataDisplayed: [];
  setSavedDataDisplayed: React.Dispatch<CardPropsType[]>;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setIsSearchSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchSubmitted: boolean;
  setAgreement: React.Dispatch<React.SetStateAction<number>>;
  setCatalogue: React.Dispatch<React.SetStateAction<string>>;
  setSalaryFrom: React.Dispatch<React.SetStateAction<number | string>>;
  setSalaryTo: React.Dispatch<React.SetStateAction<number | string>>;
  setVacId: React.Dispatch<React.SetStateAction<string>>;
  setIsBurgerOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isBurgerOpened: boolean;
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
  page: 1,
  setPage: () => 1,
  addToSaved: () => [],
  removeFromSaved: () => [],
  setSavedDataDisplayed: () => [],
  setKeyword: () => "",
  keyword: "",
  setIsSearchSubmitted: () => false,
  setAgreement: () => 0,
  isSearchSubmitted: false,
  setCatalogue: () => "",
  setSalaryFrom: () => "",
  setSalaryTo: () => "",
  setVacId: () => "",
  setIsBurgerOpened: () => false,
  isBurgerOpened: false,
});

export default cardContext;
