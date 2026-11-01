import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn, generateDisplayOptions } from "@/utils";
import { SectionHeader } from "@/components/helper";
import { LANGUAGE_LIST_DATA } from "@/data";

const DELAY_OPTIONS = generateDisplayOptions({ n: 6 });

const REVEAL_DELAY = DELAY_OPTIONS[5];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { delayChildren: REVEAL_DELAY, staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, rotateX: 90, y: 10 },
  visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.5 } },
};

export const LanguageContainer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col items-center"
      initial="hidden"
      ref={ref}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <SectionHeader content="Tools Of The Trade" subHeader />
      </motion.div>
      <motion.ul
        className="flex flex-wrap justify-evenly gap-1"
        variants={itemVariants}
      >
        {LANGUAGE_LIST_DATA.map((lan, i) => {
          return (
            <li
              className="bg-background-secondary rounded-md py-2 px-3 flex flex-col gap-2 items-center w-[calc(25%-8px)]"
              key={`language-list-item-${i}`}
            >
              <p>{lan.language}</p>
              <i className={cn(lan.className, "colored text-xl")}></i>
            </li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};
