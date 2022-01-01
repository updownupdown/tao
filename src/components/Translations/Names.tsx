import React from "react";
import clsx from "clsx";
import { Translations } from "./Translations";

interface Props {
  selectTranslation: (newChapter: number) => void;
  currentTranslation: number;
}

const Nav = ({ selectTranslation, currentTranslation }: Props) => {
  function namesButtons() {
    return Translations.map((translation, index) => (
      <button
        key={index}
        className={clsx(
          "names-btn",
          currentTranslation === index && "names-btn--current"
        )}
        onClick={() => selectTranslation(index)}
      >
        {translation.name}
      </button>
    ));
  }

  return <div className="names">{namesButtons()}</div>;
};

export default Nav;
