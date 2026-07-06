import portfolioData from "../../data/portfolioData";

import {
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
  popIn,
} from "../../animations/motion";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 border-t border-slate-800 text-white">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)] pointer-events-none"></div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-14"
      >

        {/* Brand */}

        <div className="text-center">

          <motion.h2
            variants={popIn}
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.35)]"
          >

            {portfolioData.name}

          </motion.h2>

          <p className="mt-4 text-xl text-slate-300">

            {portfolioData.role}

          </p>

          <p className="mt-2 text-slate-500">

            {portfolioData.subtitle}

          </p>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="inline-flex items-center gap-3 mt-7 px-6 py-3 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 font-semibold"
          >

            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

            Available for Full-Time Opportunities

          </motion.div>

        </div>

        {/* Navigation */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mt-14"
        >

          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Experience", id: "experience" },
            { name: "Contact", id: "contact" },
          ].map((item) => (

            <motion.a
              key={item.name}
              variants={popIn}
              whileHover={{
                y: -3,
              }}
              href={`#${item.id}`}
              className="relative text-slate-300 hover:text-blue-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >

              {item.name}

            </motion.a>

          ))}

        </motion.div>

        {/* Social Icons */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center gap-8 mt-14"
        >

          <motion.a
            variants={popIn}
            whileHover={{
              scale: 1.2,
              rotate: 8,
            }}
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-2xl hover:border-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >

            <FaGithub />

          </motion.a>

          <motion.a
            variants={popIn}
            whileHover={{
              scale: 1.2,
              rotate: 8,
            }}
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-2xl hover:border-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >

            <FaLinkedin />

          </motion.a>

          <motion.a
            variants={popIn}
            whileHover={{
              scale: 1.2,
              rotate: 8,
            }}
            href={portfolioData.leetcode}
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-2xl hover:border-yellow-400 hover:bg-yellow-500 hover:text-black hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
          >

            <SiLeetcode />

          </motion.a>

        </motion.div>

        {/* Email */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-12"
        >

          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="text-lg text-slate-300 hover:text-blue-400 transition duration-300"
          >

            {portfolioData.contact.email}

          </a>

        </motion.div>

        {/* Divider */}

        <div className="mt-14 border-t border-slate-800"></div>

        {/* Bottom */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center pt-10"
        >

          <p className="text-slate-400">

            © {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.

          </p>

          <p className="mt-4 text-slate-500 flex items-center justify-center gap-2 text-sm">

            {portfolioData.footer.builtWith}

            <motion.span
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >

              <FaHeart className="text-red-500" />

            </motion.span>

          </p>

          <p className="mt-4 text-slate-600 text-sm">

            Designed & Developed by{" "}

            <span className="text-blue-400 font-semibold">

              M. Harshavardhan Rao

            </span>

          </p>

        </motion.div>

      </motion.div>

    </footer>
  );
}

export default Footer;