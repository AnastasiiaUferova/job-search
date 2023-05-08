import { createContext } from "react";

type cardContext = {
  catalogueData: [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  vac: any;
  //setPopupIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
};

const cardContext = createContext<cardContext>({
  catalogueData: [],
  vac: [],
  loading: false,
});

export default cardContext;
