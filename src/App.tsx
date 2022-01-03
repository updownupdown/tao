import React, { useState, useEffect } from "react";
import Chapter from "./components/Chapter/Chapter";
import Nav from "./components/Nav/Nav";
import ChapterMenu from "./components/ChapterMenu/ChapterMenu";
import TranslationMenu from "./components/Nav/TranslationMenu/TranslationMenu";
import ThemeMenu from "./components/Nav/ThemeMenu/ThemeMenu";
import MainMenu from "./components/Nav/MainMenu/MainMenu";
import { Translations } from "./components/Translations/TranslationsList";

function App() {
  const [chapter, setChapter] = useState(1);
  const [translation, setTranslation] = useState(0);
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [showChapterMenu, setShowChapterMenu] = useState(false);
  const [showTranslationMenu, setShowTranslationMenu] = useState(false);
  const [themeColor, setThemeColor] = useState("light");
  const [themeFont, setThemeFont] = useState("sans");

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

  const menuOpen = showChapterMenu || showTranslationMenu || showMainMenu;

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showChapterMenu, showTranslationMenu, showMainMenu]);

  function showChapters() {
    setShowChapterMenu(!showChapterMenu);
  }

  function showTranslations() {
    setShowTranslationMenu(!showTranslationMenu);
  }

  function showMain() {
    setShowMainMenu(!showMainMenu);
  }

  function selectThemeColor(newTheme: string) {
    setThemeColor(newTheme);
  }
  function selectThemeFont(newTheme: string) {
    setThemeFont(newTheme);
  }

  function selectChapter(newChapter: number) {
    setChapter(newChapter);
    setShowChapterMenu(false);
  }

  function selectTranslation(newTranslation: number) {
    setTranslation(newTranslation);
    setShowTranslationMenu(false);
  }

  useEffect(() => {
    function handleKeyPress(event: any) {
      if (event.key === "a") chapterPrev();
      if (event.key === "d") chapterNext();
      if (event.key === "s") translationPrev();
      if (event.key === "w") translationNext();
      if (event.key === "c") showChapters();
      if (event.key === "t") showTranslations();
    }

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div className={`main theme--${themeColor} theme--${themeFont}`}>
      {menuOpen && (
        <div
          className="overlay"
          onClick={() => {
            setShowChapterMenu(false);
            setShowTranslationMenu(false);
          }}
        />
      )}
      {showMainMenu && <MainMenu showMainMenu={showMain} />}
      {showChapterMenu && (
        <ChapterMenu selectChapter={selectChapter} currentChapter={chapter} />
      )}
      {showTranslationMenu && (
        <TranslationMenu
          selectTranslation={selectTranslation}
          currentTranslation={translation}
        />
      )}
      <ThemeMenu
        selectThemeColor={selectThemeColor}
        selectThemeFont={selectThemeFont}
        currentThemeColor={themeColor}
        currentThemeFont={themeFont}
      />
      <Chapter
        chapter={chapter}
        translation={translation}
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
        showMain={showMain}
      />
    </div>
  );
}

export default App;
