import React from "react";
import clsx from "clsx";
import { Translations } from "../../Translations/TranslationsList";
import "./TranslationMenu.scss";

interface Props {
  selectTranslation: (newChapter: number) => void;
  currentTranslation: number;
}

const ChapterMenu = ({ selectTranslation, currentTranslation }: Props) => {
  function namesButtons() {
    if (Translations instanceof Array) {
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
  }

  return (
    <div className="names">
      <div className="names__content">
        <div className="names__content__center">{namesButtons()}</div>
      </div>
    </div>
  );
};

export default ChapterMenu;
