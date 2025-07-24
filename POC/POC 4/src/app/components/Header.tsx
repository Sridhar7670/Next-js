"use client"; // Add this directive for interactivity

import React from 'react';
import { Code } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-secondary/30 backdrop-blur-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white flex items-center">
          <Code className="text-brand-accent mr-2" size={28} />
          DevInsights
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-brand-text-light hover:text-white transition-colors">Home</a>
          <a href="#" className="text-brand-text-light hover:text-white transition-colors">About</a>
          <a href="#" className="text-brand-text-light hover:text-white transition-colors">Articles</a>
          <a href="#" className="text-brand-text-light hover:text-white transition-colors">Contact</a>
        </div>
        <button className="bg-brand-accent text-brand-primary font-bold py-2 px-4 rounded-lg hover:bg-opacity-80 transition-all">
          Subscribe
        </button>
      </nav>
    </header>
  );
};

export default Header;