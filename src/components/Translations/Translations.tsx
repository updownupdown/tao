import { text as Mitchell } from "./list/Mitchell";
import { text as Bynner } from "./list/Bynner";
import { text as Lombardo } from "./list/Lombardo";
import { text as Lau } from "./list/Lau";
import { text as Blakney } from "./list/Blakney";
import { text as Suzuki } from "./list/Suzuki";
import { text as Legge } from "./list/Legge";
import { text as Goddard } from "./list/Goddard";
import { text as Chalmers } from "./list/Chalmers";
import { text as Balfour } from "./list/Balfour";
import { text as Alexander } from "./list/Alexander";
import { text as Giles } from "./list/Giles";
import { text as Heysinger } from "./list/Heysinger";
import { text as Gornold } from "./list/Gornold";
import { text as Takao } from "./list/Takao";
import { text as Medhurst } from "./list/Medhurst";
import { text as Carus } from "./list/Carus";
import { text as Mears } from "./list/Mears";
import { text as Crowley } from "./list/Crowley";
import { text as Mackintosh } from "./list/Mackintosh";
import { text as Mcdonald } from "./list/Mcdonald";
import { text as Fex } from "./list/Fex";
import { text as Eno } from "./list/Eno";
import { text as Linnell } from "./list/Linnell";
import { text as Luthinya } from "./list/Luthinya";
import { text as Tan } from "./list/Tan";
import { text as Khiron } from "./list/Khiron";
import { text as Chilcott } from "./list/Chilcott";
import { text as Clatfelter } from "./list/Clatfelter";
import { text as Cronk } from "./list/Cronk";
import { text as Sarbatoare } from "./list/Sarbatoare";
import { text as Kunesh } from "./list/Kunesh";
import { text as Muller } from "./list/Muller";
import { text as English } from "./list/English";
import { text as Alquiros } from "./list/Alquiros";
import { text as Hatcher } from "./list/Hatcher";

export interface TranslationProps {
  name: string;
  date?: number;
  component: React.ReactNode;
}

export const Translations: TranslationProps[] = [
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
  {
    name: "John Chalmers",
    component: Chalmers,
  },
  {
    name: "Frederic Balfour",
    component: Balfour,
  },
  {
    name: "GG. Alexander",
    component: Alexander,
  },
  {
    name: "Lionel Giles",
    component: Giles,
  },
  {
    name: "Heysinger, I. W.",
    component: Heysinger,
  },
  {
    name: "Walter Gornold",
    component: Gornold,
  },
  {
    name: "Ch'u Ta-kao",
    component: Takao,
  },
  {
    name: "C. Medhurst",
    component: Medhurst,
  },
  {
    name: "Paul Carus",
    component: Carus,
  },
  {
    name: "Isabella Mears",
    component: Mears,
  },
  {
    name: "Aleister Crowley",
    component: Crowley,
  },
  {
    name: "Charles Herbert Mackintosh",
    component: Mackintosh,
  },
  {
    name: "‪John H. McDonald",
    component: Mcdonald,
  },
  {
    name: "Aalar Fex",
    component: Fex,
  },
  {
    name: "Robert Eno",
    component: Eno,
  },
  {
    name: "Bruce R. Linnell",
    component: Linnell,
  },
  {
    name: "Luthinya et. al",
    component: Luthinya,
  },
  {
    name: "Eng Tion Tan",
    component: Tan,
  },
  {
    name: "Khiron",
    component: Khiron,
  },
  {
    name: "Tim Chilcott",
    component: Chilcott,
  },
  {
    name: "Jim Clatfelter",
    component: Clatfelter,
  },
  {
    name: "George Cronk",
    component: Cronk,
  },
  {
    name: "Octavian Sarbatoare",
    component: Sarbatoare,
  },
  {
    name: "Tom Kunesh",
    component: Kunesh,
  },
  {
    name: "Charles A. Muller",
    component: Muller,
  },
  {
    name: "Jane English",
    component: English,
  },
  {
    name: "Hilmar Alquiros",
    component: Alquiros,
  },
  {
    name: "Bradford Hatcher",
    component: Hatcher,
  },
];
