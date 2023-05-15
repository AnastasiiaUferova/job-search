import { Pagination } from "@mantine/core";
import { FC } from "react";
import "../../styles/Pagination/Pagination.css";

type PaginationPropsType = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  page: number;
};

const PaginationComponent: FC<PaginationPropsType> = (props) => {
  const { setPage, total, page } = props;

  const voidDiv = () => {
    return <div></div>;
  };

  return (
    <div className="pagination">
      <Pagination
        nextIcon={voidDiv}
        previousIcon={voidDiv}
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
        total={total}
        value={page}
      />
    </div>
  );
};

export default PaginationComponent;
