import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';

// Import sections
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import AcademicExcellence from './components/sections/AcademicExcellence';
import DualExpertise from './components/sections/DualExpertise';
import InteractiveProjects from './components/sections/InteractiveProjects';
import DataVisualization from './components/sections/DataVisualization';
import Testimonials from './components/sections/Testimonials';
import BlogInsights from './components/sections/BlogInsights';
import AwardsCertifications from './components/sections/AwardsCertifications';
import CertificateFilesCarousel from './components/sections/CertificateFilesCarousel'; // 👈 ADD THIS
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the immersive loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-dark"
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-6xl md:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary"
              >
                Abriham Dereje
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-t-2 border-secondary rounded-full w-32 h-32 md:w-48 md:h-48 -m-8 md:-m-12"
              />
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-1 bg-gradient-to-r from-primary to-secondary mt-12 rounded-full"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-sm tracking-widest text-gray-400 uppercase font-sans"
            >
              Loading Experience
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen"
          >
            <Navbar />
            <main>
              <Hero />
              <AcademicExcellence />
              <DualExpertise />
              <InteractiveProjects />
              <Testimonials />
              <AwardsCertifications />
              <CertificateFilesCarousel /> {/* 👈 ADD THIS HERE */}
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
