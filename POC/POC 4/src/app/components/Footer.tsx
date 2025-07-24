import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-secondary mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-text-light">&copy; 2025 DevInsights. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-brand-text-light hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-brand-text-light hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-brand-text-light hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;