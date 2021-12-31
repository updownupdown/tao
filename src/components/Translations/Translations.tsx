import { Riley } from "./list/Riley";
import { Johnson } from "./list/Johnson";

const Merged = { ...Riley, ...Johnson };

type ValueOf<T> = T[keyof T];

export const Translations = {
  Riley: "riley",
  // Johnson: "Johnson",
};

export const Mapping = {
  riley: Riley,
  // johnson: Johnson,
};

export type TranslationsList = ValueOf<typeof Translations>;
