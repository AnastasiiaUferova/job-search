import cardContext from "../../context/CardsContext";
import "../../styles/SearchComponent/SearchComponent.css";
import SearchInput from "./SearchInput";
import CardList from "../CardList/CardList";
import PaginationComponent from "../Pagination/Pagination";
import { useContext } from "react";
import EmptyStateImg from "../EmptyState/EmptyStateImg";

export default function SearchComponent() {
  const { setPage, vacData, isSearchSubmitted } = useContext(cardContext);

  const isData = vacData.length > 0 && isSearchSubmitted === false;

  return (
    <div className="search-comp">
      <SearchInput />
      {isData ? (
        <>
          <CardList />
          <PaginationComponent setPage={setPage} total={20} />
        </>
      ) : (
        <EmptyStateImg />
      )}
    </div>
  );
}
