import { useCallback } from "react";
import gsap from "gsap";
import { indexLabel, setIndexDisplay, splitChars } from "../utils/functions";
import type { SlideState } from "../utils/types";
// Live-region text, split title/label chars, index and progress for the
// current slide, with no animation.
export const useSlideDisplay = ({
  data,
  refsRef,
  currentIndexRef,
}: SlideState) => {
  const announce = useCallback(() => {
    const refs = refsRef.current;
    if (!refs) return;
    refs.liveRegion.textContent =
      "Slide " +
      (currentIndexRef.current + 1) +
      " of " +
      data.length +
      ": " +
      data[currentIndexRef.current].title;
  }, [data]);

  const settleCurrent = useCallback(() => {
    const refs = refsRef.current;
    if (!refs) return;
    const slide = data[currentIndexRef.current];

    const titleChars = splitChars({
      el: refs.titleEl,
      text: slide.title || "",
      lineClass: "cs_title_line",
      charClass: "cs_title_char",
    });
    gsap.set(titleChars, { yPercent: 0, y: 0 });

    const labelChars = splitChars({
      el: refs.labelEl,
      text: slide.label || "",
      lineClass: "cs_label_line",
      charClass: "cs_title_char",
    });
    gsap.set(labelChars, { yPercent: 0, y: 0 });

    setIndexDisplay({
      el: refs.indexEl,
      valueString: indexLabel(currentIndexRef.current),
      total: data.length,
    });

    gsap.set(refs.progressFill, {
      scaleX: (currentIndexRef.current + 1) / data.length,
      transformOrigin: "left center",
    });

    announce();
  }, [data, announce]);

  return { announce, settleCurrent };
};
