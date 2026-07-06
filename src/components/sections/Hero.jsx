import { TypeAnimation } from "react-type-animation";
import portfolioData from "../../data/portfolioData";
import profile from "../../assets/images/profile.jpg";

import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../animations/motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-28 lg:pt-20"
    >
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <p className="text-blue-400 font-semibold tracking-wide mb-5 text-xl sm:text-2xl md:text-3xl">
              👋 Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight break-words">
              {portfolioData.name}
            </h1>

            <div className="mt-5">

  <span className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-semibold">
    I'm a{" "}
  </span>

  <TypeAnimation
    sequence={[
  "Full Stack Developer",
  2000,

  "AI/ML Enthusiast",
  2000,

  "MERN Stack Developer",
  2000,

  "Problem Solver",
  2000,

  "Continuous Learner",
  2000,
]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400"
  />

</div>

            <p className="mt-8 text-base sm:text-lg leading-8 text-gray-400 max-w-2xl mx-auto lg:mx-0">
              {portfolioData.tagline}
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

              <a
                href="/Madikonda_Harshavardhan_Rao_Resume.pdf"
                download
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1"
              >
                <FaDownload />
                Download Resume
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center px-6 py-4 rounded-xl border border-blue-500 hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 font-semibold"
              >
                Contact Me
              </a>

            </div>

            {/* Social */}

            <div className="mt-10 flex justify-center lg:justify-start gap-5">

              <a
                href={portfolioData.github}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-2xl hover:bg-blue-600 transition hover:scale-110"
              >
                <FaGithub />
              </a>

              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-2xl hover:bg-blue-600 transition hover:scale-110"
              >
                <FaLinkedin />
              </a>

              <a
                href={portfolioData.leetcode}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-2xl hover:bg-blue-600 transition hover:scale-110"
              >
                <SiLeetcode />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">

              <div
                className="
                w-64 h-64
                sm:w-72 sm:h-72
                md:w-80 md:h-80
                lg:w-[420px] lg:h-[420px]
                rounded-full
                p-[5px]
                bg-gradient-to-r
                from-blue-500
                via-cyan-400
                to-blue-500
              "
              >

                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">

                  <img
                    src={profile}
                    alt="Harshavardhan Rao"
                    className="
                    w-[95%]
                    h-[95%]
                    rounded-full
                    object-cover
                  "
                  />

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;