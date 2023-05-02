import React from "react";
import "../../styles/Header/Header.css";
import { NavLink } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <NavLink className="header__logo_title" to="/">
            Jobored
          </NavLink>
        </div>
        <div className="header__links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "header__links_active" : ""
            }
            end
          >
            Поиск Вакансий
          </NavLink>
          <NavLink
            to="/saved"
            className={({ isActive }) =>
              isActive ? "header__links_active" : ""
            }
            end
          >
            Избранное
          </NavLink>
        </div>
      </div>
    </header>
  );
}
