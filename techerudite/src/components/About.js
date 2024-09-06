import React from "react";
import about from "../assets/about-banner.png";
import OurProcess from "./OurProcess";
const About = () => {
  return (
    <>
      <div className="about-main">
        <div
          style={{
            width: "430px",
            height: "69px",
            position: "absolute",
            top: "400px",
            left: "100px",
          }}
        >
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
            sadipscing elitr
          </p>
          <button
            style={{
              backgroundColor: "#FF6400",
              borderRadius: "10px",
              padding: "10px",
              width: "150px",
            }}
          >
            About
          </button>
        </div>
        <div className="about-image">
          <img src={about} alt="about" height="450px" width="600px" />
        </div>
        <div style={{ position: "absolute", top: "500px" }}>
          <OurProcess />
        </div>
      </div>
    </>
  );
};

export default About;
