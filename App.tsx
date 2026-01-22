
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import FloatingDock from './components/FloatingDock';
import Loader from './components/Loader';
import TechMarquee from './components/TechMarquee';
import ProfessionalAt from './components/ProfessionalAt';
import SandhaniSection from './components/SandhaniSection';
import Experience from './components/Experience';
import useSEO from './hooks/useSEO';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  // SEO Hook
  useSEO({
    title: 'Sandhani Sheikh | Technical Lead & Full Stack Developer | Dubai UAE',
    description: 'Technical Lead at Emirates NBD with 10+ years experience in full-stack development, AI/ML integration, and enterprise systems. Specializing in NestJS, React, AWS, and banking solutions. Available for freelance partnerships Q3 2026.',
    keywords: 'Sandhani Sheikh, Technical Lead, Full Stack Developer, Dubai, UAE, NestJS, React, TypeScript, AI/ML, Banking Software, Emirates NBD, Freelance Developer, Web3, Enterprise Architecture, Cloud Solutions, AWS, Azure',
    image: 'https://sandhani-sheikh.dev/sandhani_shaik.png',
    url: 'https://sandhani-sheikh.dev/'
  });
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Ensure scroll is locked during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <main className="relative selection:bg-black selection:text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Top progress indicator */}
          <motion.div 
            className="fixed top-0 left-0 right-0 h-1 bg-black origin-[0%] z-[200]" 
            style={{ scaleX }} 
          />
          
          <Navbar />
          
          <div id="home">
            <Hero />
          </div>

          <ProfessionalAt />

          <SandhaniSection />

          <Experience />
          
          <div id="work">
            <ProjectGrid />
          </div>
          
          <section className="bg-[#050505] text-white">
            <section id="about" className="px-6 md:px-12 pt-32 pb-16">
              <div className="flex flex-col md:flex-row gap-24 items-start mb-32">
                <div className="w-full md:w-1/2">
                  <h3 className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-12">The Philosophy</h3>
                  <p className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter uppercase">
                    I CREATE INNOVATIVE AND IMPACTFUL SOLUTIONS THAT ENHANCE <span className="text-zinc-700 italic">USER SATISFACTION</span>.
                  </p>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-8 text-zinc-400 text-sm leading-loose">
                  <p className="text-xl font-medium text-white leading-relaxed">
                    With over 10 years of experience and a B.Tech in CS, I've led development at LG Soft and Emirates NBD. My freelance track record includes transforming visionary ideas into scalable digital products for global clients.
                  </p>
                  <p className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">
                    Mastering enterprise complexity while maintaining freelance agility.
                  </p>
                </div>
              </div>
            </section>

            {/* Premium Tech Marquee */}
            <TechMarquee />

            <section className="px-6 md:px-12 py-32 border-t border-zinc-900/50">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="p-8 border border-zinc-900 rounded-[2rem] hover:bg-zinc-900/30 transition-all group">
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em] mb-4 block">01 / Backend</span>
                    <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">Scalable Systems</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed uppercase tracking-widest">Architecting robust NestJS and Python backends with a focus on high-throughput payment gateways and real-time processing.</p>
                  </div>
                  <div className="p-8 border border-zinc-900 rounded-[2rem] hover:bg-zinc-900/30 transition-all group">
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em] mb-4 block">02 / Frontend</span>
                    <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">Crafted UIs</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed uppercase tracking-widest">Building immersive Next.js experiences with Framer Motion, focusing on performance, aesthetics, and user-centric design patterns.</p>
                  </div>
                  <div className="p-8 border border-zinc-900 rounded-[2rem] hover:bg-zinc-900/30 transition-all group">
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em] mb-4 block">03 / AI & ML</span>
                    <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">Intelligent Automation</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed uppercase tracking-widest">Integrating Gemini and custom LLM workflows to automate enterprise pipelines and create next-gen intelligent assistants.</p>
                  </div>
               </div>
            </section>

            <Footer />
          </section>

          <ChatWidget />
          <FloatingDock />
        </motion.div>
      </main>
    </>
  );
};

export default App;
