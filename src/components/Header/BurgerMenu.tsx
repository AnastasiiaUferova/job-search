import React from "react";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import MenuPopup from "./MenuPopup";

function BurgerMenu() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Burger
        style={{ zIndex: 4 }}
        color="#232134"
        opened={opened}
        onClick={toggle}
        size="md"
      />
      <MenuPopup close={close} isOpened={opened} />
    </>
  );
}

export default BurgerMenu;
