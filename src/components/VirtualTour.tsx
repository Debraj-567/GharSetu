import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Box, Maximize, Move3d } from 'lucide-react';
import React, { useRef } from 'react';

const VirtualTour = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(event.clientX - centerX);
      y.set(event.clientY - centerY);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-8 mb-12 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-heading font-bold text-slate-900 flex items-center gap-2">
          <Box className="text-primary" size={24} /> Virtual 3D Tour
        </h3>
        <button className="text-sm font-medium text-primary hover:text-secondary flex items-center gap-1">
          <Maximize size={16} /> Fullscreen
        </button>
      </div>

      <div 
        className="perspective-[1000px] w-full h-[400px] md:h-[500px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          ref={cardRef}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="w-full h-full rounded-2xl relative cursor-grab active:cursor-grabbing border border-white/20 shadow-2xl"
        >
          {/* Simulated 3D Background */}
          <div 
            className="absolute inset-0 rounded-2xl bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200")',
              transform: "translateZ(-50px) scale(1.1)" 
            }}
          ></div>

          {/* Foreground Elements to create depth */}
          <div 
            className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"
            style={{ transform: "translateZ(0px)" }}
          ></div>

          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            style={{ transform: "translateZ(80px) translateX(-50%) translateY(-50%)" }}
          >
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-pulse mb-4">
              <Move3d size={40} className="text-white" />
            </div>
            <p className="text-white font-bold tracking-wide shadow-black drop-shadow-md text-lg">Drag to Explore 360°</p>
          </div>

          <div 
            className="absolute bottom-6 left-6 text-white"
            style={{ transform: "translateZ(40px)" }}
          >
            <span className="bg-primary px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide border border-primary/50">Living Room</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VirtualTour;