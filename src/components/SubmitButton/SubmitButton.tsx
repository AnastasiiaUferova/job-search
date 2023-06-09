import React, { FC } from "react";
import { Button } from "@mantine/core";

type SubmitButtonProps = {
  title: string;
  className: string;
};

const SubmitButton: FC<SubmitButtonProps> = ({ title, className }) => {
  return (
    <>
      <Button
        data-elem="search-button"
        className={className}
        type="submit"
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
        {title}
      </Button>
    </>
  );
};

export default SubmitButton;
