/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from "react";
import "../../styles/Filter/Filter.css";
import { Select } from "@mantine/core";
import cardContext from "../../context/CardsContext";

export default function Branch<T>() {
  type optionItem = {
    key: number;
    positions: Array<T>;
    title: string;
    title_rus: string;
    title_trimmed: string;
    url_rus: string;
  };

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const { catalogueData } = useContext(cardContext);
  const [options, setOptions] = useState<string[]>([]);

  const Dropdown = () => {
    return (
      <div className={isOpened ? "dropdown_open dropdown" : "dropdown"}></div>
    );
  };

  useEffect(() => {
    if (catalogueData) {
      setOptions(catalogueData.map((item: optionItem) => item.title));
    }
  }, [catalogueData]);

  return (
    <div className="filter__input-groups">
      <h3 className="filter__subtitle">Отрасль</h3>
      <Select
        data-elem="industry-select"
        onDropdownOpen={() => setIsOpened(true)}
        onDropdownClose={() => setIsOpened(false)}
        searchable
        clearable
        placeholder="Выберете отрасль"
        rightSection={Dropdown()}
        styles={{
          rightSection: { pointerEvents: "none" },
          input: {
            height: "42px",
            cursor: "pointer",
            "&:focus, &:hover": {
              border: "1px solid #5E96FC",
            },
          },

          item: {
            "&[data-selected]": {
              "&, &:hover": {
                backgroundColor: "#5E96FC",
              },
            },
            "&[data-hovered]": {
              backgroundColor: "#DEECFF",
            },
          },
        }}
        data={options}
      />
    </div>
  );
}
