
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { CV_URL } from '../constants';

const SandhaniSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax and scale effects for the image
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  const springImageY = useSpring(imageY, { stiffness: 100, damping: 30 });

  return (
    <section 
      ref={containerRef}
      id="about-me"
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden py-32 px-6 md:px-12"
    >
      {/* Background Decorative Text */}
      <motion.div 
        style={{ y: textY }}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none select-none overflow-hidden whitespace-nowrap opacity-[0.03]"
      >
        <span className="text-[30vw] font-black tracking-tighter text-white uppercase">
          SANDHANI SANDHANI SANDHANI
        </span>
      </motion.div>

      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center z-10">
        
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10">
            <motion.img 
              style={{ y: springImageY, scale: imageScale }}
              src="/assets/sandhani_shaik.png" 
              alt="Sandhani Sheikh Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-12 left-12 right-12">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5 }}
                 className="flex items-center gap-4"
               >
                 <div className="h-[1px] w-12 bg-white/50" />
                 <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-bold">Based in Dubai, UAE</span>
               </motion.div>
            </div>
          </div>
          
          {/* Floating badge */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 hidden md:flex items-center justify-center"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text className="text-[8px] font-black uppercase tracking-[0.2em] fill-white">
                <textPath xlinkHref="#circlePath">
                  TECHNICAL LEAD • FULL STACK DEVELOPER • AI INNOVATOR • FREELANCE PARTNER •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </motion.div>
        </motion.div>

        {/* Text Side */}
        <div className="flex flex-col gap-12 order-1 lg:order-2">
          <div className="flex flex-col gap-4">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/40 text-xs font-black uppercase tracking-[0.5em]"
            >
              The Individual
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]"
            >
              SANDHANI <br />
              <span className="text-zinc-700 italic">SHEIKH.</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed max-w-xl">
              I am a <span className="text-white">Technical Lead</span> at Emirates NBD and a <span className="text-white">Freelance Consultant</span> with over <span className="text-white">10 years</span> of engineering mastery. I bridge the gap between enterprise-grade systems and agile, high-growth startups.
            </p>
            
            <div className="flex flex-wrap gap-x-12 gap-y-6">
               <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Specialization</span>
                  <span className="text-sm font-bold text-white uppercase tracking-tighter">Enterprise & Web3</span>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Freelance</span>
                  <span className="text-sm font-bold text-white uppercase tracking-tighter">Open for Q3 '26</span>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Experience</span>
                  <span className="text-sm font-bold text-white uppercase tracking-tighter">Senior SSE 2</span>
               </div>
            </div>
          </motion.div>

          <div className="flex flex-wrap items-center gap-6">
            <motion.button 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-zinc-200 transition-colors"
              onClick={() => {
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore My Work
            </motion.button>

            <motion.a 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={CV_URL}
              download="Sandhani_Sheikh_Resume.pdf"
              className="group flex items-center gap-3 w-fit px-10 py-5 border border-zinc-800 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:border-white transition-all"
            >
              Download CV
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SandhaniSection;
