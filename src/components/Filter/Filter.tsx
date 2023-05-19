import React, { useContext } from "react";
import Branch from "./Branch";
import "../../styles/Filter/Filter.css";
import ResetButton from "./ResetButton";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useForm } from "@mantine/form";
import cardContext from "../../context/CardsContext";
import { catalogueItemType } from "../../types/types";
import { Group } from "@mantine/core";
import NumberInputComponent from "./NumberInputComponent";
import { useDispatch } from "react-redux";
import {
  setAgreement,
  setCatalogue,
  setSalaryFrom,
  setSalaryTo,
} from "../../redux/slices/paramsSlice";
import { useGetCataloguesQuery } from "../../redux/slices/apiSlice";

export default function Filter() {
  const form = useForm({
    initialValues: {
      catalogue: "",
      from: "",
      to: "",
    },
  });

  const { loggedIn } = useContext(cardContext);

  const dispatch = useDispatch();

  const { data: catalogueData, isError: catalogueError } =
    useGetCataloguesQuery("", {
      skip: !loggedIn,
    });

  const catalogueId = () => {
    const filteredCatalogueData = catalogueData.filter(
      (item: catalogueItemType) => item.title_trimmed === form.values.catalogue
    );
    if (form.values.catalogue !== "") {
      return String(filteredCatalogueData?.[0]["key"]);
    } else return "";
  };

  const handleReset = () => {
    dispatch(setSalaryTo(""));
    dispatch(setSalaryFrom(""));
    dispatch(setCatalogue(""));

    form.reset();
  };

  return (
    <form
      onSubmit={form.onSubmit(() => {
        dispatch(setCatalogue(catalogueId()));
        dispatch(setSalaryFrom(form.values.from));
        dispatch(setSalaryTo(form.values.to));
        if (form.values.to !== "" || form.values.from !== "") {
          dispatch(setAgreement(1));
        } else dispatch(setAgreement(0));
      })}
      className="filter"
    >
      <div className="filter__header">
        <h2 className="filter__title">Фильтры</h2>
        <ResetButton onClick={() => handleReset()} />
      </div>
      <Branch
        catalogueData={catalogueData}
        {...form.getInputProps("catalogue")}
      />
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
