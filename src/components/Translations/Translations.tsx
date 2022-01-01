import { Mitchell } from "./list/Mitchell";
import { Riley } from "./list/Riley";
import { Johnson } from "./list/Johnson";
import { JohnsonTwo } from "./list/JohnsonTwo";

export interface TranslationProps {
  name: string;
  date?: number;
  component: React.ReactNode;
}

interface Props {
  translations: TranslationProps[];
}

export const Translations = [
  {
    name: "Stephen Mitchell",
    date: 1988,
    component: Mitchell,
  },
  {
    name: "Paul C. Riley",
    component: Riley,
  },
  {
    name: "John Johnson",
    component: Johnson,
  },
  {
    name: "John Johnson 2",
    component: JohnsonTwo,
  },
];
