import { text as Mitchell } from "./list/Mitchell";
import { text as Bynner } from "./list/Bynner";
import { text as Lombardo } from "./list/Lombardo";
import { text as Lau } from "./list/Lau";
import { text as Blakney } from "./list/Blakney";

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
    name: "Stephen Addiss & Stanley Lombardo",
    date: 1993,
    component: Lombardo,
  },
  {
    name: "D.C. Lau",
    date: 1963,
    component: Lau,
  },
  {
    name: "Raymond B. Blakney",
    date: 1955,
    component: Blakney,
  },
  {
    name: "Witter Bynner",
    component: Bynner,
  },
];
