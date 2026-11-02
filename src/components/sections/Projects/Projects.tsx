import { useRef } from "react";
import { useInView } from "motion/react";

import { BaseCell, TextRevealEffect } from "@/components/reuseable";
import { ProjectsCarousel } from "@/components/sections/Projects/components";
import { TEXT_REVEAL_VARIANT_CONFIG } from "@/utils/consts";
import { generateDisplayOptions } from "@/utils/functions";

const DELAY_OPTIONS = generateDisplayOptions({ n: 6 });

export const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="w-full flex gap-2">
      <BaseCell className="min-h-100 w-1/4 bg-linear-135 from-purple-cell-background to-background-landing text-text-primary-on-dark">
        <div ref={ref} className="px-4 py-8 py- flex flex-col h-full gap-8">
          <TextRevealEffect
            as="h2"
            className="text-heading-3 tracking-normal"
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
      </BaseCell>
      <BaseCell className="min-h-100 w-3/4 bg-background-landing">
        <ProjectsCarousel />
      </BaseCell>
    </section>
  );
};
