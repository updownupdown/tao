import React from "react";
import ArrowDown from "./ArrowDown";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import ArrowUp from "./ArrowUp";
import Apps from "./Apps";
import Menu from "./Menu";
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
