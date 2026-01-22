
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import SplitText from './SplitText';

const Footer: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <footer ref={containerRef} id="contact" className="px-6 md:px-12 py-24 md:py-32 bg-[#050505] border-t border-zinc-900">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-0">
        <div className="flex flex-col w-full max-w-4xl">
          <div className="text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase mb-12 text-white">
            <SplitText text="LET'S BUILD" progress={scrollYProgress} />
            <SplitText text="THE NEXT BIG" progress={scrollYProgress} invert />
            <SplitText text="THING TOGETHER." progress={scrollYProgress} />
          </div>
          
          <a href="mailto:sandhanifullstack@gmail.com" className="text-2xl md:text-4xl font-light text-white hover:underline underline-offset-8 transition-all duration-300">
            sandhanifullstack@gmail.com
          </a>
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-12">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 text-right">
            {SOCIAL_LINKS.map((link) => (
              <motion.a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: -10 }}
                className="text-[11px] uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
              >
                {link.name} ↗
              </motion.a>
            ))}
          </div>
          
          <div className="text-[10px] uppercase tracking-[0.4em] text-zinc-700 mt-12">
            © 2026 SANDHANI STUDIO — DUBAI, UAE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
