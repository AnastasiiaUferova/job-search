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
    <div className="filter__branch">
      <h3 className="filter__subtitle">Отрасль</h3>
      <Select
        onDropdownOpen={() => setIsOpened(true)}
        onDropdownClose={() => setIsOpened(false)}
        searchable
        placeholder="Выберете отрасль"
        rightSection={Dropdown()}
        styles={{
          rightSection: { pointerEvents: "none" },
          input: { height: "42px", cursor: "pointer" },
        }}
        data={["React", "Angular", "Svelte", "Vue"]}
      />
    </div>
  );
}
