import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { LinkScroll } from "@/components/helper";

type TFooterProps = {
  offsetHeight?: number;
};

const LINKS = [
  { linkName: "About Me", scrollToElement: "aboutMe" },
  { linkName: "Experience", scrollToElement: "experience" },
  { linkName: "Projects", scrollToElement: "projects" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, rotateX: 90, y: 10 },
  visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.5 } },
};

export const FooterNavigation = ({ offsetHeight }: TFooterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      animate={inView ? "visible" : "hidden"}
      className="flex justify-around"
      initial="hidden"
      ref={ref}
      variants={containerVariants}
    >
      {LINKS.map(({ linkName, scrollToElement }) => (
        <motion.div key={scrollToElement} variants={itemVariants}>
          <LinkScroll
            className="font-main-heading text-section-sub-header cursor-pointer"
            height={offsetHeight}
            linkName={linkName}
            scrollToElement={scrollToElement}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
