import { useRef } from "react";
import { useInView } from "motion/react";

import { TextRevealEffect } from "@/components/reuseable";
import { generateDisplayOptions } from "@/utils/functions";

const DELAY_OPTIONS = generateDisplayOptions({ n: 6 });

export const FooterContentReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const variantConfig = {
    container: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        rotateX: 90,
        y: 10,
      },
      visible: {
        opacity: 1,
        rotateX: 0,
        y: 0,
        transition: {
          duration: 0.5,
        },
      },
    },
  };

  return (
    <div ref={ref} className="flex flex-col p-4">
      <div className="flex flex-col gap-4">
        <TextRevealEffect
          as="h2"
          className="font-heading text-heading-2 tracking-normal mb-2"
          delay={DELAY_OPTIONS[0]}
          per="line"
          preset="blur"
          trigger={inView}
          variants={variantConfig}
        >
          Let's work together
        </TextRevealEffect>
        <TextRevealEffect
          as="p"
          className="text-heading-5"
          delay={DELAY_OPTIONS[1]}
          per="line"
          trigger={inView}
        >
          Starting a project or growing your team?
        </TextRevealEffect>
        <TextRevealEffect
          as="p"
          className="text-heading-5"
          delay={DELAY_OPTIONS[2]}
          per="line"
          trigger={inView}
        >
          Let's collaborate
        </TextRevealEffect>
      </div>
    </div>
  );
};
