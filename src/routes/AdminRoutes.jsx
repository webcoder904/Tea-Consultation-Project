import React from 'react';
import { Routes, Route } from 'react-router-dom';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div className="p-8"><h1 className="text-2xl font-bold">Admin Dashboard</h1></div>} />
      <Route path="/users" element={<div className="p-8"><h1 className="text-2xl font-bold">User Management</h1></div>} />
      <Route path="/experts" element={<div className="p-8"><h1 className="text-2xl font-bold">Expert Management</h1></div>} />
      <Route path="/reports" element={<div className="p-8"><h1 className="text-2xl font-bold">Reports</h1></div>} />
    </Routes>
  );
};

export default AdminRoutes;