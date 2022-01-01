import React, { useState, useCallback, useEffect } from "react";
import Chapter from "./components/Chapter/Chapter";
import Nav from "./components/Nav/Nav";
import Grid from "./components/Grid/Grid";
import Names from "./components/Translations/Names";
import { Translations } from "./components/Translations/Translations";

// import { Parser } from "./components/Translations/parser";

function App() {
  const [chapter, setChapter] = useState(1);
  const [translation, setTranslation] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const [showNames, setShowNames] = useState(false);

  const totalChapters = 81;
  const totalTranslations = Translations.length;

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
    if (translation === 0) {
      setTranslation(totalTranslations - 1);
    } else {
      setTranslation(translation - 1);
    }
  }
  function translationNext() {
    if (translation === totalTranslations - 1) {
      setTranslation(0);
    } else {
      setTranslation(translation + 1);
    }
  }

  function showChapters() {
    setShowGrid(!showGrid);
  }

  function showTranslations() {
    setShowNames(!showGrid);
  }

  function selectChapter(newChapter: number) {
    setChapter(newChapter);
    setShowGrid(false);
  }

  function selectTranslation(newTranslation: number) {
    setTranslation(newTranslation);
    setShowNames(false);
  }

  function handleSpacebar() {
    if (showNames) {
      setShowNames(false);
    } else if (showGrid) {
      setShowGrid(false);
      setShowNames(true);
    } else {
      setShowGrid(true);
    }
  }

  function handleKeyPress(event: any) {
    if (event.key === "ArrowLeft") chapterPrev();
    if (event.key === "ArrowRight") chapterNext();
    if (event.key === "ArrowDown") translationPrev();
    if (event.key === "ArrowUp") translationNext();
    if (event.key === " ") handleSpacebar();
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="main">
      {(showGrid || showNames) && (
        <div
          className="overlay"
          onClick={() => {
            setShowGrid(false);
            setShowNames(false);
          }}
        />
      )}
      {showGrid && (
        <Grid selectChapter={selectChapter} currentChapter={chapter} />
      )}
      {showNames && (
        <Names
          selectTranslation={selectTranslation}
          currentTranslation={translation}
        />
      )}
      <Chapter
        chapter={chapter}
        translation={Translations[translation]}
        showChapters={showChapters}
        showTranslations={showTranslations}
      />
      <Nav
        chapterPrev={chapterPrev}
        chapterNext={chapterNext}
        translationPrev={translationPrev}
        translationNext={translationNext}
        showChapters={showChapters}
        showTranslations={showTranslations}
      />
      {/* <Parser /> */}
    </div>
  );
}

export default App;
