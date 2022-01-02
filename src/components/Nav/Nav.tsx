import React from "react";
import ArrowDown from "../Icons/ArrowDown";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";
import ArrowUp from "../Icons/ArrowUp";
import Chapters from "../Icons/Chapters";
import Translation from "../Icons/Translation";
import Menu from "../Icons/Menu";
import "./Nav.scss";

interface Props {
  chapterPrev: () => void;
  chapterNext: () => void;
  translationPrev: () => void;
  translationNext: () => void;
  showChapters: () => void;
  showTranslations: () => void;
  showMain: () => void;
}

const Nav = ({
  chapterPrev,
  chapterNext,
  translationPrev,
  translationNext,
  showChapters,
  showTranslations,
  showMain,
}: Props) => {
  return (
    <div className="nav">
      <div className="nav__group">
        <button className="nav-btn" onClick={showMain}>
          <Menu />
        </button>
      </div>

      <div className="nav__group">
        <button className="nav-btn" onClick={chapterPrev}>
          <ArrowLeft />
        </button>
        <button className="nav-btn" onClick={showChapters}>
          <Chapters />
        </button>
        <button className="nav-btn" onClick={chapterNext}>
          <ArrowRight />
        </button>
      </div>

      <div className="nav__group">
        <button className="nav-btn" onClick={translationPrev}>
          <ArrowDown />
        </button>
        <button className="nav-btn" onClick={showTranslations}>
          <Translation />
        </button>
        <button className="nav-btn" onClick={translationNext}>
          <ArrowUp />
        </button>
      </div>
    </div>
  );
};

export default Nav;
