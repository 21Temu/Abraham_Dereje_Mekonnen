import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Eye, BarChart2, PenTool } from 'lucide-react';
import { cn } from '../../utils/cn';

const projects = [
  {
    id: 1,
    title: "Economic Infographics",
    category: "Data Visualization",
    image: "https://picsum.photos/seed/infographic/800/600",
    skills: ["Economics", "Design"],
    description: "Translating complex economic data into easy-to-understand visual infographics for broader audience engagement.",
    tags: ["Illustrator", "Data Analysis", "Information Design"]
  },
  {
    id: 2,
    title: "Agricultural Campaign Branding",
    category: "Branding",
    image: "https://picsum.photos/seed/agriculture/800/600",
    skills: ["Design", "Agriculture"],
    description: "Complete brand identity for a sustainable farming initiative, combining agricultural messaging with modern design.",
    tags: ["Photoshop", "Logo Design", "Marketing"]
  },
  {
    id: 3,
    title: "Research Poster Design",
    category: "Academic",
    image: "https://picsum.photos/seed/poster/800/600",
    skills: ["Research", "Design"],
    description: "Award-winning academic poster layout presenting findings on microeconomic trends in rural communities.",
    tags: ["InDesign", "Typography", "Academic Writing"]
  },
  {
    id: 4,
    title: "Statistical Data Visualizations",
    category: "Analytics",
    image: "https://picsum.photos/seed/stats/800/600",
    skills: ["Economics", "Analytics"],
    description: "Interactive charts and graphs created from raw STATA/SPSS outputs for a comprehensive economic report.",
    tags: ["SPSS", "Excel", "Chart Design"]
  }
];

export default function InteractiveProjects() {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filters = ['All', 'Data Visualization', 'Branding', 'Academic', 'Analytics'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 relative bg-bg-dark border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest text-secondary uppercase mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            Interactive Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mt-6 rounded-full"
          />
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                filter === f 
                  ? "bg-primary text-always-white border-primary shadow-lg shadow-primary/20" 
                  : "bg-transparent text-gray-400 border-white/10 hover:border-secondary hover:text-white"
              )}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 max-w-sm mx-auto w-full"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/50 to-transparent opacity-80" />
                  
                  {/* Hover Overlay */}
                  <div className={cn(
                    "absolute inset-0 bg-primary/80 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-500",
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  )}>
                    <button className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform">
                      <Eye size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-secondary text-always-white flex items-center justify-center hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 relative z-10 -mt-12">
                  <div className="flex items-center gap-3 mb-4">
                    {project.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5",
                          skill === 'Economics' || skill === 'Analytics' || skill === 'Research' 
                            ? "bg-primary/20 text-primary-light border border-primary/30" 
                            : "bg-accent/20 text-accent border border-accent/30"
                        )}
                      >
                        {skill === 'Economics' || skill === 'Analytics' || skill === 'Research' ? <BarChart2 size={12} /> : <PenTool size={12} />}
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-secondary transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs font-medium text-gray-500 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
