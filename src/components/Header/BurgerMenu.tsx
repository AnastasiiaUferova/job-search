import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import MemoMenuPopup from "./MenuPopup";

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
      <MemoMenuPopup close={close} isOpened={opened} />
    </>
  );
}

export default BurgerMenu;
