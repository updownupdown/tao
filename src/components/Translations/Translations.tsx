import React from "react";
import { Translations } from "../Translations/TranslationsList";

export interface ChapterProps {
  chapter: number;
  translation: number;
}

export const getChapter = ({ chapter, translation }: ChapterProps) => {
  if (Translations[translation].component instanceof Array) {
    // @ts-ignore
    const chapterText = Translations[translation].component.filter(
      (item: any) => item.chapter === chapter
    )[0];

    return <p>{chapterText.content}</p>;
  }

  return <p className="empty-text">[Chapter not available]</p>;
};

export const getTranslationName = (translation: number) => {
  return Translations[translation].name;
};
