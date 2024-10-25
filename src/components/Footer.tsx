import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Share2 className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">JointUpMedia</span>
            </Link>
            <p className="text-white/60">
              Elevating brands through innovative digital solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/60 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-white/60 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-white/60 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-white/60">
              <li>contact@jointup.media</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Digital Avenue<br />New York, NY 10011</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} JointUpMedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;