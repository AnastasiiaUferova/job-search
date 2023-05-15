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
      from: "",
      to: "",
    },
  });

  const {
    setCatalogue,
    catalogueData,
    setSalaryFrom,
    setSalaryTo,
    setAgreement,
  } = useContext(cardContext);

  const catalogueId = () => {
    const filteredCatalogueData = catalogueData.filter(
      (item: catalogueItemType) => item.title_trimmed === form.values.catalogue
    );
    if (form.values.catalogue !== "") {
      return String(filteredCatalogueData?.[0]["key"]);
    } else return "";
  };

  const handleReset = () => {
    setCatalogue("");
    setSalaryFrom("");
    setSalaryTo("");
    form.reset();
  };

  return (
    <form
      onSubmit={form.onSubmit(() => {
        setCatalogue(catalogueId());
        setSalaryFrom(form.values.from);
        setSalaryTo(form.values.to);
        if (form.values.to !== "" || form.values.from !== "") {
          setAgreement(1);
        } else setAgreement(0);
      })}
      className="filter"
    >
      <div className="filter__header">
        <h2 className="filter__title">Фильтры</h2>
        <ResetButton onClick={() => handleReset()} />
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
