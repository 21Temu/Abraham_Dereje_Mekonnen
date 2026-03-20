import { motion } from 'motion/react';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-dark pt-24 pb-12 border-t border-white/5 overflow-hidden">
     
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* <div className="grid lg:grid-cols-4 gap-12 mb-16"> */}
         
          {/* <div className="lg:col-span-1 space-y-6">
            <a href="#home" className="inline-block">
              <span className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary">
                AD
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Fusing analytical rigor with creative vision. Transforming complex economic data into compelling visual stories.
            </p>
            <div className="flex items-center gap-4">
              {['LinkedIn', 'Twitter', 'Behance', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-secondary hover:bg-white/10 transition-all hover:-translate-y-1"
                >
                  <span className="sr-only">{social}</span>
               
                  <div className="w-4 h-4 bg-current rounded-sm" />
                </a>
              ))}
            </div>
          </div> */}

          {/* Quick Links */}
          {/* <div className="lg:col-span-1">
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Education', 'Skills', 'Portfolio', 'Research', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-secondary transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-secondary transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
       {/* <div className="lg:col-span-1">
  <h4 className="text-lg font-serif font-bold mb-6 text-white">
    Contact Info
  </h4>

  <ul className="flex items-center gap-8 whitespace-nowrap  text-gray-400 text-sm font-medium">
    
    <li>
      <a
        href="mailto:mekonnenabraham1993@gmail.com"
        className="group flex items-center gap-2 hover:text-secondary transition-colors"
      >
        <Mail size={16} className="text-primary-light group-hover:text-secondary transition-colors" />
        mekonnenabraham1993@gmail.com
      </a>
    </li>

    <li>
      <a
        href="https://t.me/Cheguvera29"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 hover:text-secondary transition-colors"
      >
        <Phone size={16} className="text-primary-light group-hover:text-secondary transition-colors" />
        @Cheguvera29
      </a>
    </li>

    <li className="flex items-center gap-2">
      <MapPin size={16} className="text-primary-light" />
      Addis Ababa, Ethiopia
    </li>

    <li>
      +251918446669 / +251925350145
    </li>

  </ul>
</div> */}

          {/* Newsletter */}
          {/* <div className="lg:col-span-1">
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for insights on economics and design.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-4 rounded-full bg-gradient-to-r from-primary to-primary-light text-always-white text-sm font-bold hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        {/* </div> */}

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-medium text-center md:text-left">
            © {currentYear} Abriham Dereje — Agro Economist & Creative Designer
          </p>
          
          {/* <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Built with React & Tailwind
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all group"
              aria-label="Back to top"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
