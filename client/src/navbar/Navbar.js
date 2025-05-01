import React from 'react';
import './Navbar.css'; // Optional: for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Terra Flora</div>
      <ul className="navbar-links">
        <li>
          <a href="#house-plants">Plants</a>
        </li>
        <li>
          <a href="#orchids">Orchids</a>
        </li>
        <li>
          <a href="#flowers">Flowers</a>
        </li>
        <li>
          <a href="#supplies">Supplies</a>
        </li>
        <li>
          <a href="#outdoor-plants">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
