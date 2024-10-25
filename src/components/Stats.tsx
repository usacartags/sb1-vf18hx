import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Star } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: '250+',
    label: 'Clients Served'
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    value: '95%',
    label: 'Client Retention'
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: '$50M+',
    label: 'Revenue Generated'
  },
  {
    icon: <Star className="h-8 w-8" />,
    value: '15+',
    label: 'Industry Awards'
  }
];

const Stats = () => {
  return (
    <section className="bg-black py-32 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)] opacity-20" />
      </div>

      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-8 text-center group hover:bg-white/[0.12] relative"
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/20 via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-white/5 text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {stat.icon}
                </div>
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.1 + 0.2
                  }}
                  className="text-5xl font-bold text-white mb-2 tracking-tight"
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/60 font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;