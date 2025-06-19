import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Products', to: '/products' },
  { name: 'Experts', to: '/experts' },
  { name: 'Contact', to: '/contact' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold text-green-600">
          <span className="mr-2">🍃</span> TeaExpert
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.to}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link
            to="/experts"
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:from-green-600 hover:to-green-700 transition-all duration-300"
          >
            Book Now
          </Link>
        </div>
        {/* Mobile Hamburger */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.to}
                className="text-gray-700 hover:text-green-600 font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/experts"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:from-green-600 hover:to-green-700 transition-all duration-300 mt-2 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;