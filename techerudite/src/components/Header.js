import React from "react";
import logo from "../assets/Bitmaplogo.png";

const Header = () => {
  return (
    <div className="main-div">
      <div className="header">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-nav">
          <nav>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
              <li>
                <a href="#caseStudies">Case Studies</a>
              </li>
              <li>
                  <button className="button" type="button">
                    CONTACT US
                  </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="content">
        <h1>How much could you save?</h1>
        <p>
          Answer the questions below to get a fixed price quotation for us to
          take your accountancy hassles away from you.
        </p>
      </div>
      <div className="turnover-box">
        <p>Is your turnover expected to be more than £85k?</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="box-btn">Yes</button>
          <button className="box-btn">No</button>
        </div>
        <p style={{fontSize:'16px', display:'flex', paddingLeft: '0px'}}>Takes less than 30 seconds</p>
      </div>
    </div>
  );
};

export default Header;
