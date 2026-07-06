import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950"
    >
      <div className="text-center">

        {/* Developer Logo */}

        <motion.div
          initial={{
            scale: 0.5,
            opacity: 0,
            rotate: -20,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            rotate: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="inline-flex items-center justify-center
          w-24 h-24 rounded-full
          border-4 border-blue-500
          text-4xl font-bold text-blue-400
          shadow-[0_0_35px_rgba(59,130,246,0.6)]"
        >
          {"<H/>"}
        </motion.div>

        {/* Name */}

        <motion.h1
  initial={{
    opacity: 0,
    y: 30,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.4,
    duration: 0.6,
  }}
  className="mt-8 text-3xl md:text-5xl font-semibold text-blue-400 tracking-wide"
>
  Harshavardhan's
</motion.h1>

        {/* Portfolio */}

        <motion.h2
  initial={{
    opacity: 0,
    y: 30,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.7,
    duration: 0.6,
  }}
  className="mt-2 text-xl md:text-3xl font-medium text-cyan-400 tracking-[10px]"
>
  PORTFOLIO
</motion.h2>

        {/* Loading */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.1,
          }}
          className="mt-10 text-slate-400 text-lg tracking-widest"
        >
          Loading...
        </motion.p>

        {/* Progress Bar */}

        <div className="w-72 h-2 bg-slate-800 rounded-full overflow-hidden mt-5 mx-auto">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 shadow-[0_0_15px_rgba(59,130,246,0.9)]"
          />

        </div>

      </div>
    </motion.div>
  );
}

export default LoadingScreen;