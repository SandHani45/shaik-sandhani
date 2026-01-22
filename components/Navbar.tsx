
import React from 'react';
import { motion } from 'framer-motion';
import { CV_URL } from '../constants';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-[120] flex justify-between items-start px-6 py-8 md:px-12 pointer-events-none"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-24 pointer-events-auto">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-black md:text-white">Dubai Based</span>
          <span className="text-sm text-zinc-500 font-medium">Working Globally</span>
        </div>
        
        <div className="hidden lg:flex flex-col">
          <span className="text-sm font-bold text-white">Engineering at</span>
          <span className="text-sm text-zinc-500 font-medium">Emirates NBD</span>
        </div>

        <div className="hidden md:flex flex-col">
          <span className="text-sm font-bold text-white">Freelance Availability</span>
          <span className="text-sm text-zinc-500 font-medium">September 2026</span>
        </div>
      </div>

      <div className="flex items-center gap-4 pointer-events-auto">
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={CV_URL}
          download="Sandhani_Sheikh_Resume.pdf"
          className="hidden md:flex bg-transparent border border-zinc-700/50 text-white md:text-zinc-400 px-6 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest hover:border-white hover:text-white transition-all duration-300"
        >
          Resume
        </motion.a>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = 'mailto:sandhanifullstack@gmail.com'}
          className="bg-[#121212] border border-zinc-800 text-white px-8 py-4 rounded-full font-bold text-sm tracking-tight hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
        >
          Get in touch
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
