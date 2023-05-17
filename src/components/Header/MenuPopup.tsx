import React, { FC } from "react";
import "../../styles/MenuPopup/MenuPopup.css";
import "../../styles/Header/Header.css";
import NavLinks from "./NavLinks";

type MenuPopupProps = {
  isOpened: boolean;
  close: () => void;
};

const MenuPopup: FC<MenuPopupProps> = ({ isOpened, close }) => {
  const className = isOpened ? "menu-popup menu-popup_opened" : "menu-popup";

  return (
    <div className={className}>
      <div className="menu-popup__links">
        <NavLinks onClick={close} />
      </div>
    </div>
  );
};

const MemoMenuPopup = React.memo(MenuPopup);
export default MemoMenuPopup;
