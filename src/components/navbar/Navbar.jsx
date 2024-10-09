import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Facilities</li>
        <li>Contact Us</li>
      </ul>
      <input 
        className="search border border-primary" 
        type="text" 

        placeholder="Search" 
      />
    </div>
  );
}

export default Navbar;
