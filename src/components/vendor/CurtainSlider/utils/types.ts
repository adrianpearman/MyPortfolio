import type { RefObject } from "react";

import { TProjectSlide } from "@/components/sections/Projects/utils/types";

export type TweenVars = gsap.TweenVars;

export type DigitColumn = HTMLSpanElement & {
  _digit: number;
  _roller: HTMLSpanElement;
};

export type LayerParts = {
  strips: HTMLElement[];
  inners: HTMLElement[];
  imgs: HTMLImageElement[];
  shades: HTMLElement[];
};

export type SlideChange = {
  index: number;
  direction: number;
  slide: TProjectSlide;
};

export type CurtainSliderProps = {
  className?: string;
  data?: TProjectSlide[];
  duration?: number;
  ease?: string;
  columns?: number | string;
  auto?: number;
  drag?: boolean;
  stagger?: number;
  disable?: string | string[];
  onChange?: (change: SlideChange) => void;
};

export type SliderRefs = {
  layers: HTMLDivElement[];
  layerParts: LayerParts[];
  labelEl: HTMLDivElement;
  titleEl: HTMLHeadingElement;
  indexEl: HTMLDivElement;
  progressFill: HTMLDivElement;
  prevBtn: HTMLButtonElement;
  nextBtn: HTMLButtonElement;
  liveRegion: HTMLDivElement;
};

export type CharLineArgs = {
  text: string;
  lineClass: string;
  charClass: string;
};

export type SplitCharsArgs = CharLineArgs & {
  el: HTMLElement;
};

export type SwapCharsArgs = {
  el: HTMLElement;
  newText: string;
  lineClass: string;
  charClass: string;
  outVars: TweenVars;
  inVars: { from: TweenVars; to: TweenVars };
};

export type IndexDisplayArgs = {
  el: HTMLElement;
  valueString: string;
  total: number;
};

export type LayoutStripsArgs = {
  stage: HTMLElement;
  layerParts: LayerParts[];
  columns: number;
};

export type InFlight = { tl: gsap.core.Timeline; outIndex: number };

export type SlideState = {
  currentIndexRef: RefObject<number>;
  data: TProjectSlide[];
  refsRef: RefObject<SliderRefs | null>;
};

export type TUseSlideNavigationProps = {
  announce: () => void;
  barDur: number;
  clampedColumns: number;
  duration: number;
  inFlightRef: RefObject<InFlight | null>;
  onChange: CurtainSliderProps["onChange"];
  resolvedEase: string;
  stagger: number;
} & SlideState;

export type TUseAutoplay = {
  auto: number;
  nextRef: RefObject<() => void>;
  reducedMotionRef: RefObject<boolean>;
};

export type TUseSliderInput = {
  armAutoResume: () => void;
  drag: boolean;
  next: () => void;
  prev: () => void;
  stageRef: RefObject<HTMLDivElement | null>;
};
