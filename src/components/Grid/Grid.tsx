import clsx from "clsx";
import React from "react";

interface Props {
  selectChapter: (newChapter: number) => void;
  currentChapter: number;
}

const Nav = ({ selectChapter, currentChapter }: Props) => {
  const chapterNumbers = 81;

  function gridButtons() {
    let buttons = [];
    for (let i = 1; i <= chapterNumbers; i++) {
      buttons.push(
        <button
          key={i}
          className={clsx(
            "grid-btn",
            currentChapter === i && "grid-btn--current"
          )}
          onClick={() => selectChapter(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  }

  return <div className="grid">{gridButtons()}</div>;
};

export default Nav;
