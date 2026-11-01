import { LANGUAGE_LIST, LANGUAGE_MAP, type TLanguageMapDetails } from "@/utils";

export const LANGUAGE_LIST_DATA: TLanguageMapDetails[] = LANGUAGE_LIST.map(
  (l) => {
    const className = LANGUAGE_MAP[l].className;
    const language = LANGUAGE_MAP[l].language;

    return {
      className,
      language,
    };
  },
);
