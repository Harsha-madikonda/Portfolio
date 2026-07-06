import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { fadeUp } from "../../animations/motion";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certificates" },
    { id: "achievements", label: "Achievements" },
    { id: "why-work-with-me", label: "Why Me" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActive(link.id);
        }
      });
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.nav
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="fixed inset-x-0 top-0 z-50 overflow-x-hidden bg-slate-900/90 backdrop-blur-md border-b border-slate-800"
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl min-w-0 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}

        <a
          href="#home"
          className="flex-shrink-0 text-xl sm:text-2xl font-bold text-blue-400"
        >
          Harshavardhan
        </a>

        {/* Desktop */}

        <ul className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => (

            <li
              key={link.id}
              className="relative"
            >

              <a
                href={`#${link.id}`}
                className={`transition ${
                  active === link.id
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400"
                }`}
              >
                {link.label}
              </a>

              {active === link.id && (

                <motion.div
                  layoutId="activeLink"
                  className="absolute left-0 right-0 -bottom-2 h-[3px] rounded-full bg-blue-500"
                />

              )}

            </li>

          ))}

        </ul>

        {/* Mobile */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-blue-400 transition hover:bg-slate-800 lg:hidden"
        >
          {menuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>

      </div>

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="border-t border-slate-800 bg-slate-900 lg:hidden"
          >

            <ul>

              {navLinks.map((link) => (

                <li key={link.id}>

                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-6 py-4 ${
                      active === link.id
                        ? "bg-slate-800 text-blue-400"
                        : "text-white hover:bg-slate-800 hover:text-blue-400"
                    }`}
                  >
                    {link.label}
                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}

export default Navbar;