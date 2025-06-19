import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Experts from './pages/Experts';
import Contact from './pages/Contact';
import ExpertBooking from './pages/ExpertBooking';

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