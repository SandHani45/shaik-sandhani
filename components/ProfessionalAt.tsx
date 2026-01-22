
import React from 'react';
import { motion } from 'framer-motion';

const ProfessionalAt: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-zinc-200 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-8"
        >
          Professional At
        </motion.h3>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 border border-zinc-100"
        >
          {/* Main Large Grid Items */}
          <motion.div 
            variants={itemVariants}
            className="aspect-video md:aspect-square lg:aspect-[4/3] bg-black flex items-center justify-center p-12 border-r border-zinc-100 relative group overflow-hidden"
          >
            <img 
              src="https://cdn.simpleicons.org/react/white" 
              alt="React" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="aspect-video md:aspect-square lg:aspect-[4/3] bg-white flex items-center justify-center p-12 border-r border-zinc-100 group overflow-hidden"
          >
            <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-700 ease-out">
              <img src="https://cdn.simpleicons.org/nextdotjs/black" alt="Next.js" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
              <span className="text-3xl md:text-5xl font-black tracking-tighter">.js</span>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="aspect-video md:aspect-square lg:aspect-[4/3] bg-white flex items-center justify-center p-12 group overflow-hidden"
          >
            <div className="w-20 h-20 md:w-28 md:h-28 bg-black flex items-center justify-center rounded-sm group-hover:bg-blue-600 transition-colors duration-500">
               <span className="text-white text-3xl md:text-5xl font-black">TS</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Small Bottom Row Logos */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 border-x border-b border-zinc-100 bg-white"
        >
          {[
            { name: 'GSAP', slug: 'greensock' },
            { name: 'Node.js', slug: 'nodedotjs' },
            { name: 'Tailwind', slug: 'tailwindcss' },
            { name: 'Clerk', slug: 'clerk' },
            { name: 'Raycast', slug: 'raycast' },
            { name: 'Vercel', slug: 'vercel' },
            { name: 'Figma', slug: 'figma' }
          ].map((brand, idx) => (
            <motion.div 
              key={brand.slug}
              variants={itemVariants}
              className={`aspect-square flex items-center justify-center p-10 border-r border-zinc-100 last:border-r-0 hover:bg-zinc-50 transition-colors duration-300`}
            >
              <img 
                src={`https://cdn.simpleicons.org/${brand.slug}/black`} 
                alt={brand.name} 
                className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalAt;
