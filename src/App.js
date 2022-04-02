import React from 'react';
import './App.css';
import MainLayout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
