import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Briefcase, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const titles = [
    "Agro Economist",
    "Graphics Designer",
    "Data Analyst",
    "Creative Thinker"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full border-dashed" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-start space-y-8 order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary">Abriham</span>
              <br />
              <span className="text-gray-400 font-sans text-2xl md:text-4xl lg:text-6xl font-light">
                I am a{' '}
                <span className="inline-block min-w-[200px] md:min-w-[300px] text-white font-serif font-medium relative">
                  <motion.span
                    key={textIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0"
                  >
                    {titles[textIndex]}
                  </motion.span>
                  <span className="invisible">Graphics Designer</span>
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              Fusing analytical rigor with creative vision. I transform complex economic data into compelling visual stories and design impactful brand identities.
            </motion.p>
          </div>

          {/* Image/Visual Content - Now visible on all screen sizes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] mx-auto aspect-square">
              {/* Decorative Frame */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-secondary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-primary-dark to-primary border border-white/10 p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 relative group">
                  <img
                    src="/abre.JPG"
                    alt="Abriham Dereje"
                    className="w-full h-full object-cover object-[50%_20%] group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://picsum.photos/seed/abriham/800/800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent mix-blend-multiply" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
