import React from 'react';
import './Header.css';
import logo from "./logo.png"
// import Navbar from '../navbar/Navbar';

const Header = () => {
  return (
    <div className="Header">
     <img src={logo} className='h-[40px] mx-[6px]' alt="" /> 
           <h1 className='display-6'><span className='fw-bold'>Life</span>Care</h1>
    {/* <Navbar/> */}

    </div>
  )
}

export default Header;