import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">About Us</h1>
          <p className="col-md-8 fs-4">
            We are dedicated to providing a transformative learning experience
            for all. Explore a world of knowledge tailored just for you.
          </p>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h2>Our Mission</h2>
            <p>
              To empower individuals with accessible and quality education,
              fostering personal and professional growth.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>Our Vision</h2>
            <p>
              A world where everyone has the opportunity to unlock their
              potential through lifelong learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
