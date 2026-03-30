import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart2, PenTool, ChevronLeft, ChevronRight, X, ArrowLeft } from 'lucide-react';
import { cn } from '../../utils/cn';

const projects = [
  {
    id: 1,
    title: "Economic Infographics",
    category: "Data Visualization",
    image: "https://picsum.photos/seed/infographic/800/600",
    skills: ["Economics", "Design"],
    description: "Translating complex economic data into easy-to-understand visual infographics for broader audience engagement.",
    tags: ["Illustrator", "Data Analysis", "Information Design"],
    fullImage: "https://picsum.photos/seed/infographic/1200/900"
  },
  {
    id: 2,
    title: "Agricultural Campaign Branding",
    category: "Branding",
    image: "https://picsum.photos/seed/agriculture/800/600",
    skills: ["Design", "Agriculture"],
    description: "Complete brand identity for a sustainable farming initiative, combining agricultural messaging with modern design.",
    tags: ["Photoshop", "Logo Design", "Marketing"],
    fullImage: "https://picsum.photos/seed/agriculture/1200/900"
  },
  {
    id: 3,
    title: "Research Poster Design",
    category: "Academic",
    image: "https://picsum.photos/seed/poster/800/600",
    skills: ["Research", "Design"],
    description: "Award-winning academic poster layout presenting findings on microeconomic trends in rural communities.",
    tags: ["InDesign", "Typography", "Academic Writing"],
    fullImage: "https://picsum.photos/seed/poster/1200/900"
  },
  {
    id: 4,
    title: "Statistical Data Visualizations",
    category: "Analytics",
    image: "https://picsum.photos/seed/stats/800/600",
    skills: ["Economics", "Analytics"],
    description: "Interactive charts and graphs created from raw STATA/SPSS outputs for a comprehensive economic report.",
    tags: ["SPSS", "Excel", "Chart Design"],
    fullImage: "https://picsum.photos/seed/stats/1200/900"
  }
];

export default function InteractiveProjects() {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filters = ['All', 'Data Visualization', 'Branding', 'Academic', 'Analytics'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const openModal = (imageUrl: string, title: string) => {
    setSelectedImage({ url: imageUrl, title });
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
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

          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-secondary hover:border-secondary transition-all duration-300 text-gray-400 hover:text-white group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Home</span>
            </button>
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
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer",
                  filter === f 
                    ? "bg-primary text-always-white border-primary shadow-lg shadow-primary/20" 
                    : "bg-transparent text-gray-400 border-white/10 hover:border-secondary hover:text-white"
                )}
              >
                {f}
              </button>
            ))}
          </motion.div>

          {/* Horizontal Scroll Container */}
          <div className="relative group">
            {/* Left Navigation Button */}
            <button
              onClick={() => handleScroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-secondary text-white p-3 rounded-full backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-2 cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={() => handleScroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-secondary text-white p-3 rounded-full backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-2 cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>

            {/* Horizontal Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-8 pb-8 scrollbar-hide"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#10b981 #1f2937'
              }}
            >
              <style>
                {`
                  .scrollbar-hide::-webkit-scrollbar {
                    height: 8px;
                  }
                  .scrollbar-hide::-webkit-scrollbar-track {
                    background: #1f2937;
                    border-radius: 10px;
                  }
                  .scrollbar-hide::-webkit-scrollbar-thumb {
                    background: #10b981;
                    border-radius: 10px;
                  }
                  .scrollbar-hide::-webkit-scrollbar-thumb:hover {
                    background: #34d399;
                  }
                `}
              </style>

              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    key={project.id}
                    className="flex-shrink-0 w-96 group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => openModal(project.fullImage, project.title)}
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
                      
                      {/* Simple Hover Effect - No Buttons */}
                      <div className={cn(
                        "absolute inset-0 bg-primary/60 backdrop-blur-sm flex items-center justify-center transition-all duration-500",
                        hoveredProject === project.id ? "opacity-100" : "opacity-0"
                      )}>
                        <span className="text-white font-medium text-sm tracking-wider px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm">
                          Click to View
                        </span>
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
            </div>
          </div>

          {/* Scroll Hint */}
          <div className="text-center mt-8">
            <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
              <ChevronLeft size={14} />
              Scroll horizontally to see all projects
              <ChevronRight size={14} />
            </p>
          </div>
        </div>
      </section>

      {/* Image Modal - Not Full Screen */}
      <AnimatePresence>
        {modalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-bg-dark rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Back Button */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/50">
                <button
                  onClick={closeModal}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-secondary transition-all duration-300 text-white group"
                >
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm font-medium">Back to Projects</span>
                </button>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-500/20 transition-colors flex items-center justify-center text-gray-400 hover:text-red-400"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Image Container */}
              <div className="p-6 flex items-center justify-center bg-bg-dark/50">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
              </div>

              {/* Image Info */}
              <div className="p-6 border-t border-white/10 bg-black/30">
                <h3 className="text-xl font-serif font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-400 text-sm">Click the back button or press ESC to return to projects</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
