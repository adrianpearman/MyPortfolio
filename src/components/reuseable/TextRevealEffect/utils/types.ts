import type { Transition, Variants } from "motion/react";

export type PresetType = "blur" | "fade-in-blur" | "scale" | "fade" | "slide";

export type PerType = "word" | "char" | "line";

export type TextEffectProps = {
  as?: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  containerTransition?: Transition;
  delay?: number;
  onAnimationComplete?: () => void;
  onAnimationStart?: () => void;
  per?: PerType;
  preset?: PresetType;
  segmentTransition?: Transition;
  segmentWrapperClassName?: string;
  speedReveal?: number;
  speedSegment?: number;
  style?: React.CSSProperties;
  trigger?: boolean;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
};
