import { useEffect, useState } from "react";
import { totalType } from "../types/types";

const useSetTotalPages = (data: totalType) => {
  const [totalPages, setTotalPages] = useState<number>(125);
  const hanldeSetTotalPages = () => {
    if (data) {
      const total = Math.ceil(data?.total / 4);
      if (total > 125) {
        return setTotalPages(125);
      } else return setTotalPages(total);
    }
  };

  useEffect(() => {
    hanldeSetTotalPages();
  }, [data]);

  return {
    totalPages,
  };
};

export default useSetTotalPages;
