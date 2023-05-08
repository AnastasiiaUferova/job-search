import { createContext } from "react";

type cardContext = {
  catalogueData: [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  vacData?: any;
  //setPopupIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const cardContext = createContext<cardContext>({
  catalogueData: [],
  vacData: [],
});

export default cardContext;
