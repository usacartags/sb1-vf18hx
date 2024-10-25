import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import CaseStudies from '../components/CaseStudies';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <CaseStudies />
    </main>
  );
};

export default Home;