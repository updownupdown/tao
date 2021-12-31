import React, { useState } from "react";
import Chapter from "./components/Chapter/Chapter";
import Nav from "./components/Nav/Nav";
import {
  Translations,
  TranslationsList,
} from "./components/Translations/Translations";

function App() {
  const totalChapters = 81;
  const [chapter, setChapter] = useState(1);
  const [translation, setTranslation] = useState(Translations.Riley);

  // console.log(translation);
  // console.log(Mapping["Riley"]);

  function chapterPrev() {
    if (chapter === 1) {
      setChapter(totalChapters);
    } else {
      setChapter(chapter - 1);
    }
  }
  function chapterNext() {
    if (chapter === totalChapters) {
      setChapter(1);
    } else {
      setChapter(chapter + 1);
    }
  }

  function translationPrev() {
    setChapter(chapter - 1);
  }
  function translationNext() {
    setChapter(chapter + 1);
  }

  return (
    <div className="main">
      <Chapter chapter={chapter} translation={translation} />
      <Nav
        chapterPrev={chapterPrev}
        chapterNext={chapterNext}
        translationPrev={translationPrev}
        translationNext={translationNext}
      />
    </div>
  );
}

export default App;
