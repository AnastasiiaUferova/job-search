import { NumberInput, NumberInputHandlers } from "@mantine/core";
import { useState, useRef, FC } from "react";

type NumberInputComponentProps = {
  placeholder: string;
};

const NumberInputComponent: FC<NumberInputComponentProps> = ({
  placeholder,
}) => {
  const [value, setValue] = useState<number | "">();
  const handlers = useRef<NumberInputHandlers>();

  return (
    <div className="filter__number-input">
      <NumberInput
        value={value}
        onChange={(val) => setValue(val)}
        handlersRef={handlers}
        hideControls
        min={0}
        styles={{
          rightSection: { pointerEvents: "none" },
          input: {
            height: "42px",
            width: "273px",
            cursor: "pointer",
            "&:focus, &:hover": {
              border: "1px solid #5E96FC",
            },
          },
        }}
        placeholder={placeholder}
      />
      <div className="filter__number-inputs_buttons">
        <button
          type="button"
          onClick={() => handlers.current?.increment()}
        ></button>
        <button
          type="button"
          onClick={() => handlers.current?.decrement()}
        ></button>
      </div>
    </div>
  );
};

export default NumberInputComponent;
