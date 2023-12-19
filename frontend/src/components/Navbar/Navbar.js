import React from 'react';
import './Navbar.css';
import icon from '../../assets/images/navbar_icon.png';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><img alt='' src={icon}/></li>
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;