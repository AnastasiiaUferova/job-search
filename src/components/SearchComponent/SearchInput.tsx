import { TextInput } from "@mantine/core";
import "../../styles/SearchComponent/SearchComponent.css";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useForm } from "@mantine/form";
import cardContext from "../../context/CardsContext";
import { useContext } from "react";

export default function SearchInput() {
  const SearchIcon = () => {
    return <div className="search-comp__icon"></div>;
  };

  const { setKeyword } = useContext(cardContext);

  const form = useForm({
    initialValues: {
      query: "",
      termsOfService: false,
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => setKeyword(values.query))}>
      <TextInput
        {...form.getInputProps("query")}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          form.setFieldValue("query", event.target.value)
        }
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
