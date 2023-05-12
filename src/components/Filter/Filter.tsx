import { useContext } from "react";
import Branch from "./Branch";
import "../../styles/Filter/Filter.css";
import ResetButton from "./ResetButton";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useForm } from "@mantine/form";
import cardContext from "../../context/CardsContext";
import { catalogueItemType } from "../../types/types";
import { Group } from "@mantine/core";
import NumberInputComponent from "./NumberInputComponent";

export default function Filter() {
  const form = useForm({
    initialValues: {
      catalogue: "",
      from: 1,
      to: 1,
    },
  });

  const { setCatalogue, catalogueData, setSalaryFrom, setSalaryTo } =
    useContext(cardContext);

  const catalogueId = () => {
    const filteredCatalogueData = catalogueData.filter(
      (item: catalogueItemType) => item.title === form.values.catalogue
    );
    if (form.values.catalogue !== "") {
      return String(filteredCatalogueData?.[0]["key"]);
    } else return "";
  };

  return (
    <form
      onSubmit={form.onSubmit(() => {
        setCatalogue(catalogueId());
        setSalaryFrom(form.values.from);
        setSalaryTo(form.values.to);
      })}
      className="filter"
    >
      <div className="filter__header">
        <h2 className="filter__title">Фильтры</h2>
        <ResetButton />
      </div>
      <Branch {...form.getInputProps("catalogue")} />
      <div className="filter__input-groups filter__number-inputs">
        <h3 className="filter__subtitle">Оклад</h3>
        <Group>
          <NumberInputComponent
            {...form.getInputProps("from")}
            data-elem="salary-from-input"
            placeholder="От"
          />
          <NumberInputComponent
            {...form.getInputProps("to")}
            data-elem="salary-to-input"
            placeholder="До"
          />
        </Group>
      </div>
      <SubmitButton className="filter__submit-button" title="Применить" />
    </form>
  );
}
