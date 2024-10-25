import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="section-heading mb-6">About JointUpMedia</h1>
        <p className="text-lg text-white/60">
          We're a team of digital innovators, creative thinkers, and strategic problem solvers.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="Our Team"
            className="w-full h-[400px] object-cover"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-white">Our Story</h2>
          <p className="text-white/60">
            Founded in 2020, JointUpMedia was born from a vision to bridge the gap between traditional marketing and the digital revolution. We've since grown into a full-service digital agency, helping brands across the globe achieve their marketing goals.
          </p>
          <p className="text-white/60">
            Our approach combines data-driven insights with creative excellence, ensuring every strategy we develop is both innovative and results-focused.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          { icon: <Users />, title: 'Our Team', text: 'Diverse experts united by creativity' },
          { icon: <Target />, title: 'Our Mission', text: 'Driving digital excellence forward' },
          { icon: <Award />, title: 'Our Values', text: 'Innovation, integrity, results' }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * (index + 3) }}
            className="glass-card p-6 text-center"
          >
            <div className="inline-flex p-3 rounded-full bg-white/5 text-white mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-white/60">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;