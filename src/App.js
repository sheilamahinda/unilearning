// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import CommunicationPage from './CommunicationPage'; // Import CommunicatePage component
import LoginPage from './LoginPage';
import Pdash from './pdash'; // Import Pdash component
import Teacher from './Teacher';
import Conference from './Conference';
import Pay from './pay';
import Resources from './resources';
import SignUp from './SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} /> {/* Route for LoginPage */}
        <Route path="/dashboard" element={<Pdash />} /> {/* Route for Pdash.js */}
        <Route path="/communicate" element={<CommunicationPage />} /> {/* Add CommunicatePage Route */}
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/Conference" element={<Conference />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;



