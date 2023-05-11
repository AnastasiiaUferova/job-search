import { TextInput } from "@mantine/core";
import "../../styles/SearchComponent/SearchComponent.css";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useForm } from "@mantine/form";
import cardContext from "../../context/CardsContext";
import { useContext, useEffect, useState } from "react";

export default function SearchInput() {
  const SearchIcon = () => {
    return <div className="search-comp__icon"></div>;
  };

  const { setKeyword, keyword, setIsSearchSubmitted } = useContext(cardContext);

  const form = useForm({
    initialValues: {
      query: "",
      termsOfService: false,
    },
  });

  const [inputValue, setInputValue] = useState(form.values.query);

  useEffect(() => {
    setInputValue(keyword);
  }, [keyword]);

  return (
    <form
      onSubmit={form.onSubmit(() => {
        setKeyword(inputValue);
        setIsSearchSubmitted(true);
      })}
    >
      <TextInput
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          form.setFieldValue("query", event.target.value);
          setKeyword(event.target.value);
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
