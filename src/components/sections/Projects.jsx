import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import portfolioData from "../../data/portfolioData";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";

import {
  fadeUp,
  staggerContainer,
} from "../../animations/motion";

function Projects() {
  const [filter, setFilter] = useState("All");

  const [selectedProject, setSelectedProject] =
    useState(null);

  const categories = ["All", "MERN", "AI/ML"];

  const filteredProjects =
    filter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (project) => project.category === filter
        );

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 text-white flex items-center py-24"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl font-bold">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <p className="text-slate-400 mt-5 text-lg max-w-3xl mx-auto leading-8">
            Here are some of the projects I've built using the MERN Stack,
            Artificial Intelligence, and Machine Learning to solve real-world
            problems.
          </p>
        </motion.div>

        {/* Filter Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-4 mb-14"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              layout
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border
                ${
                  filter === category
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-slate-900 border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400"
                }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
  key={project.title}
  layout
  initial={{
    opacity: 0,
    y: 80,
    scale: 0.85,
    rotateX: 15,
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
  }}
  exit={{
    opacity: 0,
    y: 40,
    scale: 0.9,
  }}
  transition={{
    type: "spring",
    stiffness: 120,
    damping: 16,
  }}
  whileHover={{
    y: -12,
    scale: 1.025,
    transition: {
      duration: 0.25,
    },
  }}
  className="bg-slate-900
rounded-3xl
overflow-hidden
border
border-slate-800
shadow-xl

hover:border-blue-500
hover:shadow-blue-500/20

transition-all
duration-500"
>

                {/* Image */}

                <div className="overflow-hidden">

                  <motion.img
                  loading="lazy"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover object-top"
                  />

                </div>

                {/* Content */}

                <div className="p-8">

                  {/* Category */}

                  <span className="inline-block mb-4 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-2 rounded-full text-sm">
                    {project.category}
                  </span>

                  <h3 className="text-3xl font-bold mb-5">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 leading-8 mb-8">
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{
                          scale: 1.12,
                          y: -3,
                        }}
                        className="bg-slate-800 border border-slate-700 text-blue-400 px-4 py-2 rounded-full text-sm hover:border-blue-500"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Buttons */}

                  <div className="flex flex-wrap gap-4">

                    <motion.a
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold"
                    >
                      <FaGithub />
                      GitHub
                    </motion.a>

                    <motion.a
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 border border-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </motion.a>

                    <motion.button
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-3 border border-slate-600 hover:border-blue-500 hover:bg-slate-800 px-6 py-3 rounded-xl font-semibold transition"
                    >
                      View Details
                    </motion.button>

                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      <AnimatePresence>

        {selectedProject && (

          <motion.div

            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex justify-center items-center p-5"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            onClick={() =>
              setSelectedProject(null)
            }
          >

            <motion.div

              initial={{
                opacity: 0,
                scale: 0.92,
                y: 40,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                scale: 0.92,
                y: 40,
              }}

              transition={{
                duration: 0.3,
              }}

              onClick={(e) =>
                e.stopPropagation()
              }

              className="bg-slate-900 max-w-5xl w-full rounded-3xl overflow-y-auto max-h-[90vh] border border-slate-700 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-slate-900"

            >

              {/* Header */}

<div className="relative">

  <div className="overflow-hidden rounded-b-3xl bg-slate-800">
  <img
    src={selectedProject.image}
    alt={selectedProject.title}
    className="
w-full
h-[420px]
lg:h-[520px]

object-cover

object-top

transition duration-500 hover:scale-[1.02]"
  />
</div>

  <button
    onClick={() => setSelectedProject(null)}
    className="absolute top-5 right-5 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-red-500 hover:rotate-90 duration-300 flex items-center justify-center transition"
  >
    <FaTimes />
  </button>

</div>

<div className="p-8">

  {/* Category */}

  <span className="inline-block mb-5 bg-blue-500/10 text-blue-400 border border-blue-500/30 px-4 py-2 rounded-full text-sm">

    {selectedProject.category}

  </span>

  {/* Title */}

  <h2 className="text-4xl font-bold mb-6">

    {selectedProject.title}

  </h2>

  {/* Description */}

  <p className="text-slate-300 leading-8 text-lg mb-10">

    {selectedProject.description}

  </p>

  {/* Technologies */}

  <div className="mb-10">

    <h3 className="text-2xl font-semibold mb-5">

      Technologies Used

    </h3>

    <div className="flex flex-wrap gap-3">

      {selectedProject.technologies.map((tech) => (

        <span
          key={tech}
          className="bg-slate-800 border border-slate-700 text-blue-400 px-4 py-2 rounded-full"
        >

          {tech}

        </span>

      ))}

    </div>

  </div>

  {/* Features */}

  <div className="mb-10">

    <h3 className="text-2xl font-semibold mb-5">

      Key Features

    </h3>

    <ul className="space-y-3">

      {selectedProject.features.map((feature) => (

        <li
          key={feature}
          className="flex gap-3 text-slate-300"
        >

          <span className="text-blue-500">

            ✓

          </span>

          {feature}

        </li>

      ))}

    </ul>

  </div>

  {/* Learning */}

  <div className="mb-10">

    <h3 className="text-2xl font-semibold mb-5">

      What I Learned

    </h3>

    <ul className="space-y-3">

      {selectedProject.learning.map((item) => (

        <li
          key={item}
          className="flex gap-3 text-slate-300"
        >

          <span className="text-green-400">

            ➜

          </span>

          {item}

        </li>

      ))}

    </ul>

  </div>

  {/* Buttons */}

  <div className="flex flex-wrap gap-5">

    <motion.a
      whileHover={{
        scale: 1.08,
        y: -2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      href={selectedProject.github}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold transition"
    >

      <FaGithub />

      GitHub

    </motion.a>

    <motion.a
      whileHover={{
        scale: 1.08,
        y: -2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      href={selectedProject.demo}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 border border-blue-500 hover:bg-blue-600 px-7 py-3 rounded-xl font-semibold transition"
    >

      <FaExternalLinkAlt />

      Live Demo

    </motion.a>

  </div>

</div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}

export default Projects;