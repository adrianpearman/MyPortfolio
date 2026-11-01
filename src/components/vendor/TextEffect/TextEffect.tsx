import { AnimatePresence, motion } from "motion/react";
import type { TargetAndTransition } from "motion/react";
import { AnimationComponent } from "./components";
import {
  defaultStaggerTimes,
  defaultContainerVariants,
  defaultItemVariants,
  presetVariants,
} from "./utils/consts";
import {
  createVariantsWithTransition,
  hasTransition,
  splitText,
} from "./utils/functions";
import type { TextEffectProps } from "./utils/types";

export const TextEffect = ({
  as = "p",
  children,
  containerTransition,
  className,
  delay = 0,
  onAnimationComplete,
  onAnimationStart,
  per = "word",
  preset = "fade",
  segmentTransition,
  segmentWrapperClassName,
  speedReveal = 1,
  speedSegment = 1,
  style,
  trigger = true,
  variants,
}: TextEffectProps) => {
  const segments = splitText(children, per);
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  const baseVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };

  const stagger = defaultStaggerTimes[per] / speedReveal;

  const baseDuration = 0.3 / speedSegment;

  const customStagger = hasTransition(variants?.container?.visible ?? {})
    ? (variants?.container?.visible as TargetAndTransition).transition
        ?.staggerChildren
    : undefined;

  const customDelay = hasTransition(variants?.container?.visible ?? {})
    ? (variants?.container?.visible as TargetAndTransition).transition
        ?.delayChildren
    : undefined;

  const computedVariants = {
    container: createVariantsWithTransition(
      variants?.container || baseVariants.container,
      {
        staggerChildren: customStagger ?? stagger,
        delayChildren: customDelay ?? delay,
        ...containerTransition,
        exit: {
          staggerChildren: customStagger ?? stagger,
          staggerDirection: -1,
        },
      },
    ),
    item: createVariantsWithTransition(variants?.item || baseVariants.item, {
      duration: baseDuration,
      ...segmentTransition,
    }),
  };

  return (
    <AnimatePresence mode="popLayout">
      {trigger && (
        <MotionTag
          animate="visible"
          className={className}
          exit="exit"
          initial="hidden"
          onAnimationComplete={onAnimationComplete}
          onAnimationStart={onAnimationStart}
          style={style}
          variants={computedVariants.container}
        >
          {per !== "line" ? <span className="sr-only">{children}</span> : null}
          {segments.map((segment, index) => (
            <AnimationComponent
              key={`${per}-${index}`}
              per={per}
              segment={segment}
              segmentWrapperClassName={segmentWrapperClassName}
              variants={computedVariants.item}
            />
          ))}
        </MotionTag>
      )}
    </AnimatePresence>
  );
};
