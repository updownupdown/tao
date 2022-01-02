import React from "react";
import Day from "../Icons/Day";
import Night from "../Icons/Night";
import Sans from "../Icons/Sans";
import Serif from "../Icons/Serif";
import "./ThemeMenu.scss";

interface Props {
  selectThemeColor: (newTheme: string) => void;
  selectThemeFont: (newTheme: string) => void;
  currentThemeColor: string;
  currentThemeFont: string;
}

const ThemeMenu = ({
  selectThemeColor,
  selectThemeFont,
  currentThemeColor,
  currentThemeFont,
}: Props) => {
  return (
    <div className={`theme-nav theme-nav--${currentThemeColor}`}>
      <div
        className="theme-toggle theme-toggle--color"
        onClick={() => {
          const newTheme = currentThemeColor === "light" ? "dark" : "light";
          selectThemeColor(newTheme);
        }}
      >
        <span className="toggle" />
        <span className="icon icon--left">
          <Night />
        </span>
        <span className="icon icon--right">
          <Day />
        </span>
      </div>

      <div
        className="theme-toggle theme-toggle--font"
        onClick={() => {
          const newTheme = currentThemeFont === "sans" ? "serif" : "sans";
          selectThemeFont(newTheme);
        }}
      >
        <span className="toggle" />
        <span className="icon icon--left">
          <Serif />
        </span>
        <span className="icon icon--right">
          <Sans />
        </span>
      </div>
    </div>
  );
};

export default ThemeMenu;
