import React from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import "./scrolltop.css";
import { useEffect, useState } from "react";

const scrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 420) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log("Scrolling to top sir!");
  };

  return (
    <>
      {isVisible && (
        <button
          className="scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top">
          <KeyboardDoubleArrowUpIcon />
        </button>
      )}
    </>
  );
};

export default scrollTop;
