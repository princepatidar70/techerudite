import React, { useEffect, useState } from "react";

const Footer = () => {
  const [footerData, setFooterData] = useState()

  const fetchFooterData = async () => {
    const response = await fetch("http://3.7.81.243:3253/api/settings/fetch-frontend-details");
    const data = await response.json();
console.log("footer", data.data);
setFooterData(data.data)

  };

  useEffect(() => {
    fetchFooterData();
  }, []);

  console.log("footerData",footerData);
  
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
        <p>Tagline will go here. Lorem ipsum d oler sit amet…</p>
          <a href={`mailto:${footerData?.contact_mail}`}>{footerData?.contact_mail}</a>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-right">
          <div className="address">
            <p><strong>Address</strong></p>
            <p>{footerData?.address}</p>
          
          </div>
          <div className="contacts">
            <p><strong>Contacts</strong></p>
            <a href={`mailto:${footerData?.contact_mail}`}>
              {footerData?.contact_mail}
            </a>
            <p>{footerData?.contact_no}</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="path-to-logo.png" alt="Logo" />
        </div>
        <nav className="footer-nav">
          <a href="/about">About</a>
          <a href="/blogs">Blogs</a>
          <a href="/contact">Contact</a>
          <a href="/services">Services</a>
        </nav>
        <p>&copy; 2022. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
