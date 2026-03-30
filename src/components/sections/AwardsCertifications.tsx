import { motion } from 'motion/react';
import { FileText, Image, ExternalLink } from 'lucide-react';
import { useState, useRef } from 'react';

// List of certificate files from your image
const certificateFiles = [
  { name: "Android Developer Fundamentals", type: "pdf" },
  { name: "HOW TO STUDY EFFECTIVELY", type: "pdf" },
  { name: "How to take a course (3)", type: "pdf" },
  { name: "Keeping yourself safe online (2)", type: "pdf" },
  { name: "outlook Essentials (2)", type: "pdf" },
  { name: "How to take a course", type: "pdf" },
  { name: "outlook Essentials", type: "pdf" },
  { name: "Presenting using powerpoint", type: "pdf" },
  { name: "Academic Integrity", type: "pdf" },
  { name: "Artificial Intelligence Fundamentals", type: "pdf" },
  { name: "How to Evaluate Resources", type: "pdf" },
  { name: "Set Goals to Manage your time", type: "pdf" },
  { name: "Academic Integrity (2)", type: "pdf" },
  { name: "Analytics with Excel (2)", type: "pdf" },
  { name: "HOW TO STUDY EFFECTIVELY (2)", type: "pdf" },
  { name: "Mesrat Certificate (2)", type: "pdf" },
  { name: "Set Goals to Manage your time (2)", type: "pdf" },
  { name: "Strategies for successful online Learning (2)", type: "pdf" },
  { name: "Android Developer Fundamentals (2)", type: "pdf" },
  { name: "Artificial Intelligence Fundamentals (2)", type: "pdf" },
  { name: "Video Conferencing with Teams (2)", type: "pdf" },
  { name: "How to Evaluate Resources (2)", type: "pdf" }
];

// Function to clean filename for URL
const getFileUrl = (fileName: string, type: string) => {
  const cleanName = fileName.replace(/[()]/g, '').replace(/\s+/g, ' ').trim();
  return `/certificates/${encodeURIComponent(fileName)}.${type}`;
};

// Function to get display name (remove numbers in parentheses)
const getDisplayName = (fileName: string) => {
  return fileName.replace(/\s*\(\d+\)\s*$/, '').trim();
};

export default function CertificateFilesCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const openFile = (file: typeof certificateFiles[0], index: number) => {
    const url = getFileUrl(file.name, file.type);
    if (file.type === 'pdf') {
      window.open(url, '_blank');
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section className="py-24 relative bg-bg-dark/50 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest text-secondary uppercase mb-4"
          >
            My Collection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            Certificates
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mt-6 rounded-full"
          />
          <p className="text-gray-400 mt-6 max-w-2xl">
            Browse through my collection of certificates and achievements
          </p>
        </div>

        {/* Horizontal Scroll Container with Navigation */}
        <div className="relative group">
          {/* Left Navigation Button */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-secondary text-white p-3 rounded-full backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-secondary text-white p-3 rounded-full backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#10b981 '#1f2937'
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

            {certificateFiles.map((file, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onMouseEnter={() => setHoveredId(index)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => openFile(file, index)}
                className="flex-shrink-0 w-72 cursor-pointer"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group/card h-full flex flex-col">
                  {/* Preview Area - Fixed Size */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-900 to-bg-dark flex items-center justify-center border-b border-white/10">
                    {file.type === 'pdf' ? (
                      <div className="text-center">
                        <FileText className="w-16 h-16 text-secondary mx-auto mb-3" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                          <ExternalLink className="w-8 h-8 text-white" />
                        </div>
                        <div className="bg-secondary/20 px-3 py-1 rounded-full text-xs text-secondary font-medium inline-block">
                          PDF Document
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full h-full">
                        <Image className="w-16 h-16 text-primary-light mx-auto mt-12" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                          <ExternalLink className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/20 px-3 py-1 rounded-full text-xs text-primary-light font-medium">
                          Image File
                        </div>
                      </div>
                    )}
                    
                    {/* Hover Overlay */}
                    {hoveredId === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-4"
                      >
                        <span className="text-xs text-white font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          Click to Open
                        </span>
                      </motion.div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-serif font-bold text-white mb-2 line-clamp-2 text-sm leading-tight group-hover/card:text-secondary transition-colors">
                      {getDisplayName(file.name)}
                    </h3>
                    
                    <div className="flex items-center justify-between mt-auto pt-3">
                      <span className="text-xs text-gray-400 uppercase tracking-wider">
                        Certificate
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/card:bg-secondary/20 transition-colors">
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover/card:text-secondary transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Scroll horizontally to see all certificates
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </p>
        </div>
      </div>
    </section>
  );
}
