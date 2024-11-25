import {HomeRounded} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ThemeToggleButton} from "./modal/ThemeChanger";
import {SearchButton} from "./features/SearchInPage";
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
        backdropFilter: isVisible ? "blur(15px)" : "none",
        boxShadow: isVisible ? "0 0 15px 0 var(--header_shadow)" : "none",
        border: isVisible ? "1px solid var(--header_border)" : "1px solid transparent",
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
        <div className="logo">
          {title}
          <sub>beta</sub>
        </div>
      </div>
      <div className="header-right">
        {(location.pathname.includes("aefaq") ||
          location.pathname.includes("prfaq") ||
          location.pathname.includes("psfaq") ||
          location.pathname.includes("aeexprfaq")) && <SearchButton />}
        <ThemeToggleButton />
      </div>
    </header>
  );
};
