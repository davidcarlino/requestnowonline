import React from 'react';
import './Navbar.css';
import icon from '../../assets/images/navbar_icon.png';
import 

function Navbar = () => {
  return (
    <nav>
      <a class="navbar-logo" href="/">
      <a href="/"><img alt='' src={icon}/></a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      </a>

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


      <div class="d-flex align-items-center">
        <button data-mdb-ripple-init type="button" class="buttonnavbar">
          Login
        </button>
        <button data-mdb-ripple-init type="button" class="btn btn-primary me-3">
          Sign up for free
        </button>
        <a
          data-mdb-ripple-init
          class="btn btn-dark px-3"
          href="https://github.com/mdbootstrap/mdb-ui-kit"
          role="button"
          ><i class="fab fa-github"></i
        ></a>
      </div>
    </div>
    </nav>
  );
};



export default Navbar;