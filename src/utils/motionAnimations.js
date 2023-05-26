export const dropIn = {
  exit: {
    y: "100vh",
    opacity: 0,
  },
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "string",
      damping: 25,
      stiffness: 500,
    },
  },
};

export const dropOver = {
  exit: {
    x: "-60%",
    opacity: 0,
  },
  hidden: {
    x: "-60%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "string",
      damping: 25,
      stiffness: 500,
    },
  },
};

export const carouselSlideOver = {
  exit: {
    x: "-100vw",
    opacity: 0,
  },
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "string",
      damping: 25,
      stiffness: 500,
    },
  },
};
