import { Button } from "@mantine/core";

export default function NavButton() {
  return (
    <>
      <Button
        styles={{
          root: {
            backgroundColor: "#DEECFF",
            height: "42px",
            width: "164px",
            borderRadius: "8px",
            color: "#3B7CD3",
            border: "none",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "21,7px",
            "&:hover, &:focus": {
              backgroundColor: "#5E96FC",
              color: "#FFF",
            },
          },
        }}
      >
        Поиск Вакансий
      </Button>
    </>
  );
}
