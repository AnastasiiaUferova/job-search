import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const useParams = () => {
  const keyword = useSelector((state: RootState) => state.setKeyword.keyword);
  const salaryFrom = useSelector(
    (state: RootState) => state.setSalaryFrom.salaryFrom
  );
  const salaryTo = useSelector(
    (state: RootState) => state.setSalaryTo.salaryTo
  );
  const catalogue = useSelector(
    (state: RootState) => state.setCatalogue.catalogue
  );
  const agreement = useSelector(
    (state: RootState) => state.setAgreement.agreement
  );

  return {
    keyword,
    salaryFrom,
    salaryTo,
    catalogue,
    agreement,
  };
};

export default useParams;
