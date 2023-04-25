import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <div className="header">
      <NavLink to="/">Поиск Вакансии</NavLink>
      <NavLink to="/saved">Избранное</NavLink>
    </div>
  );
}
