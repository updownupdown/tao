import React from "react";
import Day from "./icons/Day";
import Night from "./icons/Night";
import Sans from "./icons/Sans";
import Serif from "./icons/Serif";
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
          <Day />
        </span>
        <span className="icon icon--right">
          <Night />
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
          <Sans />
        </span>
        <span className="icon icon--right">
          <Serif />
        </span>
      </div>
    </div>
  );
};

export default ThemeMenu;
