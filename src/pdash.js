// src/pdash.js
import React from 'react';
import { Link } from 'react-router-dom';
import './pdash.css'; // Add your styles

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="sidebar">
     
      <ul className="sidebar-menu">
        <li className="menu-item active">Dashboard</li>
        <li className="menu-item"><Link to="/resources">Resources</Link></li>
        <li className="menu-item">Downloads</li>
        <li className="menu-item">Grade</li>
        <li className="menu-item"><Link to="/teacher">Teachers</Link></li>
        <li className="menu-item"><Link to="/pay">Payment</Link></li>
        <li className="menu-item">Support Services</li>
        <li className="menu-item">
          <Link to="/communicate">Chats</Link> {/* Updated to link to CommunicatePage */}
        </li>
        <li className="menu-item"><Link to="/Conference">Conference Meeting</Link></li>
        <li className="menu-item upgrade">
          <button className="upgrade-button">Upgrade</button>
        </li>
      </ul>
    </div>
  );
};

// ProgressCard Component
const ProgressCard = ({ title, score, progress }) => {
  return (
    <div className="progress-card">
      <h4>{title}</h4>
      {score ? <p className="score">{score}</p> : <p className="progress">{progress}</p>}
    </div>
  );
};

// Header Component
const Header = () => {
    return (
      <header className="header">
        <nav className="navbar">
          <div className="sidebar-logo">
            <img src="/glogo.png" alt="Logo" />
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li> {/* Updated Home link to use Link */}
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#profile">Profile/Dashboard</a></li>
          </ul>
          <button className="contact-btn">Contact</button>
        </nav>
      </header>
    );
  };
  

// Dashboard Component
const Dashboard = () => {
  return (
    <div className="dashboard-content">
      <div className="dashboard-welcome">
        <h2>Welcome Back Jack</h2>
        <p>Here’s an overview of your course</p>
      </div>
      <div className="progress-section">
    <div className="progress-card">
        <ProgressCard title="Completed" score="50" />
    </div>
    <div className="progress-card">
        <ProgressCard title="Quiz Score" score="50" />
    </div>
</div>



      <div className="recent-courses">
        <h3>Recent enrolled course</h3>
        <div className="courses-list">
          <ProgressCard title="Writing Skills" progress="47/60" />
          <ProgressCard title="Reading Skills" progress="42/60" />
        </div>
      </div>

      <div className="daily-progress">
        <h3>Daily progress</h3>
        <div className="progress-chart">
          {/* Insert chart here using any chart library like Chart.js */}
        </div>
      </div>
    </div>
  );
};

// Main pdash Component that renders everything
const Pdash = () => {
  return (
    <div className="dashboard-page">
      <Header />
      <div className="dashboard-body">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Pdash;
