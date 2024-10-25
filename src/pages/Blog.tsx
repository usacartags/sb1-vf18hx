import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const blogPosts = [
  {
    title: "The Future of Digital Marketing in 2024",
    excerpt: "Explore the emerging trends that will shape digital marketing strategies in the coming year.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Digital Marketing"
  },
  {
    title: "Building a Strong Brand Identity",
    excerpt: "Learn the key elements that contribute to creating a memorable and impactful brand identity.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Michael Chen",
    date: "March 12, 2024",
    readTime: "4 min read",
    category: "Branding"
  },
  {
    title: "Social Media Strategies That Drive Engagement",
    excerpt: "Discover proven techniques to boost your social media engagement and build a loyal following.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Emma Davis",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Social Media"
  },
  {
    title: "SEO Best Practices for 2024",
    excerpt: "Stay ahead of the competition with these updated SEO strategies for better search rankings.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "David Wilson",
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "SEO"
  },
  {
    title: "The Power of Content Marketing",
    excerpt: "Understanding how content marketing can transform your business and drive growth.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Lisa Thompson",
    date: "March 5, 2024",
    readTime: "5 min read",
    category: "Content Marketing"
  },
  {
    title: "E-commerce Trends to Watch",
    excerpt: "Explore the latest innovations and trends shaping the future of online retail.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: "Ryan Martinez",
    date: "March 3, 2024",
    readTime: "6 min read",
    category: "E-commerce"
  }
];

const Blog = () => {
  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="section-heading mb-6">Our Blog</h1>
        <p className="text-lg text-white/60">
          Insights, strategies, and industry updates from our digital marketing experts.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card group overflow-hidden"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4">
                <span className="text-xs font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-white/80 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-white/60 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-sm text-white/60 mb-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </div>
                <span className="mx-2">•</span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <span className="mx-2">•</span>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
              
              <button className="group inline-flex items-center text-white hover:text-white/80 transition-colors">
                Read More
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-20 text-center"
      >
        <button className="btn btn-primary">
          Load More Articles
        </button>
      </motion.div>
    </div>
  );
};

export default Blog;