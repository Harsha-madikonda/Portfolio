import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[5px] bg-blue-500 shadow-[0_0_12px_#3b82f6] origin-left z-[9999]"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}

export default ScrollProgress;