import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Target, Palette, TrendingUp, Code, Megaphone, LineChart, Globe } from 'lucide-react';

const services = [
  {
    icon: <Share2 className="h-8 w-8" />,
    title: 'Social Media Marketing',
    description: 'Strategic social media management that builds engaged communities and drives meaningful connections.',
    features: ['Content Strategy', 'Community Management', 'Paid Social Campaigns', 'Analytics & Reporting']
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that target your ideal audience and deliver measurable ROI.',
    features: ['SEO Optimization', 'PPC Campaigns', 'Email Marketing', 'Marketing Automation']
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Custom web solutions that combine stunning design with powerful functionality.',
    features: ['Custom Websites', 'E-commerce Solutions', 'Web Applications', 'Mobile-First Design']
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: 'Brand Strategy',
    description: 'Comprehensive brand strategies that position you as a leader in your industry.',
    features: ['Brand Identity', 'Brand Guidelines', 'Visual Design', 'Brand Voice']
  },
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: 'Content Creation',
    description: 'Compelling content that tells your story and resonates with your audience across all platforms.',
    features: ['Copywriting', 'Video Production', 'Photography', 'Graphic Design']
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: 'Analytics & Insights',
    description: 'Deep dive into your data to uncover insights that drive strategic decision-making.',
    features: ['Performance Tracking', 'Competitive Analysis', 'User Behavior', 'ROI Measurement']
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'International Marketing',
    description: 'Global marketing strategies that help you expand into new markets effectively.',
    features: ['Market Research', 'Localization', 'Global SEO', 'Cultural Consulting']
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'Growth Strategy',
    description: 'Comprehensive growth strategies that scale your business sustainably.',
    features: ['Market Analysis', 'Growth Planning', 'KPI Setting', 'Performance Optimization']
  }
];

const Services = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="section-heading mb-6">Our Services</h1>
        <p className="text-lg text-white/60">
          Comprehensive digital solutions tailored to your unique business needs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-6 group hover:border-white/30 transition-all duration-300"
          >
            <div className="inline-flex p-3 rounded-xl bg-white/5 text-white mb-4 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
            <p className="text-white/60 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-white/60 text-sm flex items-center">
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-20 text-center"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
        <button className="btn btn-primary">
          Get Started Today
        </button>
      </motion.div>
    </div>
  );
};

export default Services;