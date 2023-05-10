import React from "react";
import "../../styles/Header/Header.css";
import { NavLink } from "react-router-dom";

function Header(): JSX.Element {
  return (
    <header className="header">
      <nav className="header__content">
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
      </nav>
    </header>
  );
}
const MemoHeader = React.memo(Header);
export default MemoHeader;
