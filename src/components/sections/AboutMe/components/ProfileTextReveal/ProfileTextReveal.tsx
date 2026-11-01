import { useRef } from "react";
import { useInView } from "motion/react";
import { TextEffect } from "@/components/vendor";
import { generateDisplayOptions } from "@/utils";

const DELAY_OPTIONS = generateDisplayOptions({ n: 6 });

export const ProfileTextReveal = () => {
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
    <div ref={ref} className="flex flex-col gap-3">
      <div aria-hidden className="flex">
        <TextEffect
          as="span"
          className="text-section-tertiary-header"
          delay={DELAY_OPTIONS[0]}
          per="line"
          preset="blur"
          trigger={inView}
          variants={variantConfig}
        >
          {`<Introduction>`}
        </TextEffect>
      </div>
      <div className="flex flex-col gap-1.5 pl-8">
        <TextEffect trigger={inView} as="p" per="line" delay={DELAY_OPTIONS[1]}>
          Hello! I'm <strong>Adrian</strong> 😃
        </TextEffect>
        <TextEffect trigger={inView} as="p" per="line" delay={DELAY_OPTIONS[2]}>
          I am a Web Developer with over <strong>9 years</strong> of relevant
          work experience across different industries.
        </TextEffect>
        <TextEffect trigger={inView} as="p" per="line" delay={DELAY_OPTIONS[3]}>
          My roles have allowed me to successfully build, launch, and optimize
          various applications including websites, web pages, and full-stack
          platforms for clients.
        </TextEffect>
        <TextEffect trigger={inView} as="p" per="line" delay={DELAY_OPTIONS[4]}>
          For the last two years, I have shared my love of tech through
          teaching; as I move to the next opportunity, I am excited to return to
          hands-on development.
        </TextEffect>
      </div>
      <div aria-hidden className="flex">
        <TextEffect
          as="span"
          className="text-section-tertiary-header"
          delay={DELAY_OPTIONS[5]}
          per="line"
          preset="blur"
          trigger={inView}
        >
          {`</Introduction>`}
        </TextEffect>
      </div>
    </div>
  );
};
