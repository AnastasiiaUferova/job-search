import React, { useState } from "react";
import "../../styles/Filter/Filter.css";
import { Select } from "@mantine/core";

export default function Branch() {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const Dropdown = () => {
    return (
      <div className={isOpened ? "dropdown_open dropdown" : "dropdown"}></div>
    );
  };

  return (
    <div className="filter__input-groups">
      <h3 className="filter__subtitle">Отрасль</h3>
      <Select
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
        data={["React", "Angular", "Svelte", "Vue"]}
      />
    </div>
  );
}

/*   item: {
            "&[data-selected]": {
              "&": {
                backgroundColor: "#5E96FC",
              },
            },
            "&[data-hovered]": {
              backgroundColor: "#DEECFF",
            },
          },*/
