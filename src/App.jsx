import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Certifications from "./components/sections/Certifications";
import Achievements from "./components/sections/Achievements";
import WhyWorkWithMe from "./components/sections/WhyWorkWithMe";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/layout/ScrollProgress";
import BackToTop from "./components/layout/BackToTop";
import LoadingScreen from "./components/common/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      {/* SEO */}

      <Helmet>
        <title>
          Madikonda Harshavardhan Rao | Full Stack Developer | AI/ML Engineer
        </title>

        <meta
          name="description"
          content="Portfolio of Madikonda Harshavardhan Rao, a Full Stack MERN Developer and AI/ML Enthusiast. Explore my projects, skills, certifications, experience, and achievements."
        />

        <meta
          name="keywords"
          content="Madikonda Harshavardhan Rao, Harshavardhan Rao, MERN Stack Developer, React Developer, Node.js, Express.js, MongoDB, JavaScript, AI Engineer, Machine Learning, Portfolio"
        />

        <meta
          name="author"
          content="Madikonda Harshavardhan Rao"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        {/* Open Graph */}

        <meta
          property="og:title"
          content="Madikonda Harshavardhan Rao | Portfolio"
        />

        <meta
          property="og:description"
          content="Full Stack MERN Developer & AI/ML Engineer Portfolio."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://your-domain.com"
        />

        <meta
          property="og:image"
          content="/preview.png"
        />

        {/* Twitter */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Madikonda Harshavardhan Rao | Portfolio"
        />

        <meta
          name="twitter:description"
          content="Full Stack MERN Developer & AI/ML Engineer."
        />

        <meta
          name="twitter:image"
          content="/preview.png"
        />
      </Helmet>

      <ScrollProgress />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <Certifications />

      <Achievements />

      <WhyWorkWithMe />

      <Contact />

      <Footer />

      <BackToTop />
    </>
  );
}

export default App;