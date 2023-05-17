import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import "../../styles/Header/Header.css";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import BurgerMenu from "./BurgerMenu";

function Header(): JSX.Element {
  const [isSmallWidth, setIsSmallWidth] = useState(false);

  const Resize = () => {
    if (window.innerWidth <= 650) {
      setIsSmallWidth(true);
    } else setIsSmallWidth(false);
  };

  const resizeDebounced = useDebouncedCallback(() => {
    return Resize();
  }, 200);

  useEffect(() => {
    window.addEventListener("resize", resizeDebounced);
    return () => {
      window.removeEventListener("resize", resizeDebounced);
    };
  }, [resizeDebounced]);

  useEffect(() => {
    Resize();
  }, []);

  return (
    <header className="header">
      <nav className="header__content">
        <div className="header__logo">
          <NavLink className="header__logo_title" to="/">
            Jobored
          </NavLink>
        </div>
        {isSmallWidth ? (
          <BurgerMenu />
        ) : (
          <div className="header__links">
            <NavLinks />
          </div>
        )}
      </nav>
    </header>
  );
}
const MemoHeader = React.memo(Header);
export default MemoHeader;
