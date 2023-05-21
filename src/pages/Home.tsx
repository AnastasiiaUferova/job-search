import React, { FC, SetStateAction } from "react";
import "../styles/Home/Home.css";
import Filter from "../components/Filter/Filter";
import SearchComponent from "../components/SearchComponent/SearchComponent";

export type homeProps = {
  setActivePage: React.Dispatch<SetStateAction<number>>;
  activePage: number;
  loading: boolean;
};

const Home: FC<homeProps> = (props) => {
  const { setActivePage, activePage, loading } = props;

  return (
    <main className="home">
      <Filter />
      <SearchComponent
        setActivePage={setActivePage}
        activePage={activePage}
        loading={loading}
      />
    </main>
  );
};

export default Home;
