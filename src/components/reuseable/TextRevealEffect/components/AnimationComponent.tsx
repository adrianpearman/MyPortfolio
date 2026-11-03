import { cn } from "@/utils/functions";
import { memo } from "react";
import { motion } from "motion/react";

import type { ReactNode } from "react";
import type { Variants } from "motion/react";

type TAnimationComponentProps = {
  per: "line" | "word" | "char";
  segment: ReactNode;
  segmentWrapperClassName?: string;
  variants: Variants;
};

export const AnimationComponent = memo(
  ({
    per,
    segment,
    segmentWrapperClassName,
    variants,
  }: TAnimationComponentProps) => {
    const content =
      per === "line" ? (
        <motion.span variants={variants} className="block">
          {segment}
        </motion.span>
      ) : per === "word" ? (
        <motion.span
          aria-hidden="true"
          className="inline-block whitespace-pre"
          variants={variants}
        >
          {segment}
        </motion.span>
      ) : (
        <motion.span className="inline-block whitespace-pre">
          {typeof segment !== "string" ? (
            <motion.span
              aria-hidden="true"
              className="inline-block"
              variants={variants}
            >
              {segment}
            </motion.span>
          ) : (
            segment.split("").map((char, charIndex) => (
              <motion.span
                aria-hidden="true"
                className="inline-block whitespace-pre"
                key={`char-${charIndex}`}
                variants={variants}
              >
                {char}
              </motion.span>
            ))
          )}
        </motion.span>
      );

    if (!segmentWrapperClassName) {
      return content;
    }

    const defaultWrapperClassName = per === "line" ? "block" : "inline-block";

    return (
      <span className={cn(defaultWrapperClassName, segmentWrapperClassName)}>
        {content}
      </span>
    );
  },
);

AnimationComponent.displayName = "AnimationComponent";
