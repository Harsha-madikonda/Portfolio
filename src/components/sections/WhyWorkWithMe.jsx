import portfolioData from "../../data/portfolioData";

import {
  FaLightbulb,
  FaPuzzlePiece,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

import { motion } from "framer-motion";

import {
  fadeUp,
  popIn,
  staggerContainer,
} from "../../animations/motion";

function WhyWorkWithMe() {
  const iconMap = {
    learning: (
      <FaLightbulb className="text-yellow-400 text-5xl" />
    ),

    problem: (
      <FaPuzzlePiece className="text-blue-500 text-5xl" />
    ),

    growth: (
      <FaChartLine className="text-green-400 text-5xl" />
    ),

    quality: (
      <FaCheckCircle className="text-purple-400 text-5xl" />
    ),
  };

  return (
    <section
      id="why-work-with-me"
      className="min-h-screen bg-slate-950 text-white py-24 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            Why <span className="text-blue-500">Hire Me?</span>
          </h2>

          <p className="mt-5 text-lg text-slate-400 max-w-3xl mx-auto leading-8">
            Beyond technical knowledge, I bring curiosity, ownership,
            adaptability, and a commitment to delivering high-quality
            software solutions.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {portfolioData.strengths.map((item) => (
            <motion.div
              key={item.title}
              variants={popIn}
              whileHover={{
  y: -12,
  scale: 1.02,
  boxShadow: "0 20px 40px rgba(59,130,246,0.2)",
}}
              transition={{
                duration: 0.25,
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-xl hover:border-blue-500 hover:shadow-blue-500/20 transition-all duration-300"
            >
              {/* Glow */}

              <div className="absolute -right-16 -top-16 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>

              {/* Icon */}

              <div className="mb-8 relative">
  {iconMap[item.icon]}
</div>

              {/* Title */}

              <h3 className="text-2xl font-bold mb-5 relative">
                {item.title}
              </h3>

              {/* Description */}

              <p className="text-slate-400 leading-8 relative">
                {item.description}
              </p>

              {/* Bottom Line */}

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                }}
                className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-8"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Quote */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto rounded-3xl border border-slate-700 bg-slate-900 p-10">
            <h3 className="text-3xl font-bold mb-5">
              Ready to Build Something Amazing?
            </h3>

            <p className="text-slate-400 text-lg leading-8">
              I enjoy turning ideas into real products using modern web
              technologies, AI, and clean software engineering
              practices. I'm always eager to learn, collaborate, and
              contribute to meaningful projects.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyWorkWithMe;