import React from "react";
import { Original } from "../Translations/Original";
import ReactTooltip from "react-tooltip";
import "./Chapter.scss";
// import { TranslationProps } from "../Translations/Translations";

// export const hanzi = require("hanzi");
// hanzi.start();

interface Props {
  chapter: number;
  // translation: TranslationProps;
  translation: any;
  showChapters: () => void;
  showTranslations: () => void;
}

const Chapter = ({
  chapter,
  translation,
  showChapters,
  showTranslations,
}: Props) => {
  function getChapter() {
    const chapterText = translation.component.filter(
      (item: any) => item.chapter === chapter
    )[0];

    return chapterText !== undefined ? (
      <p>{chapterText.content}</p>
    ) : (
      <p className="empty-text">[Chapter not available]</p>
    );
  }

  function getOriginal() {
    const originalText = Original.filter(
      (item: any) => item.chapter === chapter
    )[0];

    if (originalText === undefined)
      return <p className="empty-text">[Original text not available]</p>;

    const splitText = originalText.content.split("");

    const charactersWithoutDefinitions = [
      "",
      " ",
      "\n",
      "，",
      "；",
      "。",
      "！",
      "？",
      "：",
    ];

    return (
      <>
        <h4>{originalText.title}</h4>
        <p>
          {splitText.map((txt, index) => {
            // if (charactersWithoutDefinitions.includes(txt)) return txt;

            // const definition = lookupCharacter(txt);

            return (
              // <span key={index} data-tip={definition}>
              <>
                <span key={index}>{txt}</span>
                {txt === "。" && <br />}
              </>
            );
          })}
        </p>
      </>
    );
  }

  // function lookupCharacter(character: string) {
  //   const definition = hanzi.definitionLookup(character);

  //   if (definition === undefined) {
  //     console.warn(character + " has no definition!");
  //     return "No definition found.";
  //   }

  //   const mergedDefinitions = definition.map((def: any) => def.definition);

  //   return mergedDefinitions.join("\n\n");
  // }

  return (
    <div className="chapter">
      <div className="chapter__translation">
        <h4 onClick={() => showTranslations()}>{translation.name}</h4>
        <h2 onClick={() => showChapters()}>{chapter}</h2>
        {getChapter()}
      </div>
      <div className="chapter__original">
        <ReactTooltip className="tooltip-tao" effect="solid" />
        <div className="original">{getOriginal()}</div>
      </div>
    </div>
  );
};

export default Chapter;
