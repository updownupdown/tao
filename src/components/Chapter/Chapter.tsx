import React from "react";
import { TranslationProps } from "../Translations/Translations";

interface Props {
  chapter: number;
  // translation: TranslationProps;
  translation: any;
}

const Chapter = ({ chapter, translation }: Props) => {
  function getChapter() {
    const chapterText = translation.component.filter(
      (item: any) => item.chapter === chapter
    )[0];

    return chapterText !== undefined ? (
      chapterText.content
    ) : (
      <span className="chapter-error">[Chapter not available]</span>
    );
  }

  return (
    <div className="chapter">
      <h4>{translation.name}</h4>
      <h2>{chapter}</h2>
      <p>{getChapter()}</p>
    </div>
  );
};

export default Chapter;
