import React from 'react';
import logo from '../Crads/CardLogo.png'
// import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  return (
    <>
<div >
<div className='p-3'>
    {/* Align logo and heading in the same line */}
    <div className='d-flex justify-content-center align-items-center'>
      <img src={logo} alt="Logo" className='h-[72px]' />
      <h1 className='display-3 fw-bold mt-[35px] text-white '>
      About <span className=''>Us</span>
      </h1>
    </div>


 </div>
      <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Section - YouTube Video */}
        <div className="col-md-6">
          <div className="ratio ratio-16x9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/veg8CcB-xnI?si=otZG61JAjXl_7qms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div className="col-md-6 text-white">
          <h1 className="fw-bold text-[2rem]">We're here because you're here.</h1>
          <p className="fs-5">Providing quality healthcare services to those in & beyond Bosque County.</p>
          
          <div className="d-flex gap-2 mt-4">
            <button className="btn btn-primary text-[19px]">Schedule an Appointment</button>
            <button className="btn btn-outline-light">Visit our Clinic</button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Info Cards */}
      <div className="row mt-[75px] text-center text-white">
        <div className="col-md-4 display-5">
          <h4>Quality health care in Bosque County</h4>
        </div>
        <div className="col-md-4 display-5">
          <h4>Local professionals invested in you</h4>
        </div>
        <div className="col-md-4 display-5">
          <h4>Industry-standard equipment</h4>
        </div>
      </div>
    </div>


</div>
              </>
  );
};

export default AboutUs;
