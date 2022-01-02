import React from "react";
import { Original } from "../Translations/Original";
import ReactTooltip from "react-tooltip";
import "./Chapter.scss";
import { dictionary } from "../Translations/dictionary";
import clsx from "clsx";
// import { TranslationProps } from "../Translations/Translations";

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
      "、",
      ")",
      "(",
    ];

    return (
      <>
        <h4>{originalText.title}</h4>
        <p>
          {splitText.map((txt, index) => {
            const definition = charactersWithoutDefinitions.includes(txt)
              ? ""
              : lookupCharacter(txt);

            return (
              <React.Fragment key={index}>
                <span
                  className={clsx(
                    "fragment",
                    txt === "。" && "fragment--period",
                    definition !== "" && "fragment--has-tooltip"
                  )}
                  data-tip={definition}
                >
                  {txt}
                </span>
                {txt === "。" && <br />}
              </React.Fragment>
            );
          })}
        </p>
      </>
    );
  }

  function lookupCharacter(character: string) {
    const definitions: string[] = [];
    const traditional = dictionary.find((obj) => obj.t == character);
    const simplified = dictionary.find((obj) => obj.s == character);

    if (traditional === undefined && simplified === undefined) {
      console.warn(character + " has no definition!");
      return "No definition found.";
    }

    let traditionalString = "";
    let simplifiedString = "";

    if (traditional !== undefined) {
      traditionalString = traditional.d.join(", ");
      definitions.push(traditionalString);
    }

    if (simplified !== undefined) {
      simplifiedString = simplified.d.join(", ");

      if (simplifiedString !== traditionalString)
        definitions.push(simplifiedString);
    }

    return definitions.join("\n\n");
  }

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