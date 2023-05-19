import { createContext } from "react";
import { CardPropsType } from "../types/types";

type cardContextType = {
  setVacId: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  loggedIn: boolean;
};

const cardContext = createContext<cardContextType>({
  setVacId: () => "",
  setPage: () => 1,
  page: 1,
  loggedIn: false,
});

export default cardContext;
