import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import About from '../pages/About';
import ViewEvents from '../pages/ViewEvents';
import UserLayout from '../pages/UserLayout';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/experts" element={<ViewEvents />} />
      <Route path="/contact" element={<UserLayout />} />
    </Routes>
  );
};

export default PublicRoutes;