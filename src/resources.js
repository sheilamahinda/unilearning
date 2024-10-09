import React from 'react';
import { Link } from 'react-router-dom';
import './resources.css';

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/path-to-logo.png" alt="Nativo English Logo" />
      </div>
      <ul className="sidebar-menu">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/downloads">Downloads</Link></li>
        <li><Link to="/grade">Grade</Link></li>
        <li><Link to="/teachers">Teachers</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><Link to="/support">Support Services</Link></li>
        <li><Link to="/messages">Messages</Link></li>
        <li><Link to="/meetings">Conference Meeting</Link></li>
        <li className="sidebar-upgrade">
          <button className="upgrade-btn">Upgrade</button>
        </li>
      </ul>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/profile">Profile/Dashboard</Link></li>
        </ul>
        <button className="contact-btn">Contact</button>
      </nav>
    </header>
  );
};

// Download Card Component
const DownloadCard = ({ title, description, price, originalPrice, duration, imgSrc, instructor }) => {
  return (
    <div className="download-card">
      <img src={imgSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-details">
          <p className="price">${price} <span className="original-price">${originalPrice}</span></p>
          <p>{duration}</p>
        </div>
        <p>Instructor: {instructor}</p>
      </div>
    </div>
  );
};

// Downloads Component
const Downloads = () => {
  const downloads = [
    {
      title: "Listening and Comprehension",
      description: "Exercises using audio materials like podcasts, news clips, and interviews.",
      price: 80,
      originalPrice: 100,
      duration: "3 Month",
      imgSrc: "/book1.png",
      instructor: "Lina"
    },
    {
      title: "Basic Grammar and Vocabulary",
      description: "Introduction to common nouns, verbs, adjectives, and simple sentence structures.",
      price: 80,
      originalPrice: 100,
      duration: "3 Month",
      imgSrc: "/book2.png",
      instructor: "Lina"
    },
    {
      title: "Everyday Conversations",
      description: "Phrases and dialogues for common situations, like greetings, shopping, and ordering food.",
      price: 80,
      originalPrice: 100,
      duration: "3 Month",
      imgSrc: "/book3.png",
      instructor: "Lina"
    }
  ];

  return (
    <div className="downloads-page">
      <h2>Downloads</h2>
      <div className="downloads-list">
        {downloads.map((item, index) => (
          <DownloadCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

// Main Resources Component
const Resources = () => {
  return (
    <div className="resources-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Downloads />
      </div>
    </div>
  );
};

export default Resources;
