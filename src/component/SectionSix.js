import React from 'react';
import './SectionSix.css';

const SectionSix = () => {
    let data = [
        {
            name: "Samule",
            matter: "“ I have never hadthis type of meal ever.Food is very tasty ”"
        },
        {
            name:"Jack",
            matter: "“ I’m very mush satisfied with the service and food tast’s so good ”"
        },
        {
            name: "Ramu",
            matter: "“ I’m very mush satisfied with the service and food tast’s so good ”"
        }
    ];
    return (
        <section className="container-flud section6">
            <div className="testimonials d-lg-flex flex-lg-row justify-content-around">
                <div className="first_box">
                    what our Coustomers say about us
                </div>
                {
                    data.map( item => {
                        return (
                            <div className="testimonial_card">
                                <div className="card_matter para6 pt-3">{item.matter}</div>
                                <div className="card_name para6 text-end pt-lg-4 pe-lg-2">-{item.name}</div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="footer container-fluid row text-center">
                <div className="col-4 p-0">
                    <p className="logo">BiryaniHouse</p>
                    <p className="para6">Sunay street,oppasite to Xy bank,Rajamundary</p>
                </div>
                <div className="col-4 p-lg-0">
                    <p className="title6">Timing</p>
                    <p className="para6">[9Am - 10pm]</p>
                </div>
                <div className="col-4 p-lg-0">
                    <p className="title6">Contact Us:</p>
                    <p className="para6">+41 9234-456-788</p>
                    <p className="para6">www.biryanihouse.co.in</p>
                </div>
            </div>
        </section>
    );
};

export default SectionSix;
