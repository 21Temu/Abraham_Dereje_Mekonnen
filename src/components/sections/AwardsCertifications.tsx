import { motion, AnimatePresence } from 'motion/react';
import { FileText, ExternalLink, X, Download, AlertCircle, RefreshCw } from 'lucide-react';
import { useState, useRef } from 'react';

// List of certificate files - MATCHING YOUR ACTUAL FOLDER NAMES
const certificateFiles = [
  { name: "Android Developer Fundamentals", type: "pdf", displayName: "Android Developer Fundamentals" },
  { name: "HOW TO STUDY EFFECTIVELY", type: "pdf", displayName: "HOW TO STUDY EFFECTIVELY" },
  { name: "How to take a course (3)", type: "pdf", displayName: "How to take a course" },
  { name: "Kepping yourself safe online (2)", type: "pdf", displayName: "Keeping yourself safe online" }, // Fixed spelling
  { name: "outlook Essentials (2)", type: "pdf", displayName: "outlook Essentials" },
  { name: "How to take a course", type: "pdf", displayName: "How to take a course" },
  { name: "outlook Essentials", type: "pdf", displayName: "outlook Essentials" },
  { name: "Presenting using powerpoint", type: "pdf", displayName: "Presenting using powerpoint" },
  { name: "Acadamic Integrity", type: "pdf", displayName: "Academic Integrity" },
  { name: "Artificial Intelligence Fundamentals", type: "pdf", displayName: "Artificial Intelligence Fundamentals" },
  { name: "How to Evaluate Resources", type: "pdf", displayName: "How to Evaluate Resources" },
  { name: "Set Goals to Manage your time", type: "pdf", displayName: "Set Goals to Manage your time" },
  { name: "Acadamic Integrity (2)", type: "pdf", displayName: "Academic Integrity" },
  { name: "Analytices with Excel (2)", type: "pdf", displayName: "Analytics with Excel" },
  { name: "HOW TO STUDY EFFECTIVELY (2)", type: "pdf", displayName: "HOW TO STUDY EFFECTIVELY" },
  { name: "Mesrat Ceritefcate (2)", type: "image", displayName: "Mesrat Certificate" }, // This is an image
  { name: "Set Goals to Manage your time (2)", type: "pdf", displayName: "Set Goals to Manage your time" },
  { name: "Strategies for successful online Learning (2)", type: "pdf", displayName: "Strategies for successful online Learning" },
  { name: "Android Developer Fundamentals (2)", type: "pdf", displayName: "Android Developer Fundamentals" },
  { name: "Artificial Intelligence Fundamentals (2)", type: "pdf", displayName: "Artificial Intelligence Fundamentals" },
  { name: "Vedio Conferencing with Teams (2)", type: "pdf", displayName: "Video Conferencing with Teams" }, // Fixed spelling in code
  { name: "How to Evaluate Resources (2)", type: "pdf", displayName: "How to Evaluate Resources" }
];

// Function to get file URL
const getFileUrl = (fileName: string, type: string) => {
  const extension = type === 'image' ? 'jpg' : 'pdf';
  const fileWithExtension = `${fileName}.${extension}`;
  return `/certificates/${encodeURIComponent(fileWithExtension)}`;
};

// Function to get display name
const getDisplayName = (file: typeof certificateFiles[0]) => {
  return file.displayName;
};

