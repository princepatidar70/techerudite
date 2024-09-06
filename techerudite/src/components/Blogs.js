import React, { useEffect, useState } from "react";
import testmonial from "../assets/Testmonials.png"; // Sample image import for illustration

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await fetch("http://3.7.81.243:3253/api/blog");
    const data = await response.json();
    setBlogs(data.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <div className="blog-main">
        <div className="header-image">
          <img src={testmonial} alt="Testimonials" />
        </div>

        <div className="blogs-container">
          <h1>Blogs</h1>

          <div className="blogs-grid">  
            {blogs?.map((item, index) => (
              <div className="blog-card" key={index}>
                <div className="blog-image">
                  <img src={item.image_url} alt={item.name} />
                </div>
                <div className="blog-details">
                  <h3 className="blog-title">{item.name}</h3>
                  <p className="blog-author">
                    {new Date(item.createdAt).toLocaleDateString()} by{" "}
                    <span className="author-name">{item.writer_name}</span>
                  </p>
                  <p className="blog-description">{item.short_description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
