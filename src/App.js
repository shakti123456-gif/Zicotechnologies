// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import CSS file
import HomePage from './component/HomePage';
import Contact from './component/Contact';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
