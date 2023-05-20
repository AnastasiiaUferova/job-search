import { createContext } from "react";

type cardContextType = {
  loggedIn: boolean;
};

const cardContext = createContext<cardContextType>({
  loggedIn: false,
});

export default cardContext;
