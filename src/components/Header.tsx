import {HomeRounded} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ThemeToggleButton} from "./modal/ThemeChanger";
import {SearchButton} from "./features/SearchInPage";
import {Tooltip} from "antd";
import {motion} from "framer-motion";

const Header: React.FC<{title: string}> = ({title}) => {
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
    <motion.header
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1]}}
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
            <Tooltip title="На главную">
              <Link to="/">
                <HomeRounded />
              </Link>
            </Tooltip>
          </div>
        )}
        <div className="logo">
          {title}
          <sub>@aechat</sub>
        </div>
      </div>
      <div className="header-right">
        {(location.pathname.includes("aefaq") ||
          location.pathname.includes("prfaq") ||
          location.pathname.includes("psfaq") ||
          location.pathname.includes("aeexprfaq")) && <SearchButton />}
        <ThemeToggleButton />
      </div>
    </motion.header>
  );
};
export default Header;
