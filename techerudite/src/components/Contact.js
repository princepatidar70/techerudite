import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    budget: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleCompanyData = async (e) => {
    e.preventDefault();
console.log("data",data);

    try {
      const response = await fetch("http://3.7.81.243:3253/api/contact/send", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Response from API:", result);

      setData({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        budget: "",
        description: "",
      });

    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <>
      <div className="contact-form-container">
        <small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </small>
        <form onSubmit={handleCompanyData}>
          <div className="form-row">
            <input
              type="text"
              className="input"
              id="fname"
              name="fname"
              placeholder="Name"
              value={data.fname}
              onChange={handleInputChange}
            />

            <input
              type="text"
              className="input"
              id="lname"
              name="lname"
              placeholder="Last Name"
              value={data.lname}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              className="input"
              id="email"
              name="email"
              placeholder="Mail"
              value={data.email}
              onChange={handleInputChange}
            />

            <input
              type="text"
              className="input"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={data.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              className="input"
              id="budget"
              name="budget"
              placeholder="Budget"
              value={data.budget}
              onChange={handleInputChange}
            />

            <input
              type="text"
              className="input"
              id="description"
              name="description"
              placeholder="Description"
              value={data.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-submit-row">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
