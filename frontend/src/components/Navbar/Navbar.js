import React from 'react';
import './Navbar.css'; // Corrected import statement for CSS file
import icon from '../../assets/images/navbar_icon.png';

const Navbar = () => {
  return (
    <header>
    <div class="navcontainer">
     
    <a href="/"><img alt='' src={icon}/></a>

<div class="navlogocenter" >
<h1> <a href="/">RequestNow.</a></h1>
</div>
      <nav>
        <ul>
          <li><a href="/Pin">Enter Event</a></li>
          <li><a href="/Login">Login</a></li>
        </ul>
      </nav>
    </div>
  </header>
  );
};
const App = () => {
  return (
    <div>
     
    </div>
  );
}


    <>
  
    </>
  // Remove the extra closing parenthesis


export default Navbar;