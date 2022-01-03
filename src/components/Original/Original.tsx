import React from "react";
import { dictionary } from "../Translations/Dictionary";
import { text as Original } from "./OriginalText";
import clsx from "clsx";

export const getOriginal = (chapter: number) => {
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
          const isSpecialCharacter = charactersWithoutDefinitions.includes(txt);
          const definition = isSpecialCharacter ? "" : lookupCharacter(txt);
          const hidePunctuation = true;

          return (
            <React.Fragment key={index}>
              {(!isSpecialCharacter || !hidePunctuation || txt === "\n") && (
                <span
                  className={clsx(
                    "fragment",
                    definition !== "" && "fragment--has-tooltip"
                    // txt === "。" && "fragment--period",
                    // isSpecialCharacter && "fragment--special-char"
                  )}
                  data-tip={definition}
                >
                  {txt}
                </span>
              )}
              {txt === "。" && <br />}
            </React.Fragment>
          );
        })}
      </p>
    </>
  );
};

function lookupCharacter(character: string) {
  const definitions: string[] = [];
  const traditional = dictionary.find((obj) => obj.t === character);
  const simplified = dictionary.find((obj) => obj.s === character);

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
