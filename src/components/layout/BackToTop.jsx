import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            y: 20,
          }}
          transition={{
            duration: 0.25,
          }}
          className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-blue-600/90 backdrop-blur-md border border-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:bg-blue-500 hover:scale-110 flex items-center justify-center transition-all duration-300"
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;