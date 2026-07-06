// ================= Fade Left =================

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// ================= Fade Right =================

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// ================= Fade Up =================

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// ================= Fade Down =================

export const fadeDown = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// ================= Zoom In =================

export const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// ================= Pop In =================

export const popIn = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

// ================= Stagger Container =================

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

// ================= Card Hover =================

export const cardHover = {
  whileHover: {
    y: -10,
    scale: 1.03,
    transition: {
      duration: 0.25,
    },
  },
};

// ================= Button Hover =================

export const buttonHover = {
  whileHover: {
    scale: 1.05,
  },
  whileTap: {
    scale: 0.95,
  },
};

// ================= Floating =================

export const floating = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ================= Rotate Slowly =================

export const rotateSlow = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// ================= Icon Hover =================

export const iconHover = {
  whileHover: {
    scale: 1.2,
    rotate: 8,
    transition: {
      duration: 0.2,
    },
  },
};