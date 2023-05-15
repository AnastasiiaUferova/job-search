import cardContext from "../../context/CardsContext";
import "../../styles/SearchComponent/SearchComponent.css";
import SearchInput from "./SearchInput";
import CardList from "../CardList/CardList";
import PaginationComponent from "../Pagination/Pagination";
import { useContext } from "react";
import EmptyStateImg from "../EmptyState/EmptyStateImg";
import { Loader } from "../Loader/Loader";

export default function SearchComponent() {
  const { setPage, vacData, loading } = useContext(cardContext);

  const renderSearchCopmponent = () => {
    if (loading) {
      return <Loader />;
    } else if (!loading && vacData.length === 0) {
      return <EmptyStateImg />;
    } else
      return (
        <>
          <CardList />
          <PaginationComponent setPage={setPage} total={125} />
        </>
      );
  };

  return (
    <div className="search-comp">
      <SearchInput />
      {renderSearchCopmponent()}
    </div>
  );
}
