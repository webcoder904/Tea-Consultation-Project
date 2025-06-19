import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Experts from './pages/Experts.jsx';
import Contact from './pages/Contact.jsx';
import ExpertBooking from './pages/ExpertBooking.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking/:expertId" element={<ExpertBooking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 