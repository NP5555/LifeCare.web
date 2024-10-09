import { FaPhone } from 'react-icons/fa';
import logo from "../Crads/CardLogo.png"
import "./Contact.css"

const ContactUs = () => {
  return (
    <div className="container-fluid contact d-flex justify-content-center align-items-center min-vh-100">
      <div className="row w-100">
        {/* Left Section: Call for Query */}
        <div className="col-md-6 d-flex flex-column justify-content-center text-center text-[#045b83dd]">
          <div className="mb-2 d-flex gap-3 justify-center">
            <h1 className="fw-bold text-[4rem] hover:text-black">Contact Us</h1>
            <FaPhone className="text-[5rem]" />
          </div>
          <p className="fw-bold text-[1.2rem] text-justify">
            If you have any questions or need assistance, please do not hesitate to contact us.
          </p>
        </div>

        {/* Right Section: Contact Form */}
        <div className="col-md-6">
          <div className="text-white text-center">
            {/* Heading and Logo */}
            <div className="d-flex justify-content-center align-items-center mb-4">
              <img src={logo} alt="Logo" className="h-[42px] mx-3" />
              <h1 className="fw-bold h1 text-[#045b83dd] hover:text-black">Call For Query</h1>
            </div>

            {/* Form Section */}
            <div className="col-md-8 mx-auto">
              <form className="needs-validation" noValidate>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label text-white fw-bold">First Name</label>
                    <input type="text" className="form-control" id="firstName" required />
                    <div className="invalid-feedback">Valid first name is required.</div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label text-white fw-bold">Last Name</label>
                    <input type="text" className="form-control" id="lastName" required />
                    <div className="invalid-feedback">Valid last name is required.</div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="form-label text-white fw-bold">Email <span className="text-muted"></span></label>
                    <input type="email" className="form-control" id="email" placeholder="" />
                    <div className="invalid-feedback">Please enter a valid email address for updates.</div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label text-white fw-bold">Message</label>
                    <textarea className="form-control" id="message" rows="3" required></textarea>
                    <div className="invalid-feedback">Please enter your message.</div>
                  </div>
                </div>

                <hr className="my-4" />
                <button className="btn-lg w-100 btn bg-[#276989] hover:bg-black text-white" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
