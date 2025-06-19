import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div>
          <Link to="/" className="flex items-center text-2xl font-bold text-green-400 mb-2">
            <span className="mr-2">🍃</span> TeaExpert
          </Link>
          <p className="text-gray-400">Empowering tea farmers with expert advice and modern solutions.</p>
        </div>
        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-100">Navigation</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-green-400">Home</Link></li>
            <li><Link to="/products" className="hover:text-green-400">Products</Link></li>
            <li><Link to="/experts" className="hover:text-green-400">Experts</Link></li>
            <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-100">Contact</h4>
          <ul className="space-y-2">
            <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> support@teaexpert.com</li>
            <li>123 Tea Lane, Assam, India</li>
          </ul>
        </div>
        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-100">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-400"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-green-400"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-green-400"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8">&copy; {new Date().getFullYear()} TeaExpert. All rights reserved.</div>
    </footer>
  );
};

export default Footer;