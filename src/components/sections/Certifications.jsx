import portfolioData from "../../data/portfolioData";

import { motion } from "framer-motion";

import {
  fadeUp,
  popIn,
  staggerContainer,
} from "../../animations/motion";

import {
  FaExternalLinkAlt,
  FaMicrosoft,
  FaAws,
  FaCheckCircle,
  FaCalendarAlt,
} from "react-icons/fa";

import {
  SiGoogle,
  SiCisco,
} from "react-icons/si";

function Certifications() {

  const iconMap = {
    microsoft: (
      <FaMicrosoft className="text-blue-500 text-6xl" />
    ),

    google: (
      <SiGoogle className="text-red-500 text-6xl" />
    ),

    aws: (
      <FaAws className="text-orange-500 text-6xl" />
    ),

    cisco: (
      <SiCisco className="text-sky-500 text-6xl" />
    ),
  };

  return (
    <section
      id="certifications"
      className="min-h-screen bg-slate-950 text-white py-24"
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
            My <span className="text-blue-500">Certifications</span>
          </h2>

          <p className="text-slate-400 mt-5 text-lg max-w-3xl mx-auto leading-8">
            Professional certifications validating my expertise in
            Artificial Intelligence, Cloud Computing, Networking,
            and Software Development.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10"
        >

          {portfolioData.certifications.map((certificate) => (

            <motion.div
              key={certificate.title}
              variants={popIn}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-700 hover:border-blue-500 shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
            >

              {/* Glow */}

              <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/10 blur-3xl rounded-full"></div>

              <div className="relative p-8">

                {/* Top */}

                <div className="flex justify-between items-start mb-8">

                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.1,
                    }}
                    className="w-20 h-20 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700"
                  >
                    {iconMap[certificate.icon]}
                  </motion.div>

                  <div className="flex items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/20 px-4 py-2 rounded-full text-sm">

                    <FaCheckCircle />

                    Verified

                  </div>

                </div>

                {/* Title */}

                <h3 className="text-3xl font-bold leading-snug">

                  {certificate.title}

                </h3>

                {/* Organization */}

                <p className="mt-4 text-blue-400 font-semibold text-xl">

                  {certificate.organization}

                </p>

                {/* Date */}

                <div className="flex items-center gap-3 mt-5 text-slate-400">

                  <FaCalendarAlt />

                  <span>{certificate.date}</span>

                </div>

                {/* Divider */}

                <div className="my-8 border-t border-slate-700"></div>

                {/* Bottom */}

                <div className="flex justify-between items-center flex-wrap gap-5">

                  <div>

                    <p className="text-sm text-slate-500">

                      Credential Status

                    </p>

                    <p className="text-green-400 font-semibold">

                      Successfully Verified

                    </p>

                  </div>

                  <motion.a
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/20"
                  >

                    <FaExternalLinkAlt />

                    View Credential

                  </motion.a>

                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Certifications;