import React from "react";
import ArrowDown from "./icons/ArrowDown";
import ArrowLeft from "./icons/ArrowLeft";
import ArrowRight from "./icons/ArrowRight";
import ArrowUp from "./icons/ArrowUp";
import Apps from "./icons/Apps";
import Menu from "./icons/Menu";
import "./Nav.scss";

interface Props {
  chapterPrev: () => void;
  chapterNext: () => void;
  translationPrev: () => void;
  translationNext: () => void;
  showChapters: () => void;
  showTranslations: () => void;
}

const Nav = ({
  chapterPrev,
  chapterNext,
  translationPrev,
  translationNext,
  showChapters,
  showTranslations,
}: Props) => {
  return (
    <div className="nav">
      <div className="nav__group">
        <span className="nav__group__label">Chapters</span>
        <div className="nav__group__buttons">
          <button className="nav-btn" onClick={chapterPrev}>
            <ArrowLeft />
          </button>
          <button className="nav-btn" onClick={showChapters}>
            <Apps />
          </button>
          <button className="nav-btn" onClick={chapterNext}>
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="nav__group">
        <span className="nav__group__label">Translations</span>
        <div className="nav__group__buttons">
          <button className="nav-btn" onClick={translationPrev}>
            <ArrowDown />
          </button>
          <button className="nav-btn" onClick={showTranslations}>
            <Menu />
          </button>
          <button className="nav-btn" onClick={translationNext}>
            <ArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
