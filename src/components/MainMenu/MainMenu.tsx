import clsx from "clsx";
import React from "react";
import Close from "../Icons/Close";
import "./MainMenu.scss";

interface Props {
  showMainMenu: () => void;
}

const MainMenu = ({ showMainMenu }: Props) => {
  return (
    <div className="main-menu">
      <button className="close-btn" onClick={showMainMenu}>
        <Close />
      </button>

      <div className="main-menu__content">
        <div className="main-menu__content__center">
          <h3>Navigation</h3>
          <p>
            <b>Change chapter:</b> Click the bookmark icon [C] to select a
            chapter, and use the left/right arrow icons [A/D] to jump between
            translations.
          </p>
          <p>
            <b>Change translation:</b> Click the translate icon [T] to select a
            translation, and use the up/down arrow icons [W/S] to jump between
            translations.
          </p>
          <hr />
          <h3>Tao Te Ching</h3>
          <p>
            The Tao Te Ching is a Chinese classic text traditionally credited to
            the 6th-century BC sage Laozi. The text's authorship, date of
            composition and date of compilation are debated. The oldest
            excavated portion dates back to the late 4th century BC, but modern
            scholarship dates other parts of the text as having been written—or
            at least compiled—later than the earliest portions of the Zhuangzi.
          </p>
          <p>
            The Tao Te Ching, along with the Zhuangzi, is a fundamental text for
            both philosophical and religious Taoism. It also strongly influenced
            other schools of Chinese philosophy and religion, including
            Legalism, Confucianism, and Chinese Buddhism, which was largely
            interpreted through the use of Taoist words and concepts when it was
            originally introduced to China. Many artists, including poets,
            painters, calligraphers, and gardeners, have used the Tao Te Ching
            as a source of inspiration. Its influence has spread widely outside
            East Asia and it is among the most translated works in world
            literature.
          </p>
          <p>
            The Tao Te Ching has been translated into Western languages over 250
            times, mostly to English, German, and French.
          </p>
          <p>
            The Tao Te Ching is written in Classical Chinese, which poses a
            number of challenges to complete comprehension. As Holmes Welch
            notes, the written language "has no active or passive, no singular
            or plural, no case, no person, no tense, no mood." Moreover, the
            received text lacks many grammatical particles which are preserved
            in the older Mawangdui and Beida texts, which permit the text to be
            more precise. Lastly, many passages of the Tao Te Ching are
            deliberately vague and ambiguous.
          </p>
          <p>
            Since there are no punctuation marks in Classical Chinese, it can be
            difficult to conclusively determine where one sentence ends and the
            next begins. Moving a full-stop a few words forward or back or
            inserting a comma can profoundly alter the meaning of many passages,
            and such divisions and meanings must be determined by the
            translator. Some editors and translators argue that the received
            text is so corrupted (from originally being written on one-line
            bamboo strips linked with silk threads) that it is impossible to
            understand some chapters without moving sequences of characters from
            one place to another.
          </p>
          <p>
            More info on{" "}
            <a
              href="https://en.wikipedia.org/wiki/Tao_Te_Ching"
              target="_blank"
            >
              Wikipedia
            </a>
          </p>
          <hr />
          <h3>About</h3>
          <p>
            This is a project by James Carmichael.
            <br />
            <a href="https://github.com/updownupdown/tao" target="_blank">
              See on GitHub.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
