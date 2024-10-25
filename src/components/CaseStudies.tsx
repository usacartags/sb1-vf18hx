import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "E-commerce Growth Strategy",
    description: "300% increase in online sales through targeted digital marketing",
    category: "Digital Marketing"
  },
  {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Brand Transformation",
    description: "Complete rebrand leading to 85% increase in brand recognition",
    category: "Branding"
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Social Media Success",
    description: "2M+ reach achieved through viral campaign strategy",
    category: "Social Media"
  }
];

const CaseStudies = () => {
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
            Case Studies
          </h2>
          <p className="text-xl text-white/60">
            Real results for ambitious brands
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card group overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={case_.image} 
                  alt={case_.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="text-sm font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                    {case_.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-white/90 transition-colors">
                  {case_.title}
                </h3>
                <p className="text-white/60 mb-6 group-hover:text-white/70 transition-colors">
                  {case_.description}
                </p>
                <button className="inline-flex items-center text-white group/btn">
                  <span className="mr-2 group-hover/btn:mr-4 transition-all">View Case Study</span>
                  <ArrowRight className="h-5 w-5 transform group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>
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
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;