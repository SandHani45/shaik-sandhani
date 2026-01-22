
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax and scaling for the main heading text as the user scrolls
  const yText1 = useTransform(scrollY, [0, 500], [0, -100]);
  const yText2 = useTransform(scrollY, [0, 500], [0, -50]);
  const scaleText = useTransform(scrollY, [0, 500], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Smooth springs for a "premium" feel
  const smoothY1 = useSpring(yText1, { stiffness: 100, damping: 30 });
  const smoothY2 = useSpring(yText2, { stiffness: 100, damping: 30 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4, // Slight delay after loader disappears
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const lineRevealVariants = {
    hidden: { y: "110%" },
    visible: {
      y: 0,
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden bg-[#f3f3f3]">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
        className="w-full max-w-[1600px] z-10"
      >
        {/* Top Meta info */}
        <div className="flex justify-between items-end w-full mb-12 px-2 border-b border-black/5 pb-4">
          <div className="overflow-hidden">
            <motion.span variants={itemVariants} className="block text-black font-black text-xl tracking-tighter">EX-LG</motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span variants={itemVariants} className="block text-black font-black text-xl tracking-tighter">TEN YEARS</motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span variants={itemVariants} className="block text-black font-black text-xl tracking-tighter">EXPERIENCE</motion.span>
          </div>
        </div>

        {/* Main Headings with Clip-Path Reveal */}
        <motion.div 
          style={{ scale: scaleText }}
          className="w-full flex flex-col items-center text-[18vw] md:text-[16vw] font-black leading-[0.75] tracking-tighter text-black uppercase text-center select-none"
        >
          <div className="relative overflow-hidden w-full py-2">
            <motion.h1 
              variants={lineRevealVariants}
              style={{ y: smoothY1 }}
            >
              TECHNICAL
            </motion.h1>
          </div>
          <div className="relative overflow-hidden w-full py-2">
            <motion.h1 
              variants={lineRevealVariants}
              className="text-zinc-400/30 outline-text"
              /* Fix: Combined duplicate style attributes into a single style object to resolve JSX error */
              style={{ 
                WebkitTextStroke: '1px black',
                color: 'transparent',
                y: smoothY2
              }}
            >
              LEAD
            </motion.h1>
          </div>
        </motion.div>

        {/* Bottom controls & status */}
        <div className="flex justify-between items-center w-full mt-24 px-2">
          <motion.div variants={itemVariants} className="flex items-center gap-3 group cursor-pointer text-black">
            <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
               <motion.span 
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-lg font-bold"
              >↓</motion.span>
            </div>
            <span className="text-xs font-black uppercase tracking-widest hidden sm:inline">Scroll to explore</span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col items-end gap-1 text-black">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Current Focus</span>
            <div className="flex items-center gap-3">
              <span className="text-sm font-black uppercase tracking-tighter">MERN • AI • CLOUD</span>
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Background large floating numbers or decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[40vw] font-black text-black z-0"
      >
        26
      </motion.div>
    </section>
  );
};

export default Hero;
