import React, { FC } from "react";

type SavedButtonProps = {
  onClick: () => void;
  className: string;
  id: number;
};

const SavedButton: FC<SavedButtonProps> = (props) => {
  const { onClick, className, id } = props;

  return (
    <button
      onClick={onClick}
      data-elem={`vacancy-${id}-shortlist-button`}
      className={className}
    ></button>
  );
};

export default SavedButton;
