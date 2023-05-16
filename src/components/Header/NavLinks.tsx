import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <div className="header__links">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "header__links_active" : "")}
        end
      >
        Поиск Вакансий
      </NavLink>
      <NavLink
        to="/saved"
        className={({ isActive }) => (isActive ? "header__links_active" : "")}
        end
      >
        Избранное
      </NavLink>
    </div>
  );
}
