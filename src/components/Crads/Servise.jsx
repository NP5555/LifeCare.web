import React from 'react'
import logo from "../Crads/CardLogo.png"

const Servise = () => {
  return (
    <>   

<div className=' p-4'>
<div className='d-flex flex-column justify-content-center align-items-center mb-[50px]'>
  <div className='d-flex align-items-center'>
    <img src={logo} alt="Logo" className='h-[72px] me-3' />
    <h1 className='display-3 fw-bold text-white text-center'>Senior Staff</h1>
  </div>
  <h3 className='text-center text-white text-[1.2rem] mt-3'>Meet Our Team</h3>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
  {/* <!-- Card 1 --> */}
  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#045b83dd] transition-transform transform hover:scale-105 hover:shadow-xl">
    <img className="h-[40vh] w-full object-cover" src="https://healthwatchcheshireeast.org.uk/wp-content/uploads/2020/09/Dr-Andrew-Wilson-768x768.jpg" alt="Dr. Andrew Wilson" />
    <div className="px-4 py-4 text-white">
      <h2 className="font-bold text-xl mb-2">Dr. Andrew Wilson</h2>
      <h3 className="font-semibold text-lg">Cardiologist</h3>
      <p className="text-base mt-2">Specializing in heart failure and interventional cardiology.</p>
    </div>
  </div>

  {/* <!-- Card 2 --> */}
  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#045b83dd] transition-transform transform hover:scale-105 hover:shadow-xl">
    <img className="h-[40vh] w-full object-cover" src="https://dremmahiscutt.com/wp-content/uploads/2020/08/Dr-Emma.jpg" alt="Dr. Emma Harrison" />
    <div className="px-4 py-4 text-white">
      <h2 className="font-bold text-xl mb-2">Dr. Emma Harrison</h2>
      <h3 className="font-semibold text-lg">Neurologist</h3>
      <p className="text-base mt-2">Treating epilepsy, stroke, and neurodegenerative diseases.</p>
    </div>
  </div>

  {/* <!-- Card 3 --> */}
  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#045b83dd] transition-transform transform hover:scale-105 hover:shadow-xl">
    <img className="h-[40vh] w-full object-cover" src="https://physicians.dukehealth.org/sites/default/files/physician/ravi-karra-md-mhs.jpg" alt="Dr. James Patel" />
    <div className="px-4 py-4 text-white">
      <h2 className="font-bold text-xl mb-2">Dr. James Patel</h2>
      <h3 className="font-semibold text-lg">Orthopedic Surgeon</h3>
      <p className="text-base mt-2">Specializing in joint replacements and sports injuries.</p>
    </div>
  </div>

  {/* <!-- Card 4 --> */}
  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#045b83dd] transition-transform transform hover:scale-105 hover:shadow-xl">
    <img className="h-[40vh] w-full object-cover" src="https://www.mayoclinic.org/-/media/kcms/employees/2018/06/16/22/41/rebecca-king-15323641.jpg" alt="Dr. Andrew Wilson" />
    <div className="px-4 py-4 text-white">
      <h2 className="font-bold text-xl mb-2">Dr. Andrew Wilson</h2>
      <h3 className="font-semibold text-lg">Cardiologist</h3>
      <p className="text-base mt-2">Specializing in heart failure and interventional cardiology.</p>
    </div>
  </div>

  {/* <!-- Card 5 --> */}
  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#045b83dd] transition-transform transform hover:scale-105 hover:shadow-xl">
    <img className="h-[40vh] w-full object-cover" src="https://th.bing.com/th/id/OIP.6TtjqhL4E1my3T6519A0SAAAAA?rs=1&pid=ImgDetMain" alt="Dr. Emma Harrison" />
    <div className="px-4 py-4 text-white">
      <h2 className="font-bold text-xl mb-2">Dr. Emma Harrison</h2>
      <h3 className="font-semibold text-lg">Neurologist</h3>
      <p className="text-base mt-2">Treating epilepsy, stroke, and neurodegenerative diseases.</p>
    </div>
  </div>

  {/* <!-- Card 6 --> */}
  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#045b83dd] transition-transform transform hover:scale-105 hover:shadow-xl">
    <img className="h-[40vh] w-full object-cover" src="https://th.bing.com/th/id/OIP.mLVkulL0KwWRtzT9t87aSwHaHa?rs=1&pid=ImgDetMain" alt="Dr. James Patel" />
    <div className="px-4 py-4 text-white">
      <h2 className="font-bold text-xl mb-2">Dr. James Patel</h2>
      <h3 className="font-semibold text-lg">Orthopedic Surgeon</h3>
      <p className="text-base mt-2">Specializing in joint replacements and sports injuries.</p>
    </div>
  </div>
</div>
</div>



</>
  )
}

export default Servise;