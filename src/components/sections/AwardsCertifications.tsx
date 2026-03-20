import { motion } from 'motion/react';
import { Award, Scroll, Star, ShieldCheck } from 'lucide-react';

const awards = [
  {
    id: 1,
    title: "Dean's List of Academic Excellence",
    issuer: "Mekdela Amba University",
    year: "2023",
    icon: <Award className="text-secondary" size={24} />
  },
  {
    id: 2,
    title: "Best Economic Infographic Design",
    issuer: "National Data Visualization Contest",
    year: "2024",
    icon: <Star className="text-primary-light" size={24} />
  },
  {
    id: 3,
    title: "Advanced Data Analysis with STATA",
    issuer: "Coursera / Johns Hopkins University",
    year: "2023",
    icon: <Scroll className="text-accent" size={24} />
  },
  {
    id: 4,
    title: "Professional Graphic Design Certification",
    issuer: "Adobe Certified Professional",
    year: "2022",
    icon: <ShieldCheck className="text-blue-400" size={24} />
  }
];

export default function AwardsCertifications() {
  return (
    <section id="certifications" className="py-24 relative bg-bg-dark border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest text-secondary uppercase mb-4"
          >
            Recognition
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            Awards & Certifications
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mt-6 rounded-full"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-primary/20 transition-colors" />
              
              <div className="w-14 h-14 rounded-full bg-bg-dark border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                {award.icon}
              </div>
              
              <h3 className="text-lg font-serif font-bold mb-2 text-white group-hover:text-secondary transition-colors">
                {award.title}
              </h3>
              
              <p className="text-sm text-gray-400 mb-4">
                {award.issuer}
              </p>
              
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-gray-300 border border-white/5">
                {award.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
