

import { motion } from "framer-motion";
import {
  fadeUp,
  popIn,
  staggerContainer,
} from "../../animations/motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaBrain,
  FaServer,
  FaLaptopCode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

function Skills() {
  const iconMap = {
    HTML: <FaHtml5 className="text-orange-500 text-2xl" />,
    CSS: <FaCss3Alt className="text-blue-500 text-2xl" />,
    JavaScript: <FaJsSquare className="text-yellow-400 text-2xl" />,
    React: <FaReact className="text-cyan-400 text-2xl" />,
    "Tailwind CSS": <SiTailwindcss className="text-sky-400 text-2xl" />,

    "Node.js": <FaNodeJs className="text-green-500 text-2xl" />,
    "Express.js": <SiExpress className="text-gray-300 text-2xl" />,
    MongoDB: <SiMongodb className="text-green-400 text-2xl" />,
    MySQL: <SiMysql className="text-blue-400 text-2xl" />,

    Java: <FaJava className="text-red-500 text-2xl" />,
    Python: <FaPython className="text-yellow-400 text-2xl" />,
    Git: <FaGitAlt className="text-orange-500 text-2xl" />,
    GitHub: <FaGithub className="text-white text-2xl" />,

    "Machine Learning": (
      <FaBrain className="text-pink-500 text-2xl" />
    ),
    "Deep Learning": (
      <FaBrain className="text-purple-500 text-2xl" />
    ),
    NumPy: <SiNumpy className="text-blue-300 text-2xl" />,
    Pandas: <SiPandas className="text-purple-400 text-2xl" />,
    "Scikit-Learn": (
      <SiScikitlearn className="text-orange-400 text-2xl" />
    ),
  };

  const categories = [
    {
      title: "Frontend",
      icon: <FaLaptopCode />,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
      ],
    },

    {
      title: "Backend",
      icon: <FaServer />,
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
      ],
    },

    {
      title: "Programming",
      icon: <FaJava />,
      skills: [
        "Java",
        "Python",
        "Git",
        "GitHub",
      ],
    },

    {
      title: "AI / ML",
      icon: <FaBrain />,
      skills: [
        "Machine Learning",
        "Deep Learning",
        "NumPy",
        "Pandas",
        "Scikit-Learn",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-900 text-white flex items-center py-24"
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
            My <span className="text-blue-500">Skills</span>
          </h2>

          <p className="text-slate-400 mt-5 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build modern web
            applications and AI-powered solutions.
          </p>
        </motion.div>

        {/* Skill Cards */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={popIn}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="bg-slate-800 rounded-3xl border border-slate-700 p-7 shadow-xl hover:border-blue-500 hover:shadow-blue-500/20 transition-all duration-300"
            >
              {/* Category Header */}

              <div className="flex items-center gap-3 mb-8">

                <div className="text-blue-500 text-4xl">

                  {category.icon}

                </div>

                <h3 className="text-2xl font-bold">

                  {category.title}

                </h3>

              </div>

              {/* Skills */}

              <div className="space-y-4">

                {category.skills.map((skill) => (

                  <motion.div
                    key={skill}
                    variants={fadeUp}
                    whileHover={{
                      scale: 1.03,
                    }}
                    className="flex items-center gap-4 bg-slate-700 rounded-xl px-4 py-4 hover:bg-slate-600 transition-all duration-300"
                  >

                    {iconMap[skill]}

                    <span className="text-gray-200 font-medium text-lg">
                      {skill}
                    </span>

                  </motion.div>

                ))}

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;