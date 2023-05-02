import { TextInput } from "@mantine/core";
import "../../styles/SearchComponent/SearchComponent.css";
import React from "react";
import SubmitButton from "../SubmitButton/SubmitButton";

export default function SearchInput() {
  const SearchIcon = () => {
    return <div className="search-comp__icon"></div>;
  };

  return (
    <>
      <TextInput
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
    </>
  );
}
