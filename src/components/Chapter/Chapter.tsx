import React from "react";
import {
  Translations,
  TranslationsList,
  Mapping,
} from "../Translations/Translations";
import { Riley } from "../Translations/list/Riley";

interface Props {
  chapter: number;
  translation: TranslationsList;
}

const Chapter = ({ chapter, translation }: Props) => {
  function getChapter(chapter: number) {
    const obj = Riley.chapters.filter((item) => item.chapter === chapter);
    return obj[0].content.split("\n").map((str, index) => (
      <React.Fragment key={index}>
        {str}
        <br />
      </React.Fragment>
    ));
  }

  console.log("====================");
  console.log(translation);
  // console.log(Translations);
  // console.log(Mapping);
  // console.log(Mapping["riley"]);
  // console.log(Mapping.translation);
  // console.log(Mapping["riley"]);
  // console.log(Mapping[translation]);

  function getName() {
    return Riley.name;
  }

  return (
    <div className="chapter">
      <h4>{getName()}</h4>
      <h2>{chapter}</h2>
      <p>{getChapter(chapter)}</p>
    </div>
  );
};

export default Chapter;
