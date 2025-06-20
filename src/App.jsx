import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import AdminRoutes from './routes/AdminRoutes';
import TORoutes from './routes/TORoutes';
import RoleBasedRoutes from './routes/RoleBasedRoutes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/*" element={<PublicRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/to/*" element={<TORoutes />} />
          <Route path="/dashboard/*" element={<RoleBasedRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;