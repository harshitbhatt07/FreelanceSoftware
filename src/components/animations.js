export const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.55 },
};

export const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, margin: "-70px" },
};

export const slideIn = (index = 0) => ({
  initial: {
    opacity: 0,
    x: index % 2 === 0 ? -72 : 72,
    y: 18,
    scale: 0.98,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  },
  viewport: { once: true, amount: 0.18, margin: "-70px" },
  transition: {
    duration: 0.72,
    delay: (index % 6) * 0.08,
    ease: [0.22, 1, 0.36, 1],
  },
});
