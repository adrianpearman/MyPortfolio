export const TEXT_REVEAL_VARIANT_CONFIG = {
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
