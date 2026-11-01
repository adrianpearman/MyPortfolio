import { LANGUAGE_LIST } from "./consts";

type TLanguageList = (typeof LANGUAGE_LIST)[number];

export type TLanguageMapDetails = {
  className: React.HTMLProps<HTMLElement>["className"];
  language: string;
};

export type TLanguageMapItem = Record<TLanguageList, TLanguageMapDetails>;
