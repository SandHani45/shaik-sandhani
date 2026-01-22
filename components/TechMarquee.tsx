
import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../constants';

const TechMarquee: React.FC = () => {
  // Duplicate the array to create a seamless loop
  const duplicatedTech = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <div className="relative w-full overflow-hidden py-20 border-y border-zinc-900/50 bg-[#070707]">
      {/* Side gradients for soft fade */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#070707] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#070707] to-transparent z-10 pointer-events-none"></div>

      <motion.div 
        className="flex gap-16 items-center whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {duplicatedTech.map((tech, idx) => (
          <div 
            key={`${tech.slug}-${idx}`}
            className="group flex flex-col items-center gap-4 transition-all duration-500"
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
              <img 
                src={`https://cdn.simpleicons.org/${tech.slug}`} 
                alt={tech.name}
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                // Using error handling if icon slug is slightly different
                onError={(e) => {
                   (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${tech.name}`;
                }}
              />
              {/* Subtle Glow on hover */}
              <div 
                className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundColor: `#${tech.color}` }}
              ></div>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
