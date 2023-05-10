import React, { FC } from "react";

type SavedButtonProps = {
  onClick: () => void;
  className: string;
};

const SavedButton: FC<SavedButtonProps> = (props) => {
  const { onClick, className } = props;
  return (
    <button
      onClick={onClick}
      data-elem="vacancy-_vacancy_id_-shortlist-button"
      className={className}
    ></button>
  );
};

export default SavedButton;
