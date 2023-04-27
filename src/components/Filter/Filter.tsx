import React from "react";
import Salary from "./Salary";
import Branch from "./Branch";
import "../../styles/Filter/Filter.css";
import ResetButton from "./ResetButton";
import { Button } from "@mantine/core";

export default function Filter() {
  return (
    <div className="filter">
      <div className="filter__header">
        <h2 className="filter__title">Фильтры</h2>
        <ResetButton />
      </div>
      <Branch />
      <Salary />
      <Button
        styles={{
          root: {
            backgroundColor: "#5E96FC",
            border: "none",
            paddingTop: 9.5,
            paddingBottom: 9.5,
            fontFamily: "Inter",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "21px",
            "&:hover": {
              backgroundColor: "#92C1FF",
            },
            "&:focus": {
              backgroundColor: "#3B7CD3",
            },
          },
        }}
      >
        Применить
      </Button>
    </div>
  );
}
