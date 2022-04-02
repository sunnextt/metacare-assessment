import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Efficiency from '../views/Analytics';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Efficiency />} />
      <Route path="/analytics" element={<Efficiency />} />
    </Routes>
  );
};

export default AppRoutes;
