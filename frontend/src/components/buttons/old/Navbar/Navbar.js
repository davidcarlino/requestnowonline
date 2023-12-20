import React from 'react';
import './Navbar.css';
import '../../components/buttons/buttonnavbar.css';
import icon from '../../assets/images/navbar_icon.png';


const Navbar = () => {
  return (
    <nav>
      <div class="ms-auto">
      <a class="navbar-logo" href="/">
      <a href="/"><img alt='' src={icon}/></a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      </a>
      </div>


      <button
      data-mdb-collapse-init
      class="navbar-toggler"
      type="button"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarButtons">
  
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/login">Dashboard</a>
        </li>
      </ul>


      <div class="buttonnavbar1">
        <button data-mdb-ripple-init type="button" class="buttonnavbar">
          Login
        </button>
        <button data-mdb-ripple-init type="button" class="buttonnavbar">
          Sign up for free
        </button>
      
      </div>
    </div>
    </nav>
  );
};



export default Navbar;