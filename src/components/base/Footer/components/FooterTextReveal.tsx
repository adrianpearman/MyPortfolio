import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Button, TextEffect } from "@/components/vendor";
import { generateDisplayOptions } from "@/utils";

const DELAY_OPTIONS = generateDisplayOptions({ n: 6 });

export const FooterTextReveal = () => {
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { delayChildren: DELAY_OPTIONS[4], staggerChildren: 0.3 },
    },
  };

  return (
    <div ref={ref} className="flex flex-col gap-8">
      <div className="flex flex-col gap-1.5 pl-8 text-4xl items-center">
        <TextEffect
          as="p"
          delay={DELAY_OPTIONS[0]}
          per="line"
          preset="blur"
          trigger={inView}
          variants={variantConfig}
        >
          Thank you for taking the time to look at my portfolio!
        </TextEffect>
        <TextEffect trigger={inView} as="p" per="line" delay={DELAY_OPTIONS[1]}>
          Starting a new project?
        </TextEffect>
        <TextEffect trigger={inView} as="p" per="line" delay={DELAY_OPTIONS[2]}>
          Looking to add a new member to your team?
        </TextEffect>
        <TextEffect trigger={inView} as="p" per="line" delay={DELAY_OPTIONS[3]}>
          Contact me and lets collaborate!
        </TextEffect>
      </div>
      <motion.div
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col items-center"
        initial="hidden"
        variants={containerVariants}
      >
        <motion.div className="flex gap-3" variants={variantConfig.item}>
          <Button
            nativeButton={false}
            render={
              <a
                aria-label="Adrian Pearman's LinkedIn profile (opens in new tab)"
                href="https://www.linkedin.com/in/adrian-pearman/"
                id="linkedin"
                rel="noopener noreferrer"
                target="_blank"
              />
            }
          >
            <i aria-hidden className="fa-brands fa-linkedin"></i>
            Linkedin
          </Button>
          <Button
            nativeButton={false}
            render={
              <a
                aria-label="Adrian Pearman's Github profile (opens in new tab)"
                href="https://www.github.com/adrianpearman"
                id="github"
                rel="noopener noreferrer"
                target="_blank"
              />
            }
          >
            <i aria-hidden className="fa-brands fa-github"></i>
            Github
          </Button>
          <Button
            nativeButton={false}
            render={
              <a
                aria-label="Book a call on Adrian Pearman's Calendly (opens in new tab)"
                href="https://www.calendly.com/adrianpearman/30min"
                id="calendy"
                rel="noopener noreferrer"
                target="_blank"
              />
            }
          >
            <i aria-hidden className="fa-solid fa-calendar-days"></i>
            Calendy
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};
