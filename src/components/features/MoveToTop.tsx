import React from "react";
import {SwipeUpRounded} from "@mui/icons-material";

export const MoveToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollToTop}>
      <SwipeUpRounded />
    </button>
  );
};
