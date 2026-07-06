import portfolioData from "../../data/portfolioData";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import { motion } from "framer-motion";
import {
  fadeUp,
  popIn,
  staggerContainer,
} from "../../animations/motion";

function Contact() {
  return (
    <section
      id="contact"
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
            Get In <span className="text-blue-500">Touch</span>
          </h2>

          <p className="mt-5 text-lg text-slate-400 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities,
            collaborating on exciting projects, or connecting with
            fellow developers.
          </p>
        </motion.div>

        {/* Contact Cards */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >

          {/* Email */}

          <motion.div
            variants={popIn}
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-3xl border border-slate-700 p-8 hover:border-blue-500 transition-all duration-300"
          >
            <FaEnvelope className="text-4xl text-blue-500 mb-5" />

            <h3 className="text-2xl font-bold mb-3">
              Email
            </h3>

            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="text-slate-400 hover:text-blue-400 break-all"
            >
              {portfolioData.contact.email}
            </a>
          </motion.div>

          {/* Phone */}

          <motion.div
            variants={popIn}
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-3xl border border-slate-700 p-8 hover:border-blue-500 transition-all duration-300"
          >
            <FaPhoneAlt className="text-4xl text-green-400 mb-5" />

            <h3 className="text-2xl font-bold mb-3">
              Phone
            </h3>

            <a
              href={`tel:${portfolioData.contact.phone}`}
              className="text-slate-400 hover:text-blue-400"
            >
              {portfolioData.contact.phone}
            </a>
          </motion.div>

          {/* Location */}

          <motion.div
            variants={popIn}
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-3xl border border-slate-700 p-8 hover:border-blue-500 transition-all duration-300"
          >
            <FaMapMarkerAlt className="text-4xl text-red-400 mb-5" />

            <h3 className="text-2xl font-bold mb-3">
              Location
            </h3>

            <p className="text-slate-400">
              {portfolioData.contact.location}
            </p>
          </motion.div>

          {/* Resume */}

          <motion.div
            variants={popIn}
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-3xl border border-slate-700 p-8 hover:border-blue-500 transition-all duration-300"
          >
            <FaDownload className="text-4xl text-yellow-400 mb-5" />

            <h3 className="text-2xl font-bold mb-3">
              Resume
            </h3>

            <a
              href={portfolioData.contact.resume}
              download
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              <FaDownload />
              Download Resume
            </a>
          </motion.div>

        </motion.div>

        {/* Social */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-8">
            Connect With Me
          </h3>

          <div className="flex justify-center gap-8">

            <motion.a
              whileHover={{ scale: 1.25, rotate: 8 }}
              href={portfolioData.github}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-3xl hover:bg-blue-600 transition"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.25, rotate: 8 }}
              href={portfolioData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-3xl hover:bg-blue-600 transition"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.25, rotate: 8 }}
              href={portfolioData.leetcode}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-3xl hover:bg-yellow-500 transition"
            >
              <SiLeetcode />
            </motion.a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;