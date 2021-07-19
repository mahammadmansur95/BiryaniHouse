import React from 'react';
import './SectionFour.css';
import image from '../images/Rectangle 14.png';

const SectionFour = () => {
    return (
        <section className="container-fluid section4">
            <h1 className="title4">Sitting Arrangement</h1>
            <div className="content4">
                <div className="row">
                    <div className="col text-center">
                        <p className="para4 text-center">“Ultimate Dinning Experience LikeNo Other”</p>
                    </div>
                    <div className="col text-center">
                        <img src={image} alt="image_section4" className="image4"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionFour;
