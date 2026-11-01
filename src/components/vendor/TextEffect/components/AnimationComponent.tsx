import { cn } from "@/utils";
import { memo } from "react";
import type { ReactNode } from "react";
import { motion } from "motion/react";

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
          variants={variants}
          className="inline-block whitespace-pre"
        >
          {segment}
        </motion.span>
      ) : (
        <motion.span className="inline-block whitespace-pre">
          {typeof segment !== "string" ? (
            <motion.span
              aria-hidden="true"
              variants={variants}
              className="inline-block"
            >
              {segment}
            </motion.span>
          ) : segment.split("").map((char, charIndex) => (
            <motion.span
              key={`char-${charIndex}`}
              aria-hidden="true"
              variants={variants}
              className="inline-block whitespace-pre"
            >
              {char}
            </motion.span>
          ))}
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
