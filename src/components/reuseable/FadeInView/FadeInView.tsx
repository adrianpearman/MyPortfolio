import { motion, useReducedMotion } from "motion/react";

type TFadeInView = {
  children: React.ReactNode;
  className?: string;
};

// Use inside a section, not on it: moving the scroll target itself would throw off scrollIntoView.
export const FadeInView = ({ children, className }: TFadeInView) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ amount: 0.1, once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
};
