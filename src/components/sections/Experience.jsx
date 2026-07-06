import portfolioData from "../../data/portfolioData";

import {
  FaBriefcase,
  FaLaptopCode,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

import {
  fadeUp,
  popIn,
  staggerContainer,
} from "../../animations/motion";

function Experience() {
  return (
    <section
      id="experience"
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
            My <span className="text-blue-500">Experience</span>
          </h2>

          <p className="text-slate-400 mt-5 text-lg max-w-3xl mx-auto leading-8">
            My journey through internships, self-learning, and building
            real-world software applications.
          </p>
        </motion.div>

        {/* Experience Cards */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10"
        >

          {portfolioData.experience.map((item, index) => (

            <motion.div
              key={index}
              variants={popIn}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              className="bg-slate-800 rounded-3xl border border-slate-700 shadow-xl hover:border-blue-500 hover:shadow-blue-500/20 overflow-hidden"
            >

              {/* Top Bar */}

              <div className="h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"></div>

              <div className="p-8">

                {/* Icon */}

                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-3xl mb-6 shadow-lg">

                  {index === 0 ? (
                    <FaBriefcase />
                  ) : (
                    <FaLaptopCode />
                  )}

                </div>

                {/* Title */}

                <h3 className="text-3xl font-bold mb-2">

                  {item.title}

                </h3>

                <p className="text-blue-400 text-lg font-semibold">

                  {item.company}

                </p>

                {/* Duration */}

                <div className="flex flex-wrap gap-6 text-slate-400 mt-5 mb-6">

                  <div className="flex items-center gap-2">

                    <FaCalendarAlt />

                    {item.duration}

                  </div>

                  <div className="flex items-center gap-2">

                    <FaMapMarkerAlt />

                    {item.location}

                  </div>

                </div>

                {/* Technologies */}

                <div className="flex flex-wrap gap-3 mb-8">

                  {item.technologies.map((tech) => (

                    <motion.span
                      key={tech}
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="bg-slate-700 border border-slate-600 text-blue-400 px-4 py-2 rounded-full text-sm"
                    >

                      {tech}

                    </motion.span>

                  ))}

                </div>

                {/* Description */}

                <div className="space-y-5">

                  {item.description.map((point, i) => (

                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="flex gap-4"
                    >

                      <div className="w-3 h-3 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>

                      <p className="text-slate-300 leading-8">

                        {point}

                      </p>

                    </motion.div>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Experience;