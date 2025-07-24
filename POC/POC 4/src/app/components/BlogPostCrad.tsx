"use client"; // Add this directive for Framer Motion

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Post } from '../lib/posts';

interface BlogPostCardProps {
  post: Post;
  isFeatured?: boolean;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, isFeatured = false }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  if (isFeatured) {
    return (
      <motion.div 
        className="col-span-1 md:col-span-2 bg-brand-secondary rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row group"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="md:w-1/2">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <p className="text-brand-accent text-sm font-bold mb-2">{post.category}</p>
          <h2 className="text-3xl font-extrabold text-white mb-4">{post.title}</h2>
          <p className="text-brand-text-light mb-6">{post.excerpt}</p>
          <div className="flex items-center text-sm text-brand-text-light mb-6">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>
          <a href="#" className="text-brand-accent font-bold flex items-center group-hover:underline">
            Read More <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={16} />
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="bg-brand-secondary rounded-xl overflow-hidden shadow-lg flex flex-col group"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="overflow-hidden">
        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-brand-accent text-xs font-bold mb-2">{post.category}</p>
        <h3 className="text-xl font-bold text-white mb-3 flex-grow">{post.title}</h3>
        <p className="text-sm text-brand-text-light mb-4">{post.excerpt.substring(0, 100)}...</p>
        <div className="flex items-center text-xs text-brand-text-light mt-auto">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;
