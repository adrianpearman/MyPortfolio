import { Children, type ReactNode } from "react";
import type {
  TargetAndTransition,
  Transition,
  Variant,
  Variants,
} from "motion/react";
import { PerType } from "./types";

export const createVariantsWithTransition = (
  baseVariants: Variants,
  transition?: Transition & { exit?: Transition },
): Variants => {
  if (!transition) return baseVariants;

  const { exit: _, ...mainTransition } = transition;

  return {
    ...baseVariants,
    visible: {
      ...baseVariants.visible,
      transition: {
        ...(hasTransition(baseVariants.visible)
          ? baseVariants.visible.transition
          : {}),
        ...mainTransition,
      },
    },
    exit: {
      ...baseVariants.exit,
      transition: {
        ...(hasTransition(baseVariants.exit)
          ? baseVariants.exit.transition
          : {}),
        ...mainTransition,
        staggerDirection: -1,
      },
    },
  };
};

export const hasTransition = (
  variant?: Variant,
): variant is TargetAndTransition & { transition?: Transition } => {
  if (!variant) return false;
  return typeof variant === "object" && "transition" in variant;
};

export const splitText = (children: ReactNode, per: PerType): ReactNode[] => {
  const nodes = Children.toArray(children);
  if (per === "line") {
    const lines: ReactNode[][] = [[]];
    nodes.forEach((node) => {
      if (typeof node !== "string") {
        lines[lines.length - 1].push(node);
        return;
      }
      node.split("\n").forEach((part, i) => {
        if (i > 0) lines.push([]);
        if (part) lines[lines.length - 1].push(part);
      });
    });
    return lines;
  }
  return nodes.flatMap((node) =>
    typeof node === "string" ? node.split(/(\s+)/) : [node],
  );
};
