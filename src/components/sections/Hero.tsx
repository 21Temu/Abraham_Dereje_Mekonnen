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
          <div className="flex flex-col items-start space-y-8">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
              <span className="text-sm font-medium text-gray-300">Available for freelance work</span>
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif font-bold leading-tight"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary">Abriham</span>
              <br />
              <span className="text-gray-400 font-sans text-4xl md:text-6xl font-light">
                I am a{' '}
                <span className="inline-block min-w-[300px] text-white font-serif font-medium relative">
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
              className="text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              Fusing analytical rigor with creative vision. I transform complex economic data into compelling visual stories and design impactful brand identities.
            </motion.p>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#portfolio"
                className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white text-bg-dark font-semibold hover:bg-gray-200 transition-colors"
              >
                <span>Explore My Work</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:border-secondary hover:text-secondary transition-colors"
              >
                <Briefcase size={18} />
                <span>Hire Me</span>
              </a>
            </motion.div> */}

            {/* Social Links */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-6 pt-8 border-t border-white/10 w-full"
            >
              <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">Connect</span>
              <div className="flex items-center gap-4">
                {['Telegram'].map((social) => (
                  <a
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    className="text-gray-400 hover:text-secondary transition-colors text-sm font-medium"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </motion.div> */}
          </div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
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

              {/* Floating Badges */}
              {/* <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 -left-8 bg-bg-dark/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-light">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Expertise</p>
                    <p className="text-sm font-bold text-white">Agro Economics</p>
                  </div>
                </div>
              </motion.div> */}

              {/* <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -right-8 bg-bg-dark/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Creative</p>
                    <p className="text-sm font-bold text-white">Graphic Design</p>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-1"
          >
            <div className="w-1 h-2 bg-secondary rounded-full" />
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
}
