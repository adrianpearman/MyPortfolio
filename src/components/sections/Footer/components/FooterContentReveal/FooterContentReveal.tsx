import { useRef } from "react";
import { useInView } from "motion/react";

import { TextRevealEffect } from "@/components/reuseable";
import { TEXT_REVEAL_VARIANT_CONFIG } from "@/utils/consts";
import { generateDisplayOptions } from "@/utils/functions";

const DELAY_OPTIONS = generateDisplayOptions({ n: 6 });

export const FooterContentReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="flex flex-col p-4 pt-6">
      <div className="flex flex-col gap-4">
        <TextRevealEffect
          as="h2"
          className="font-heading text-heading-2 tracking-normal mb-2"
          delay={DELAY_OPTIONS[0]}
          per="line"
          preset="blur"
          trigger={inView}
          variants={TEXT_REVEAL_VARIANT_CONFIG}
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
          Reach out, let's collaborate.
        </TextRevealEffect>
      </div>
    </div>
  );
};
