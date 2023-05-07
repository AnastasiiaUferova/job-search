import { createContext } from "react";

type cardContext = {
  catalogueData: [];
  //setPopupIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const cardContext = createContext<cardContext>({
  catalogueData: [],
});

export default cardContext;
