/* eslint-disable @typescript-eslint/no-explicit-any */
import { NumberInput, NumberInputHandlers } from "@mantine/core";
import { useRef, FC } from "react";

type NumberInputComponentProps = {
  placeholder: string;
  value: any;
  onChange: any;
  checked?: any;
  error?: any;
  onFocus?: any;
  onBlur?: any;
};

const NumberInputComponent: FC<NumberInputComponentProps> = (props) => {
  const { placeholder, onChange, value } = props;
  const handlers = useRef<NumberInputHandlers>();

  return (
    <div className="filter__number-input">
      <NumberInput
        value={value}
        onChange={onChange}
        handlersRef={handlers}
        hideControls
        min={1}
        styles={{
          rightSection: { pointerEvents: "none" },
          input: {
            height: "42px",
            width: "100%",
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
