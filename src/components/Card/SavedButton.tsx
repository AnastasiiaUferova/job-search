import React, { FC } from "react";

type SavedButtonProps = {
  onClick: () => void;
};

const SavedButton: FC<SavedButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      data-elem="vacancy-_vacancy_id_-shortlist-button"
      className="card__button"
    ></button>
  );
};

export default SavedButton;
