/* eslint-disable @typescript-eslint/no-explicit-any */
import { NumberInput, NumberInputHandlers } from "@mantine/core";
import React, { useRef, FC } from "react";

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
        min={500}
        step={500}
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
          style={{ width: "12px" }}
          type="button"
          className="filter__number-inputs_button"
          onClick={() => handlers.current?.increment()}
        ></button>
        <button
          style={{ width: "12px" }}
          className="filter__number-inputs_button"
          type="button"
          onClick={() => handlers.current?.decrement()}
        ></button>
      </div>
    </div>
  );
};

export default NumberInputComponent;
