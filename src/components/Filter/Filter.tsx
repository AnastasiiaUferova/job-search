import { useContext } from "react";
import Salary from "./Salary";
import Branch from "./Branch";
import "../../styles/Filter/Filter.css";
import ResetButton from "./ResetButton";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useForm } from "@mantine/form";
import cardContext from "../../context/CardsContext";

export default function Filter() {
  type catalogueItemType = {
    key: number;
    positions: object[];
    title: string;
    title_rus: string;
    title_trimmed: string;
    url_rus: string;
  };

  const form = useForm({
    initialValues: {
      catalogue: "",
      from: "",
      to: "",
    },
  });

  const { setCatalogue, catalogueData, setIsSearchSubmitted } =
    useContext(cardContext);

  const catalogueId = () => {
    const filteredCatalogueData = catalogueData.filter(
      (item: catalogueItemType) => item.title === form.values.catalogue
    );
    return String(filteredCatalogueData[0]["key"]);
  };

  return (
    <form
      onSubmit={form.onSubmit(() => {
        setCatalogue(catalogueId());
        setIsSearchSubmitted(true);
      })}
      className="filter"
    >
      <div className="filter__header">
        <h2 className="filter__title">Фильтры</h2>
        <ResetButton />
      </div>
      <Branch {...form.getInputProps("catalogue")} />
      <Salary />
      <SubmitButton className="filter__submit-button" title="Применить" />
    </form>
  );
}
