import { type RefObject } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, ScrambleTextPlugin);
}

const ASCII_CHARS =
  " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";
const COLOR_1 = "dual-scramble-color-1";
const COLOR_2 = "dual-scramble-color-2";

type TTextScrambleOptions = {
  duration?: number;
  start?: string;
};

const randomChars = (text: string) =>
  text.replace(
    /\S/g,
    () => ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)],
  );

/** Scrambles `layerRef`'s text into noise and back once it scrolls into view. */
export const useTextScramble = (
  layerRef: RefObject<HTMLElement | null>,
  text: string,
  { duration = 0.8, start = "top 80%" }: TTextScrambleOptions = {},
) => {
  useGSAP(
    () => {
      const layer = layerRef.current;
      if (!layer) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const charCount = text.replace(/\s/g, "").length;
      const oneLetterDelay = charCount > 0 ? duration / charCount : 0;
      const scramble = { chars: ASCII_CHARS, speed: 1, revealDelay: 0.1 };

      const tl = gsap
        .timeline({ paused: true })
        .to(layer, {
          duration,
          ease: "none",
          scrambleText: {
            ...scramble,
            text: randomChars(text),
            oldClass: COLOR_2,
            newClass: COLOR_1,
          },
        })
        .to(
          layer,
          {
            duration,
            ease: "none",
            scrambleText: {
              ...scramble,
              text,
              oldClass: COLOR_1,
              newClass: COLOR_2,
            },
          },
          oneLetterDelay,
        );

      ScrollTrigger.create({
        trigger: layer,
        start,
        once: true,
        onEnter: () => {
          tl.play();
        },
      });
    },
    { dependencies: [text, duration, start] },
  );
};