export default function CertificateFilesCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<{ name: string; url: string; type: string } | null>(null);
  const [fileError, setFileError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const openModal = async (file: typeof certificateFiles[0]) => {
    const url = getFileUrl(file.name, file.type);
    const fullUrl = `${window.location.origin}${url}`;
    
    setIsLoading(true);
    setFileError(false);
    
    setSelectedFile({ 
      name: getDisplayName(file), 
      url: fullUrl,
      type: file.type 
    });
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
    setIsLoading(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFile(null);
    setFileError(false);
    setIsLoading(false);
    document.body.style.overflow = 'unset';
  };

  const handleIframeError = () => {
    setFileError(true);
  };

  return (
    <>
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
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-secondary text-white p-3 rounded-full backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-2 cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={() => handleScroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-secondary text-white p-3 rounded-full backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-2 cursor-pointer"
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
                  onClick={() => openModal(file)}
                  className="flex-shrink-0 w-80 cursor-pointer"
                >
                  <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group/card h-full flex flex-col">
                    {/* Preview Area */}
                    <div className="relative h-64 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center border-b border-white/10 overflow-hidden">
                      {/* Decorative PDF Background */}
                      <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <pattern id="grid" patternUnits="userSpaceOnUse" width="10" height="10">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                          </pattern>
                          <rect width="100" height="100" fill="url(#grid)" />
                        </svg>
                      </div>
                      
                      {/* Icon with Animation */}
                      <div className="relative z-10 text-center">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {file.type === 'image' ? (
                            <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <span className="text-3xl font-bold text-primary-light">IMG</span>
                            </div>
                          ) : (
                            <FileText className="w-20 h-20 text-secondary mx-auto mb-4" strokeWidth={1.5} />
                          )}
                        </motion.div>
                        <div className={`px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm ${
                          file.type === 'image' 
                            ? 'bg-primary/20 text-primary-light' 
                            : 'bg-secondary/20 text-secondary'
                        }`}>
                          {file.type === 'image' ? 'Image Certificate' : 'PDF Document'}
                        </div>
                        <p className="text-gray-500 text-xs mt-3">Click to view full certificate</p>
                      </div>
                      
                      {/* Corner Accents */}
                      <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-secondary/30 rounded-tl-lg" />
                      <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-secondary/30 rounded-br-lg" />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-serif font-bold text-white mb-2 line-clamp-2 text-base leading-tight group-hover/card:text-secondary transition-colors">
                        {getDisplayName(file)}
                      </h3>
                      
                      <div className="flex items-center justify-between mt-auto pt-4">
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

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && selectedFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-bg-dark rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/50">
                <button
                  onClick={closeModal}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-secondary transition-all duration-300 text-white group"
                >
                  <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span className="text-sm font-medium">Back to Certificates</span>
                </button>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-500/20 transition-colors flex items-center justify-center text-gray-400 hover:text-red-400"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Viewer */}
              <div className="p-6 flex items-center justify-center bg-bg-dark/50 min-h-[60vh]">
                {isLoading ? (
                  <div className="text-center">
                    <RefreshCw className="w-12 h-12 text-secondary animate-spin mx-auto mb-4" />
                    <p className="text-gray-400">Loading certificate...</p>
                  </div>
                ) : fileError ? (
                  <div className="text-center max-w-md">
                    <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Cannot Load File</h4>
                    <p className="text-gray-400 mb-6">
                      The file couldn't be loaded. You can download it instead.
                    </p>
                    <a
                      href={selectedFile.url}
                      download
                      className="px-6 py-2 rounded-lg bg-secondary text-white hover:bg-secondary/80 transition-colors"
                    >
                      <Download className="w-4 h-4 inline mr-2" />
                      Download File
                    </a>
                  </div>
                ) : selectedFile.type === 'image' ? (
                  <img
                    src={selectedFile.url}
                    alt={selectedFile.name}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg"
                    onError={handleIframeError}
                  />
                ) : (
                  <iframe
                    src={selectedFile.url}
                    title={selectedFile.name}
                    className="w-full h-[70vh] rounded-lg"
                    style={{ minHeight: '500px', border: 'none' }}
                    onError={handleIframeError}
                  />
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-white/10 bg-black/30">
                <h3 className="text-lg font-serif font-bold text-white text-center">
                  {selectedFile.name}
                </h3>
                <a
                  href={selectedFile.url}
                  download
                  className="text-center block mt-2 text-sm text-secondary hover:text-secondary/80 transition-colors"
                >
                  <Download className="w-4 h-4 inline mr-1" />
                  Download {selectedFile.type === 'image' ? 'Image' : 'PDF'}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
