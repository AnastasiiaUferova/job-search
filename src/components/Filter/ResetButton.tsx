import React, { FC } from "react";

type ResetButtonProps = {
  onClick: () => void;
};

const ResetButton: FC<ResetButtonProps> = (props) => {
  return (
    <button onClick={props.onClick} className="filter__reset">
      Сбросить все
    </button>
  );
};

export default ResetButton;
