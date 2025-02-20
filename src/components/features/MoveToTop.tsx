import React from "react";
import {SwipeUpRounded} from "@mui/icons-material";

export const MoveToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.history.replaceState({}, '', window.location.pathname);
  };

  return (
    <button onClick={scrollToTop}>
      <SwipeUpRounded />
    </button>
  );
};

