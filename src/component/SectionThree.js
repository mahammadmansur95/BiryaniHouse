import React from 'react';
import './SectionThree.css';
import chicken from '../images/chicken.jpg';
import prawns from '../images/prawns.jpg';
import mutton from '../images/Rectangle 6.png';
import garlicMushroom from '../images/garlic_mushroom.jpg';
import kadaiPaneer from '../images/kadai_paneer.jpg';
import tandoori from '../images/tandoori.jpg';

const SectionThree = () => {
  let data1 = [
    {
      title: 'Chicken Biryani',
      image: chicken,
    },
    {
      title: 'Mutton Biryani',
      image: mutton,
    },
    {
      title: 'Prawns Biryani',
      image: prawns,
    },
  ];
  let data2 = [
    {
      title: 'Garlic Mushroom',
      image: garlicMushroom,
    },
    {
      title: 'Kadai Paneer',
      image: kadaiPaneer,
    },
    {
      title: 'Tandoori Chicken',
      image: tandoori,
    },
  ];
  return (
    <section className="section_three container-fluid">
      <div className="content_container">
        <div className="pt-5">
          <h1 className="heading">Our Dishes</h1>
          <p className="pt-1 para3">Our mission is to WOW people every day!</p>
        </div>
        <div className="d-flex cards_container flex-lg-wrap justify-content-around pt-3">
          {data1.map((item) => {
            return (
              <div className="card cardS3">
                <img src={item.image} alt="card" className="imageS3" />
                <div class="card-body cardBody">
                  <p class="card-text text-center card_title">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex  flex-lg-wrap justify-content-around pt-3">
          {data2.map((item) => {
            return (
              <div className="card cardS3">
                <img src={item.image} alt="card" className="imageS3" />
                <div class="card-body cardBody" >
                  <p class="card-text text-center card_title" >{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
