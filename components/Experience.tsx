
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const ExperienceItem: React.FC<{ item: typeof EXPERIENCE[0], index: number }> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group grid grid-cols-1 md:grid-cols-4 py-8 border-b border-zinc-800 items-center hover:bg-zinc-900/50 transition-colors px-4 -mx-4 rounded-xl"
    >
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{item.period}</span>
      </div>
      
      <div className="md:col-span-2 mt-2 md:mt-0">
        <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter group-hover:text-zinc-300 transition-colors">
          {item.company}
        </h4>
        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
          {item.location}
        </span>
      </div>

      <div className="mt-4 md:mt-0 flex justify-between md:justify-end items-center">
        <span className="text-[10px] md:text-xs font-black text-white/40 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full group-hover:border-white/30 group-hover:text-white transition-all">
          {item.role}
        </span>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section className="bg-black py-32 px-6 md:px-12 border-t border-zinc-900">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-4 block">Professional History</span>
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
              EXPERIENCE<span className="text-zinc-800">.</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="flex flex-col items-end">
               <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Total Tenure</span>
               <span className="text-3xl font-black text-white">10+ YEARS</span>
             </div>
          </div>
        </div>

        <div className="flex flex-col">
          {EXPERIENCE.map((item, idx) => (
            <ExperienceItem key={item.company} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
