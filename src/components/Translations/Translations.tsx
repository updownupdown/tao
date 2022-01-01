import { text as Mitchell } from "./list/Mitchell";
import { text as Bynner } from "./list/Bynner";
import { text as Lombardo } from "./list/Lombardo";
import { text as Lau } from "./list/Lau";
import { text as Blakney } from "./list/Blakney";
import { text as Suzuki } from "./list/Suzuki";
import { text as Legge } from "./list/Legge";
import { text as Goddard } from "./list/Goddard";

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
  {
    name: "D.T. Suzuki & Paul Carus",
    date: 1913,
    component: Suzuki,
  },
  {
    name: "James Legge",
    date: 1891,
    component: Legge,
  },
  {
    name: "Dwight Goddard",
    date: 1919,
    component: Goddard,
  },
];
