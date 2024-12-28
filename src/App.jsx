import React from "react";
import "./App.css";

// Navigation Bar Component
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Beautiful Home</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

// Main Content Component
const MainContent = () => {
  return (
    <div className="main-content">
      <h1>Welcome to Our Beautiful Home</h1>
      <p>Your comfort and happiness are our priorities. Discover our amazing services!</p>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Beautiful Home. All Rights Reserved.</p>
    </footer>
  );
};

// App Component
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
