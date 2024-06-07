import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DashboardPage from './pages/dashboard';
import HomePage from './pages/home';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/dasboard" element={<DashboardPage />} index />
      <Route path="/home" element={<HomePage />} index />
    </Routes>
  </Router>
  );
}

export default App;
