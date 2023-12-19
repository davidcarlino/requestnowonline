import React from 'react';
import './Navbar.css';
import icon from '../../assets/images/navbar_icon.png';

const Navbar = () => {
  return (
    <nav>
      <a href="/"><img alt='' src={icon}/></a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;