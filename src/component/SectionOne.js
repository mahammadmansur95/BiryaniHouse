import React from 'react';
import image from '../images/heroImg.png';
import './SectionOne.css';

const SectionOne = () => {
  return (
    <section className="section_one container-fluid pt-4">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 ps-lg-5 ps-3">
          <h2 className="pb-2 heading">The flavor of tradition</h2>
          <p className="para">
            We are a multi-cuisine restaurant offering a wide variety of food
            experience in both casual and fine dining environment.
          </p>
        </div>
        <div className="col-lg-6 image_container">
            <img src={image} alt="hero image" className="image"/>
        </div>

      </div>
    </section>
  );
};

export default SectionOne;
