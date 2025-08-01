import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark relative overflow-x-hidden">
        <ParticleBackground />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <section id="home" className="min-h-screen">
            <Hero />
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20">
            <Projects />
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20">
            <Skills />
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-8 text-center border-t border-glass-border">
          <motion.p
            className="text-silver/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            © 2024 Fransisco Ronaldo Lehot. All rights reserved.
          </motion.p>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
