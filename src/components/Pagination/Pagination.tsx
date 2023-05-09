import { Pagination } from "@mantine/core";
import { useContext } from "react";
import cardContext from "../../context/CardsContext";
import "../../styles/Pagination/Pagination.css";
import ArrowLight from "../../assets/Hover-star.svg";

export default function PaginationComponent() {
  const { setPage } = useContext(cardContext);

  const arrowRight = () => {
    return <div></div>;
  };

  const arrowLeft = () => {
    return <div></div>;
  };

  return (
    <div className="pagination">
      <Pagination
        nextIcon={arrowRight}
        previousIcon={arrowLeft}
        position="center"
        styles={() => ({
          control: {
            "&[data-active]": {
              backgroundColor: "#5E96FC",
            },
            "&[data-disabled]": {
              backgroundColor: "#FFFFFF",
              opacity: "1",
            },
            border: "1px solid #D5D6DC",
            backgroundColor: "#FFFFFF",
            color: "#232134",
          },
        })}
        onChange={setPage}
        total={20}
        siblings={1}
        defaultValue={1}
      />
    </div>
  );
}
