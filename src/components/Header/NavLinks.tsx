import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { NavLinksData } from "../../_constants/constants";

type NavLinksProps = {
  onClick?: () => void;
};

const NavLinks: FC<NavLinksProps> = (props) => {
  return (
    <>
      {NavLinksData.map((item) => (
        <NavLink
          key={item.key}
          to={item.path}
          className={({ isActive }) => (isActive ? "header__links_active" : "")}
          end
          onClick={props.onClick}
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;
