import { useRef } from "react";
import { useInView } from "motion/react";

import { TextRevealEffect } from "@/components/reuseable";

import { TEXT_REVEAL_VARIANT_CONFIG } from "@/utils/consts";
import { generateDisplayOptions } from "@/utils/functions";

const DELAY_OPTIONS = generateDisplayOptions({ n: 6 });

export const ProjectHeroContent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="px-4 py-8 py- flex flex-col h-full gap-8 max-lg:px-3"
    >
      <TextRevealEffect
        as="h2"
        className="text-heading-4 tracking-[-0.2rem]"
        delay={DELAY_OPTIONS[0]}
        per="line"
        preset="blur"
        trigger={inView}
        variants={TEXT_REVEAL_VARIANT_CONFIG}
      >
        Projects
      </TextRevealEffect>
      <div className="flex flex-col gap-2">
        <TextRevealEffect
          as="p"
          className="text-paragraph"
          delay={DELAY_OPTIONS[1]}
          per="line"
          trigger={inView}
        >
          I'm always tinkering.
        </TextRevealEffect>
        <TextRevealEffect
          as="p"
          className="text-paragraph"
          delay={DELAY_OPTIONS[2]}
          per="line"
          trigger={inView}
        >
          New content is always in the works.
        </TextRevealEffect>
      </div>
    </div>
  );
};
