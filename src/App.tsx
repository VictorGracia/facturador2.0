import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DashboardPage from './pages/dashboard';
import HomePage from './pages/home';
import FacturadorPage from './pages/facturador';
import ProductosPage from './pages/productos';
import ClientesPage from './pages/clientes';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/dasboard" element={<DashboardPage />} index />
      <Route path="/home" element={<HomePage />} index />
      <Route path="/facturador" element={<FacturadorPage />} index />
      <Route path="/productos" element={<ProductosPage />} index />
      <Route path="/clientes" element={<ClientesPage />} index />
    </Routes>
  </Router>
  );
}

export default App;
