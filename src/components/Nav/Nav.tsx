import React from "react";
import ArrowDown from "./ArrowDown";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import ArrowUp from "./ArrowUp";

interface Props {
  chapterPrev: () => void;
  chapterNext: () => void;
  translationPrev: () => void;
  translationNext: () => void;
}

const Nav = ({
  chapterPrev,
  chapterNext,
  translationPrev,
  translationNext,
}: Props) => {
  return (
    <div className="nav">
      <div className="nav__group">
        <div className="nav__group__buttons">
          <button className="btn" onClick={chapterPrev}>
            <ArrowLeft />
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
            <ArrowUp />
          </button>
          <button className="btn" onClick={translationNext}>
            <ArrowDown />
          </button>
        </div>
        <span className="nav__group__label">Translations</span>
      </div>
    </div>
  );
};

export default Nav;
