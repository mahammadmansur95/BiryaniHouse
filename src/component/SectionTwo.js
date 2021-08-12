import React from 'react';
import image from '../images/Rectangle 3.png';
import './SectionTwo.css';

const SectionTwo = () => {
  return (
    <section className="section_two container-fluid  d-flex align-items-center">
      <div className="row  m-6">
        
        <div className="col-lg-6 image_container">
          <img src={image} alt="hero" className="image2" />
        </div>
        <div className="col-lg-6 ps-lg-5 pt-lg-5 S2_matter">
          <h2 className="pb-2 heading2">About</h2>
          <p className="para2">
            At noma, we wish to offer our personal rendition of Nordic gourmet
            cuisine with an innovative gastronomic take on traditional cooking
            methods, fine Nordic produce and the legacy of our shared food
            heritage. Moreover, we regard it as a personal challenge to help
            bring about a revival of Nordic cuisine and let its distinctive
            flavours and particular regional character brighten up the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
