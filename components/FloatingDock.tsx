
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { id: 'home', title: 'Home', icon: 'H' },
  { id: 'work', title: 'Work', icon: 'W' },
  { id: 'about', title: 'About', icon: 'A' },
  { id: 'contact', title: 'Contact', icon: 'C' },
];

const FloatingDock: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id === 'home' ? 'root' : id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[150] flex flex-col items-center w-full px-4 pointer-events-none">
      <motion.div
        layout
        initial={false}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 35
        }}
        className={`
          relative pointer-events-auto bg-[#0A0A0A] border border-zinc-800/80 
          shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden
          ${isExpanded ? 'rounded-[2.5rem] w-full max-w-[380px]' : 'rounded-full w-full max-w-[380px]'}
        `}
      >
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            /* COLLAPSED STATE */
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="flex items-center p-1.5 cursor-pointer group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-900 flex-shrink-0 flex items-center justify-center overflow-hidden border border-zinc-800">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sandhani" 
                  alt="Avatar" 
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </div>
              
              <div className="flex flex-col flex-1 px-4 overflow-hidden">
                <span className="text-[10px] font-black uppercase tracking-widest text-white truncate">Sandhani Sheikh</span>
                <div className="relative h-3 overflow-hidden">
                  <motion.p 
                    animate={{ x: [0, -600] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="text-[8px] text-zinc-500 uppercase font-bold tracking-tighter whitespace-nowrap"
                  >
                    TECHNICAL LEAD, FULL STACK DEVELOPER, AI/ML SPECIALIST, NESTJS EXPERT, EX-LG —&nbsp;
                    TECHNICAL LEAD, FULL STACK DEVELOPER, AI/ML SPECIALIST, NESTJS EXPERT, EX-LG —&nbsp;
                  </motion.p>
                </div>
              </div>

              <div className="pr-6 flex flex-col gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="w-5 h-0.5 bg-white rounded-full"></div>
                <div className="w-5 h-0.5 bg-white rounded-full"></div>
              </div>
            </motion.div>
          ) : (
            /* EXPANDED STATE */
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col p-6"
            >
              {/* Profile Header within Menu */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <motion.div 
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                    className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden shadow-2xl p-1"
                  >
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sandhani" 
                      alt="Avatar Large" 
                      className="w-full h-full"
                    />
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Sandhani Sheikh</span>
                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Technical Lead @ Emirates NBD</span>
                  </div>
                </div>
                
                <button 
                  onClick={toggleMenu}
                  className="w-10 h-10 flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 rounded-full text-zinc-500 hover:text-white transition-all border border-zinc-800"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              {/* Navigation Items */}
              <div className="space-y-1">
                {menuItems.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (idx * 0.05) }}
                    whileHover={{ x: 8, backgroundColor: 'rgba(255,255,255,0.03)' }}
                    onClick={() => scrollTo(item.id)}
                    className="w-full flex items-center gap-4 p-3.5 rounded-2xl transition-all group text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] text-zinc-600 font-black group-hover:text-white group-hover:border-zinc-500 transition-all">
                      {item.icon}
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-zinc-500 group-hover:text-white transition-colors uppercase">
                      {item.title}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Socials / Footer in Menu */}
              <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[7px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-1">Location</span>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-zinc-400">Dubai, UAE</span>
                </div>
                <div className="flex gap-4">
                  <motion.a whileHover={{ y: -2 }} href="#" className="text-[9px] font-black uppercase tracking-widest text-zinc-500 hover:text-white">GH</motion.a>
                  <motion.a whileHover={{ y: -2 }} href="#" className="text-[9px] font-black uppercase tracking-widest text-zinc-500 hover:text-white">LI</motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FloatingDock;
