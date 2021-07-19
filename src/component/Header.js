import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="container-fulid pt-3 Nav">
      <ul className="row text-center m-0">
        <li className="col-lg-4 p-0">
          <ul className="m-0 ps-0 row">
            <li className="col item w-14">Home</li>
            <li className="col item w-14">About</li>
            <li className="col item w-14">Dishes</li>
          </ul>
        </li>
        <li className="col-lg-4 logo">BiryaniHouse</li>
        <li className="col-lg-4 p-0">
          <ul className="m-0 ps-0 row">
            <li className="col item w-14">Dining</li>
            <li className="col item w-14">Our Chef</li>
            <li className="col item w-14">Contact</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
