import React from 'react'
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Screen from '../components/Screen/screen';
import AboutUs from '../components/AboutUs/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
// import Home from '../components/Home/Home';
// import Introduction from '../components/Introduction/Introduction';
// import LogoAnimation from '../components/LogoAnimation/LogoAnimation'


const MianScreen = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Screen/>
    <AboutUs/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default MianScreen;