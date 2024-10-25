import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Target, Code, Palette } from 'lucide-react';

const services = [
  {
    icon: <Share2 className="h-8 w-8" />,
    title: 'Social Media Marketing',
    description: 'Build engaged communities that drive meaningful connections.',
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that deliver measurable ROI.',
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Custom solutions that combine design with functionality.',
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: 'Brand Strategy',
    description: 'Position your brand as an industry leader.',
  }
];

const Services = () => {
  return (
    <section className="bg-black py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl sm:text-6xl font-semibold text-white mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-xl text-white/60">
            Innovative solutions for the digital age
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-12 group hover:bg-white/[0.12] hover:scale-[1.02]"
            >
              <div className="text-white mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-white/70 text-lg leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <button className="btn btn-secondary group">
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;