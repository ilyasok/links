// Header.tsx
import {HomeRounded} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ThemeToggleButton} from "./modal/themeChanger";
export const Header: React.FC<{title: string}> = ({title}) => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    setIsVisible(window.scrollY > 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <header
      className={`header ${isVisible ? "" : "header-transparent"}`}
      style={{
        backgroundColor: isVisible ? "var(--header_background)" : "transparent",
        backdropFilter: isVisible ? "blur(30px)" : "none",
        boxShadow: isVisible ? "0 0 15px 0 var(--header_shadow)" : "none",
      }}
    >
      <div className={`header-left ${isVisible ? "visible" : "hidden"}`}>
        {location.pathname !== "/" && (
          <div className="icon">
            <Link to="/">
              <HomeRounded />
            </Link>
          </div>
        )}
        <div className="logo">{title}</div>
      </div>
      <div
        className="header-center"
        style={{display: window.innerWidth > 500 ? "" : "none"}}
      ></div>
      <div className="header-right">
        <ThemeToggleButton />
      </div>
    </header>
  );
};
