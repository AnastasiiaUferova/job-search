import React from "react";
import { Button } from "@mantine/core";

export default function SubmitButton() {
  return (
    <>
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
    </>
  );
}
