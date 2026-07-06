import { motion } from "framer-motion";

import {
  fadeLeft,
  fadeRight,
  fadeUp,
  popIn,
  staggerContainer,
} from "../../animations/motion";

import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaLightbulb,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 text-white flex items-center py-24"
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
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-slate-400 mt-5 text-lg">
            Get to know more about my journey, passion, and career goals.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-8">
              Who am I?
            </h3>

            <p className="text-slate-400 leading-8 mb-6 text-lg">
              I am a Computer Science (AI & ML) undergraduate with a
              strong passion for Full Stack Development and Artificial
              Intelligence. I enjoy transforming ideas into scalable web
              applications and intelligent software solutions that solve
              real-world problems.
            </p>

            <p className="text-slate-400 leading-8 mb-6 text-lg">
              My learning journey has been driven by curiosity and
              self-learning. Most of my technical skills have been
              developed through hands-on projects, official
              documentation, online learning resources, and continuous
              practice rather than relying solely on classroom learning.
            </p>

            <p className="text-slate-400 leading-8 text-lg">
              I am currently focused on mastering the MERN Stack,
              Artificial Intelligence, and Data Structures & Algorithms
              while building practical projects that strengthen my
              software engineering and problem-solving skills.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              transition: { duration: 0.25 },
            }}
            className="bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-xl hover:border-blue-500 transition-all"
          >

            <h3 className="text-3xl font-semibold mb-8">
              Quick Information
            </h3>

            <div className="space-y-7">

              <div className="flex items-start gap-5">
                <FaGraduationCap className="text-3xl text-blue-500 mt-1" />

                <div>
                  <h4 className="font-semibold text-xl">
                    Education
                  </h4>

                  <p className="text-slate-400 mt-2">
                    B.Tech in Computer Science Engineering (AI & ML)
                    <br />
                    SR University
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <FaMapMarkerAlt className="text-3xl text-blue-500 mt-1" />

                <div>
                  <h4 className="font-semibold text-xl">
                    Location
                  </h4>

                  <p className="text-slate-400 mt-2">
                    Jammikunta, Karimnagar,
                    Telangana, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <FaLaptopCode className="text-3xl text-blue-500 mt-1" />

                <div>
                  <h4 className="font-semibold text-xl">
                    Career Goal
                  </h4>

                  <p className="text-slate-400 mt-2">
                    Full Stack Developer
                    <br />
                    AI / ML Engineer
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <FaLightbulb className="text-3xl text-blue-500 mt-1" />

                <div>
                  <h4 className="font-semibold text-xl">
                    Interests
                  </h4>

                  <p className="text-slate-400 mt-2">
                    MERN Stack • AI/ML • DSA • Self Learning
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Stats */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24"
        >

          {[
            ["1+", "Years Learning"],
            ["2+", "Projects"],
            ["4+", "Certifications"],
            ["100+", "LeetCode Problems"],
          ].map(([number, text]) => (

            <motion.div
              key={text}
              variants={popIn}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center hover:border-blue-500 transition-all"
            >

              <h3 className="text-5xl font-bold text-blue-500">
                {number}
              </h3>

              <p className="mt-3 text-slate-400">
                {text}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default About;