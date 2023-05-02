import { Group } from "@mantine/core";
import NumberInputComponent from "./NumberInputComponent";

export default function Salary() {
  return (
    <div className="filter__input-groups filter__number-inputs">
      <h3 className="filter__subtitle">Оклад</h3>
      <Group>
        <NumberInputComponent data-elem="salary-from-input" placeholder="От" />
        <NumberInputComponent data-elem="salary-to-input" placeholder="До" />
      </Group>
    </div>
  );
}
