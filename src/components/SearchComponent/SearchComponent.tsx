import cardContext from "../../context/CardsContext";
import "../../styles/SearchComponent/SearchComponent.css";
import SearchInput from "./SearchInput";
import CardList from "../CardList/CardList";
import PaginationComponent from "../Pagination/Pagination";
import { useContext } from "react";
//import { Loader } from "../Loader/Loader";

export default function SearchComponent() {
  const { setPage } = useContext(cardContext);
  return (
    <div className="search-comp">
      <SearchInput />
      <CardList />
      <PaginationComponent setPage={setPage} total={20} />
    </div>
  );
}

//  <Loader />
