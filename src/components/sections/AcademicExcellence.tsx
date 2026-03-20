import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react';

export default function AcademicExcellence() {
  const achievements = [
    {
      icon: <Trophy className="text-secondary" size={24} />,
      title: "Best Graduating Student",
      description: "Recognized for outstanding academic performance in the Agro Economics department."
    },
    {
      icon: <BookOpen className="text-primary-light" size={24} />,
      title: "Research Presentations",
      description: "Presented findings on agricultural market trends at the annual university symposium."
    },
    {
      icon: <Award className="text-accent" size={24} />,
      title: "Academic Awards",
      description: "Recipient of the Dean's List award for consistent academic excellence."
    }
  ];

  return (
    <section id="education" className="py-24 relative bg-bg-dark border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest text-secondary uppercase mb-4"
          >
            Education & Achievements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            Academic Excellence
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mt-6 rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10" />
            
            <div className="relative pl-20 pb-12">
              <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-primary/20 border border-primary flex items-center justify-center z-10">
                <GraduationCap className="text-primary-light" size={28} />
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors backdrop-blur-sm">
                <span className="text-sm font-medium text-secondary mb-2 block">2014 — 2018</span>
                <h3 className="text-2xl font-serif font-bold mb-2">Bachelor of Science</h3>
                <p className="text-lg text-primary-light font-medium mb-4">Agro Economics</p>
                <p className="text-gray-400 mb-6">Mekdela Amba University</p>
                
                <div className="space-y-4 border-t border-white/10 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Graduation Year</span>
                    <span className="font-medium text-white">2018</span>
                  </div>
                  {/* <div className="flex justify-between items-center">
                    <span className="text-gray-400">Department</span>
                    <span className="font-medium text-white text-right max-w-[200px] truncate" title="Economic Impact of Sustainable Farming Practices">Agro-Economics</span>
                  </div> */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-bg-dark border border-white/10 rounded-2xl p-8 hover:border-secondary/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-serif font-bold mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
            
            {/* Extra Curricular Card */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-br from-primary-dark to-primary border border-primary/30 rounded-2xl p-8 sm:col-span-2 flex items-center justify-between group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="relative z-10">
                <h4 className="text-xl font-serif font-bold mb-2 text-always-white">Extracurricular Activities</h4>
                <p className="text-gray-300 text-sm max-w-md">Active member of the Economics Club and lead designer for university publications.</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary-light relative z-10 group-hover:rotate-12 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
