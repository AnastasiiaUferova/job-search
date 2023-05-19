/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, FC } from "react";
import "../../styles/Filter/Filter.css";
import { Select } from "@mantine/core";
import { Loader } from "../Loader/Loader";

type SelectProps = {
  value: any;
  onChange: any;
  checked?: any;
  error?: any;
  onFocus?: any;
  onBlur?: any;
  catalogueData: [];
};

const Branch: FC<SelectProps> = (props) => {
  type optionItem = {
    key: number;
    title: string;
    title_rus: string;
    title_trimmed: string;
    url_rus: string;
  };

  const { catalogueData } = props;

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [options, setOptions] = useState<string[]>([]);

  const Dropdown = () => {
    return (
      <div className={isOpened ? "dropdown_open dropdown" : "dropdown"}></div>
    );
  };

  useEffect(() => {
    if (catalogueData) {
      setOptions(catalogueData.map((item: optionItem) => item.title_trimmed));
    }
  }, [catalogueData]);

  return (
    <div className="filter__input-groups">
      <h3 className="filter__subtitle">Отрасль</h3>
      {catalogueData ? (
        <Select
          onChange={props.onChange}
          value={props.value}
          data-elem="industry-select"
          onDropdownOpen={() => setIsOpened(true)}
          onDropdownClose={() => setIsOpened(false)}
          placeholder="Выберите отрасль"
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
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Branch;
