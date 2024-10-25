import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Share2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home', tooltip: 'Back to homepage' },
    { path: '/about', label: 'About', tooltip: 'Learn about us' },
    { path: '/services', label: 'Services', tooltip: 'Explore our services' },
    { path: '/portfolio', label: 'Portfolio', tooltip: 'View our work' },
    { path: '/blog', label: 'Blog', tooltip: 'Read our insights' },
    { path: '/contact', label: 'Contact', tooltip: 'Get in touch' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.08]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Link 
            to="/" 
            className="group tooltip"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-white/20 blur-lg group-hover:bg-white/30 transition-colors" />
                <div className="relative bg-white/10 backdrop-blur-sm p-2.5 rounded-xl group-hover:bg-white/20 transition-all duration-300">
                  <Share2 className="h-6 w-6 text-white transform group-hover:rotate-12 transition-transform" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                JointUp
              </span>
            </div>
            <span className="tooltip-content tooltip-bottom">Return to homepage</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(({ path, label, tooltip }) => (
              <div key={path} className="tooltip">
                <Link
                  to={path}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    location.pathname === path 
                      ? 'text-white bg-white/10 backdrop-blur-sm' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {label}
                </Link>
                <span className="tooltip-content tooltip-top">{tooltip}</span>
              </div>
            ))}
            <div className="pl-4 tooltip">
              <button className="btn btn-primary py-2 px-6">
                <span>Get Started</span>
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
              <span className="tooltip-content tooltip-top">Start your journey with us</span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative bg-white/10 backdrop-blur-sm p-2.5 rounded-xl hover:bg-white/20 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute w-full bg-black/90 backdrop-blur-xl border-t border-white/[0.08]"
          >
            <div className="p-4 space-y-1">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    location.pathname === path 
                      ? 'text-white bg-white/10' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-2">
                <button className="w-full btn btn-primary py-2">
                  <span>Get Started</span>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;