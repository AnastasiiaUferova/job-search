import { createContext } from "react";

type cardContext = {
  catalogueData: [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  vacData: any;
  loading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const cardContext = createContext<cardContext>({
  catalogueData: [],
  vacData: [],
  loading: false,
  page: 1,
  setPage: () => 1,
});

export default cardContext;
