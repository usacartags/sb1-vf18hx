import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

const Portfolio = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="section-heading mb-6">Our Portfolio</h1>
        <p className="text-lg text-white/60">
          Explore our latest work and success stories that showcase our expertise in digital innovation.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card group overflow-hidden"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={study.heroImage}
                alt={study.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/80 text-sm">{study.description}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{study.title}</h3>
                  <p className="text-white/60 text-sm">{study.stats[0].value} {study.stats[0].label}</p>
                </div>
                <span className="text-sm font-medium bg-white/10 px-3 py-1 rounded-full text-white">
                  {study.category}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {study.sections[0].bullets?.slice(0, 3).map((bullet, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded"
                  >
                    {bullet}
                  </span>
                ))}
              </div>
              
              <Link 
                to={`/case-study/${study.slug}`}
                className="group inline-flex items-center text-white hover:text-white/80 transition-colors"
              >
                View Case Study
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-20 text-center"
      >
        <a
          href="#"
          className="inline-flex items-center text-white hover:text-white/80 transition-colors"
        >
          View More Projects
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </motion.div>
    </div>
  );
};

export default Portfolio;