import React from "react";
import "../../styles/Header/Header.css";
import { NavLink } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo">
          <NavLink className="header__logo_title" to="/">
            Jobored
          </NavLink>
        </div>
        <div className="header__links">
          <NavLink to="/">Поиск Вакансии</NavLink>
          <NavLink to="/saved">Избранное</NavLink>
        </div>
      </div>
    </div>
  );
}
