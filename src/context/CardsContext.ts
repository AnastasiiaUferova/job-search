import { createContext } from "react";

type cardContext = {
  catalogueData: [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  vacData: any;
  loading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  addToSaved: (id: number) => void;
  removeFromSaved: (id: number) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  savedData: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  savedDataDisplayed: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSavedDataDisplayed: React.Dispatch<any>;
};

const cardContext = createContext<cardContext>({
  catalogueData: [],
  vacData: [],
  savedData: [],
  savedDataDisplayed: [],
  loading: false,
  page: 1,
  setPage: () => 1,
  addToSaved: () => 1,
  removeFromSaved: () => 1,
  setSavedDataDisplayed: () => 1,
});

export default cardContext;
