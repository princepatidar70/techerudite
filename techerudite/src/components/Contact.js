import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    mail: "",
    phone: "",
    budget: "",
    description: "",
  });
  const [contacts, setContacts] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleCompanyData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://3.7.81.243:3253/api/contact/send", {
        method: "POST",
        body: JSON.stringify(data), 
      });

      const result = await response.json();
      console.log("Response from API:", result);

      setData({
        name: "",
        lastName: "",
        mail: "",
        phone: "",
        budget: "",
        description: "",
      });

    //   setContacts((prev) => [
    //     ...prev,
    //     {
    //       ...data,
    //     },
    //   ]);
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
              id="name"
              name="name"
              placeholder="Name"
              value={data.name}
              onChange={handleInputChange}
            />

            <input
              type="text"
              className="input"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={data.lastName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              className="input"
              id="mail"
              name="mail"
              placeholder="Mail"
              value={data.mail}
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
