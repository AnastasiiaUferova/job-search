import { Pagination } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import cardContext from "../../context/CardsContext";

export default function PaginationComponent() {
  //const [currentImages, setCurrentImages] = useState(null);
  //const [pageCount, setPageCount] = useState(0);

  const { page, setPage } = useContext(cardContext);

  return (
    <div className="pagination">
      <button
        disabled={page === 1}
        onClick={() => setPage((prevState) => prevState - 1)}
      >
        Prev
      </button>
      <p>{page}</p>
      <button onClick={() => setPage((prevState) => prevState + 1)}>
        Next
      </button>
    </div>
  );
}

//    <Pagination total={20} siblings={1} defaultValue={1} />
