import { useTransform, motion, type MotionValue } from "motion/react";

type TTimelineScrollerProps = {
  height: number;
  scrollYProgress: MotionValue<number>;
};

export const TimelineScroller = ({
  height,
  scrollYProgress,
}: TTimelineScrollerProps) => {
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="absolute md:left-8 left-8 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 dark:via-neutral-700 to-transparent to-99% mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
      style={{ height }}
    >
      <motion.div
        className="absolute inset-x-0 top-0  w-0.5 bg-linear-to-t from-purple-500 via-blue-500 to-transparent from-0% via-10% rounded-full"
        style={{
          height: heightTransform,
          opacity: opacityTransform,
        }}
      />
    </div>
  );
};
