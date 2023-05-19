import React, { useContext, useEffect, useState } from "react";
import { TextInput } from "@mantine/core";
import "../../styles/SearchComponent/SearchComponent.css";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useForm } from "@mantine/form";
import cardContext from "../../context/CardsContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setKeyword } from "../../redux/slices/paramsSlice";

export default function SearchInput() {
  const SearchIcon = () => {
    return <div className="search-comp__icon"></div>;
  };

  const keyword = useSelector((state: RootState) => state.setKeyword.keyword);
  const dispatch = useDispatch();

  const { setIsSearchSubmitted } = useContext(cardContext);

  const form = useForm({
    initialValues: {
      query: "",
    },
  });

  const [inputValue, setInputValue] = useState(form.values.query);

  useEffect(() => {
    setInputValue(keyword);
  }, [keyword]);

  return (
    <form
      onSubmit={form.onSubmit(() => {
        dispatch(setKeyword(inputValue));
        setIsSearchSubmitted(true);
      })}
    >
      <TextInput
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          form.setFieldValue("query", event.target.value);
          dispatch(setKeyword(event.target.value));
        }}
        value={inputValue}
        data-elem="search-input"
        icon={<SearchIcon />}
        placeholder="Введите название вакансии"
        styles={{
          rightSection: {
            width: "83px",
            height: "32px",
            marginRight: "6px",
            marginTop: "4px",
          },
        }}
        rightSection={
          <div>
            <SubmitButton title="Поиск" className="search-comp__button" />
          </div>
        }
      />
    </form>
  );
}
