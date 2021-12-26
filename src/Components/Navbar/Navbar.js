import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
    <div className="navbar-fixed">    
      <nav className="white" role="navigation">
      <div className="container">
          <div class="nav-wrapper">
            <a href="#" className="brand-logo right"><i className="material-icons icon-pink">home</i>KD</a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a className="" href="#">About me</a></li>
            <li><a className="" href="#">Listings</a></li>
            <li><a className="" href="#">Contact me</a></li>
            </ul>
          </div>
        </div>  
      </nav>
    </div>
    )
}

export default Navbar;
