import portfolioData from "../../data/portfolioData";

import {
  FaLaptopCode,
  FaProjectDiagram,
  FaCertificate,
  FaAward,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import { motion } from "framer-motion";

import {
  fadeUp,
  popIn,
  staggerContainer,
} from "../../animations/motion";

function Achievements() {
  const iconMap = {
    leetcode: (
      <SiLeetcode className="text-4xl text-yellow-400" />
    ),

    project: (
      <FaProjectDiagram className="text-4xl text-blue-400" />
    ),

    certificate: (
      <FaCertificate className="text-4xl text-green-400" />
    ),

    internship: (
      <FaLaptopCode className="text-4xl text-purple-400" />
    ),

    award: (
      <FaAward className="text-4xl text-orange-400" />
    ),
  };

  return (
    <section
      id="achievements"
      className="min-h-screen bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-500">Achievements</span>
          </h2>

          <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto leading-8">
            Milestones that reflect my continuous learning,
            dedication, problem-solving mindset, and passion
            for building impactful software solutions.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {portfolioData.achievements.map((achievement) => (
            <motion.div
              key={achievement.title}
              variants={popIn}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative overflow-hidden rounded-3xl
              bg-slate-800/80
              border border-slate-700
              hover:border-blue-500
              shadow-xl
              hover:shadow-blue-500/20
              p-8
              transition-all duration-300"
            >

              {/* Glow */}

              <div
                className="absolute
                top-0
                right-0
                w-32
                h-32
                bg-blue-500/10
                blur-3xl
                rounded-full"
              />

              {/* Icon */}

              <div className="relative z-10">

                <div
                  className="w-16 h-16 rounded-2xl
                  bg-slate-700
                  flex items-center justify-center
                  mb-7"
                >
                  {iconMap[achievement.icon]}
                </div>

                {/* Number */}

                <h3
                  className="text-5xl font-extrabold
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-indigo-500
                  bg-clip-text
                  text-transparent
                  mb-5"
                >
                  {achievement.number}
                </h3>

                {/* Title */}

                <h4 className="text-2xl font-bold mb-5 leading-snug">
                  {achievement.title}
                </h4>

                {/* Divider */}

                <div className="w-16 h-1 rounded-full bg-blue-500 mb-6"></div>

                {/* Description */}

                <p className="text-slate-400 leading-8">
                  {achievement.description}
                </p>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Achievements;