import React, { FC } from "react";
import "../../styles/MenuPopup/MenuPopup.css";
import { NavLink } from "react-router-dom";
import "../../styles/Header/Header.css";

type MenuPopupProps = {
  isOpened: boolean;
  close: () => void;
};

const MenuPopup: FC<MenuPopupProps> = ({ isOpened, close }) => {
  const className = isOpened ? "menu-popup menu-popup_opened" : "menu-popup";

  return (
    <div className={className}>
      <div className="menu-popup__links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "header__links_active" : "")}
          end
          onClick={close}
        >
          Поиск Вакансий
        </NavLink>
        <NavLink
          to="/saved"
          className={({ isActive }) => (isActive ? "header__links_active" : "")}
          end
          onClick={close}
        >
          Избранное
        </NavLink>
      </div>
    </div>
  );
};

export default MenuPopup;
