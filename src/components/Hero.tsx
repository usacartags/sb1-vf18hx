import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Dynamic background with subtle animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)] opacity-20" />
      </div>

      <div className="relative max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/[0.08] mb-8"
        >
          <span className="text-sm font-medium text-white/90">Redefining Digital Excellence</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-8xl sm:text-9xl font-bold text-white mb-8 tracking-tight"
        >
          Joint
          <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">Up</span>
          <span className="block text-2xl sm:text-3xl font-normal mt-6 tracking-normal text-white/80">
            Where innovation meets design
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="btn btn-primary group">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn btn-secondary">
            Explore Our Work
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[40vh] object-cover rounded-2xl opacity-40"
          >
            <source src="https://www.apple.com/105/media/us/mac-pro/2019/466faaf3-8832-4c68-903f-74f86f0109ca/anim/hero/large.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0"
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce mx-auto" />
          </div>
          <p className="text-sm text-white/60">Scroll to explore</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;