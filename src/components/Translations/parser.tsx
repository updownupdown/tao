import React, { useEffect } from "react";
import { sourceText } from "./parseSource";

export const Parser = () => {
  function runParser() {
    // split by numbers
    const splitText = sourceText.split(/([0-9]\n)/);

    // remove empty items and push to new array
    const cleanedSplitText = [];

    for (let i = 0; i < splitText.length; i++) {
      const text = splitText[i].replace(/([0-9])/, "");

      if (text === "") continue;
      if (text === " ") continue;
      if (text === "\n") continue;
      if (text.match(/([0-9])/)) continue;

      cleanedSplitText.push(text);
    }

    let mergedText = "";

    for (let i = 0; i < cleanedSplitText.length; i++) {
      const text = cleanedSplitText[i].trim();

      // console.log(text);

      mergedText += `{ chapter: ${i + 1}, content: \`${text}\`},`;
    }

    // add header/footer
    const fileHeader = "export const text = [";
    const fileFooter = "];";
    mergedText = fileHeader + mergedText + fileFooter;

    console.log(mergedText);
  }

  function handleKeyPress(event: any) {
    if (event.key === "r") runParser();
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return <span />;
};
