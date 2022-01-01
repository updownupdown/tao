import React from "react";
import ArrowDown from "./ArrowDown";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import ArrowUp from "./ArrowUp";
import Apps from "./Apps";
import Menu from "./Menu";

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
        <div className="nav__group__buttons">
          <button className="btn" onClick={chapterPrev}>
            <ArrowLeft />
          </button>
          <button className="btn" onClick={showChapters}>
            <Apps />
          </button>
          <button className="btn" onClick={chapterNext}>
            <ArrowRight />
          </button>
        </div>
        <span className="nav__group__label">Chapters</span>
      </div>

      <div className="nav__group">
        <div className="nav__group__buttons">
          <button className="btn" onClick={translationPrev}>
            <ArrowDown />
          </button>
          <button className="btn" onClick={showTranslations}>
            <Menu />
          </button>
          <button className="btn" onClick={translationNext}>
            <ArrowUp />
          </button>
        </div>
        <span className="nav__group__label">Translations</span>
      </div>
    </div>
  );
};

export default Nav;
