import React from "react";
import audit from "../assets/audit.png";
const Services = () => {
  return (
    <>
      <h2 style={{ position: "relative", top: "10px", left: "60px" }}>
        Services
      </h2>
      <div style={{display:'flex',flexWrap:'wrap',}}>
        <div className="service-box">
          <div className="s-images">
            <img src={audit} alt="audit" width="100px" height="100px" />
          </div>
          <h2 className="heading">Audit & Account</h2>
          <p className="p-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className="service-box">
          <div className="s-images">
            <img src={audit} alt="audit" width="100px" height="100px" />
          </div>
          <h2 className="heading">Budget & Projections</h2>
          <p className="p-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className="service-box">
          <div className="s-images">
            <img src={audit} alt="audit" width="100px" height="100px" />
          </div>
          <h2 className="heading">Payroll & Bookkeeping</h2>
          <p className="p-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className="service-box">
          <div className="s-images">
            <img src={audit} alt="audit" width="100px" height="100px" />
          </div>
          <h2 className="heading">Software Training & IT</h2>
          <p className="p-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className="service-box">
          <div className="s-images">
            <img src={audit} alt="audit" width="100px" height="100px" />
          </div>
          <h2 className="heading">Tax planning & Returns</h2>
          <p className="p-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className="service-box">
          <div className="s-images">
            <img src={audit} alt="audit" width="100px" height="100px" />
          </div>
          <h2 className="heading">Management Information</h2>
          <p className="p-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
