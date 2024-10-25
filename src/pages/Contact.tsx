import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="section-heading mb-6">Get in Touch</h1>
        <p className="text-lg text-white/60">
          Ready to transform your digital presence? Let's start a conversation.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-white mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white">Email Us</h3>
              <p className="text-white/60">contact@jointup.media</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-white mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white">Call Us</h3>
              <p className="text-white/60">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-white mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white">Visit Us</h3>
              <p className="text-white/60">
                123 Digital Avenue<br />
                New York, NY 10011
              </p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-white/5 border border-white/10 text-white rounded-none focus:outline-none focus:border-white"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-white/5 border border-white/10 text-white rounded-none focus:outline-none focus:border-white"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 text-white rounded-none focus:outline-none focus:border-white"
              placeholder="Tell us about your project"
            />
          </div>

          <button
            type="submit"
            className="w-full btn btn-primary"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;