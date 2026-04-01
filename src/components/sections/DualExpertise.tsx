import { motion } from 'motion/react';
import { LineChart, PenTool, Database, Layout, FileText, Image as ImageIcon } from 'lucide-react';

const economicsSkills = [
  { name: 'Agricultural Economics', value: 100 },
  { name: 'Microeconomics', value: 100 },
  { name: 'Macroeconomics', value: 100 },
  { name: 'Econometrics', value: 100 },
  { name: 'Research Methodology', value: 100 },
  { name: 'Data Analysis (SPSS/STATA)', value: 100 },
];

const designSkills = [
  { name: 'Adobe Photoshop', value: 100 },
  { name: 'Adobe Illustrator', value: 100 },
  { name: 'Adobe InDesign', value: 100 },
  { name: 'Figma', value: 100 },
  { name: 'Canva', value: 100 },
];

export default function DualExpertise() {
  return (
    <section id="skills" className="py-16 relative bg-bg-dark border-t border-white/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest text-secondary uppercase mb-4"
          >
            My Skills
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-bold"
          >
            Dual Expertise Showcase
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mt-6 rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Economics & Research */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <LineChart size={48} className="text-primary-light" />
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                <Database className="text-primary-light" size={20} />
              </div>
              <h3 className="text-xl font-serif font-bold">Economics & Research</h3>
            </div>

            <div className="space-y-4">
              {economicsSkills.map((skill, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm font-bold text-primary-light">{skill.value}%</span>
                  </div>
                  <div className="h-2 bg-bg-dark rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-l from-white/20 to-transparent" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-lg font-serif font-bold mb-4 flex items-center gap-2">
                <FileText size={18} className="text-secondary" />
                Research Work
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                  <span>Quantitative analysis of agricultural market trends</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                  <span>Survey methodology and data collection strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                  <span>Statistical modeling using SPSS and STATA</span>
                </li>
              </ul>
            </div> */}
          </motion.div>

          {/* Graphic Design */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <PenTool size={48} className="text-accent" />
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center border border-accent/30">
                <Layout className="text-accent" size={20} />
              </div>
              <h3 className="text-xl font-serif font-bold">Graphic Design</h3>
            </div>

            <div className="space-y-4">
              {designSkills.map((skill, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm font-bold text-accent">{skill.value}%</span>
                  </div>
                  <div className="h-2 bg-bg-dark rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-accent to-purple-400 rounded-full relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-l from-white/20 to-transparent" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-lg font-serif font-bold mb-4 flex items-center gap-2">
                <ImageIcon size={18} className="text-secondary" />
                Creative Focus
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                  <span>Data visualization and economic infographics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                  <span>Brand identity and logo design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                  <span>Academic posters and presentation layouts</span>
                </li>
              </ul>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
