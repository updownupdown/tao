import React from "react";
import { getOriginal } from "../Original/Original";
import ReactTooltip from "react-tooltip";
import { ChapterProps } from "../Translations/Translations";
import { getChapter, getTranslationName } from "../Translations/Translations";
import "./Chapter.scss";

interface Props extends ChapterProps {
  showChapters: () => void;
  showTranslations: () => void;
}

const Chapter = ({
  chapter,
  translation,
  showChapters,
  showTranslations,
}: Props) => {
  return (
    <div className="chapter">
      <div className="chapter__original">
        <ReactTooltip className="tooltip-tao" effect="solid" />
        <div className="original">{getOriginal(chapter)}</div>
      </div>
      <div className="chapter__translation">
        <h4 onClick={() => showTranslations()}>
          {getTranslationName(translation)}
        </h4>
        <h2 onClick={() => showChapters()}>{chapter}</h2>
        {getChapter({ chapter, translation })}
      </div>
    </div>
  );
};

export default Chapter;
