
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectRow: React.FC<{ 
  project: Project; 
  index: number; 
  onHover: (id: string | null) => void 
}> = ({ project, index, onHover }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      className="group relative border-b border-zinc-200 py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-colors duration-500 hover:px-4"
    >
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />

      <div className="relative z-10 flex items-baseline gap-6 md:gap-12">
        <span className="text-[10px] font-black text-zinc-400 group-hover:text-zinc-600 transition-colors">
          {index + 1 < 10 ? `0${index + 1}` : index + 1} /
        </span>
        <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-black group-hover:text-white transition-colors duration-500">
          {project.title}
        </h3>
      </div>

      <div className="relative z-10 flex items-center justify-between md:justify-end gap-12 mt-4 md:mt-0">
        <div className="flex flex-col md:items-end">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-400 transition-colors">
            {project.category}
          </span>
          <span className="text-[10px] font-bold text-zinc-300 group-hover:text-zinc-700 transition-colors">
            Delivered in {project.year}
          </span>
        </div>
        
        <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-500">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectGrid: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  
  // Mouse position tracking for floating image
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const springX = useSpring(0, { stiffness: 150, damping: 20 });
  const springY = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      springX.set(e.clientX - 150); // Offset to center 300px width
      springY.set(e.clientY - 180); // Offset to center 360px height
    }
  };

  const hoveredProject = PROJECTS.find(p => p.id === hoveredId);

  return (
    <section 
      ref={containerRef}
      id="work" 
      onMouseMove={handleMouseMove}
      className="relative px-6 md:px-12 py-32 bg-[#f3f3f3] min-h-screen"
    >
      {/* Floating Preview Image */}
      <AnimatePresence>
        {hoveredId && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            style={{ 
              position: 'fixed',
              left: springX,
              top: springY,
              zIndex: 50,
              pointerEvents: 'none'
            }}
            className="hidden lg:block w-[300px] h-[360px] rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/20"
          >
            <img 
              src={hoveredProject?.image} 
              alt="Preview" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-4 block">Selected Works</span>
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-black uppercase leading-[0.8]">
              PROJECTS<span className="text-zinc-300">.</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-4 border-b border-black pb-2 px-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Total count</span>
              <span className="text-4xl font-black tracking-tighter text-black">
                {PROJECTS.length < 10 ? `0${PROJECTS.length}` : PROJECTS.length}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {PROJECTS.map((project, idx) => (
            <ProjectRow 
              key={project.id} 
              project={project} 
              index={idx}
              onHover={setHoveredId}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <div className="flex flex-col items-center gap-4">
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Want to see more?</span>
             <a 
               href="https://github.com" 
               target="_blank" 
               className="group flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-zinc-800 transition-all"
             >
               View Archive
               <span className="group-hover:translate-x-1 transition-transform">→</span>
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGrid;
