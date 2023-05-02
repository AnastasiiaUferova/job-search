import React from "react";
import "../../styles/EmptyState/EmptyState.css";
import EmptyStateImg from "../../assets/NoResults.svg";
import NavButton from "./NavButton";
import { NavLink } from "react-router-dom";

export default function EmptyState() {
  return (
    <div className="empty">
      <div className="empty__container">
        <img
          alt="Человек с лупой - ничего не найдено"
          src={EmptyStateImg}
        ></img>
        <h3 className="empty__title">Упс, здесь еще ничего нет!</h3>
        <NavLink to="/">
          <NavButton />
        </NavLink>
      </div>
    </div>
  );
}
