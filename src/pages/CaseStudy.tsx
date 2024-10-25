import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Award, TrendingUp, Users } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import NotFound from './NotFound';

const CaseStudy = () => {
  const { id } = useParams();
  const study = caseStudies.find(s => s.slug === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!study) return <NotFound />;

  const currentIndex = caseStudies.findIndex(s => s.slug === id);
  const prevStudy = caseStudies[currentIndex - 1];
  const nextStudy = caseStudies[currentIndex + 1];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={study.heroImage}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </div>
        
        <div className="relative max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl text-sm font-medium text-white">
              {study.category}
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            {study.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            {study.description}
          </motion.p>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce mx-auto" />
          </div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <section className="py-24 bg-black">
        <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {study.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-white/5 text-white mb-4">
                  {stat.icon === 'users' && <Users className="h-6 w-6" />}
                  {stat.icon === 'trending' && <TrendingUp className="h-6 w-6" />}
                  {stat.icon === 'award' && <Award className="h-6 w-6" />}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {study.sections.map((section, index) => (
        <motion.section
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`py-24 ${index % 2 === 0 ? 'bg-black' : 'bg-white/[0.02]'}`}
        >
          <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
              <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                <h2 className="text-3xl font-bold text-white mb-6">{section.title}</h2>
                <p className="text-white/60 text-lg leading-relaxed mb-8">{section.content}</p>
                {section.bullets && (
                  <ul className="space-y-4">
                    {section.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-white/60" />
                        <span className="ml-4 text-white/60">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* Navigation */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {prevStudy ? (
              <Link
                to={`/case-study/${prevStudy.slug}`}
                className="group flex items-center text-white/60 hover:text-white transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
                Previous Case Study
              </Link>
            ) : <div />}
            
            {nextStudy && (
              <Link
                to={`/case-study/${nextStudy.slug}`}
                className="group flex items-center text-white/60 hover:text-white transition-colors"
              >
                Next Case Study
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;