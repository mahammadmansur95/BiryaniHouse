import React from 'react';
import './SectionFive.css';
import image1 from '../images/Ellipse 1.png';
import image2 from '../images/Ellipse 2.png';
import image3 from '../images/Ellipse 3.png';

const SectionFive = () => {
    let data = [
        {
            name:"Vikram singh [head chef]",
            image : image1
        },
        {
            name: "Miles Finer [junior chef]",
            image:image2
        },
        {
            name: "Jonathan [Nov-veg specialist]",
            image: image3
        }
    ]
    return (
        <section className="container-fluid section5">
            <h1 className="title5 pt-lg-5 pb-lg-2">Our Chef's</h1>
            <p className="para5">OUR CHEFS ARE TRAINED SPECIFICALLY TO PROVIDE QUALITY FOOD.</p>

            <div className="row text-center chef_container">
                {
                    data.map( item => {
                        return (
                            <div className="col">
                                <img src={item.image} alt="chef" className="chef_image"/>
                                <p className="chef_title">{item.name}</p>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default SectionFive;
