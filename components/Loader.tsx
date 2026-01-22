
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds total
    const interval = 20; // 20ms updates
    const steps = duration / interval;
    const increment = 100 / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      // Add a bit of randomness/easing feel to the speed
      const jump = Math.random() * increment * 2;
      current += jump;
      
      if (current >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(onComplete, 800); // Small pause at 100 before reveal
      } else {
        setProgress(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[1000] bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="relative flex flex-col items-center">
        {/* Progress Number */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-baseline"
        >
          <span className="text-[25vw] md:text-[15vw] font-black tracking-tighter leading-none text-white tabular-nums">
            {progress}
          </span>
          <span className="text-[5vw] md:text-[3vw] font-black text-zinc-600 ml-2">%</span>
        </motion.div>

        {/* Branding Subtext */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">
            Sandhani Sheikh / Portfolio '26
          </span>
          <div className="mt-4 w-48 h-[1px] bg-zinc-900 relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-white origin-left"
              style={{ scaleX: progress / 100 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-12 left-12 text-white/10 font-mono text-[10px] uppercase tracking-widest hidden md:block">
        System Initializing...
      </div>
      <div className="absolute bottom-12 right-12 text-white/10 font-mono text-[10px] uppercase tracking-widest hidden md:block">
        Dubai, UAE (25.12° N, 55.27° E)
      </div>
    </motion.div>
  );
};

export default Loader;
