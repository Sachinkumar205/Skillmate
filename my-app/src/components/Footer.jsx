import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-xl font-bold text-white font-poppins">
            SkillMate
          </Link>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link to="/about" className="text-gray-300 hover:text-primary font-inter text-sm">
            About
          </Link>
          <Link to="/privacy" className="text-gray-300 hover:text-primary font-inter text-sm">
            Privacy
          </Link>
          <Link to="/terms" className="text-gray-300 hover:text-primary font-inter text-sm">
            Terms
          </Link>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-primary"><Facebook size={20} /></a>
          <a href="#" className="text-gray-300 hover:text-primary"><Twitter size={20} /></a>
          <a href="#" className="text-gray-300 hover:text-primary"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
