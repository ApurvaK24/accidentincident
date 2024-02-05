import React from "react";
import Logo from '../images/7.png'
import { Link } from 'react-router-dom';
const Navbar = () =>{
    return(
        <div class="container-fluid px-5 header sticky-top">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 border-bottom border-dark">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src={Logo} alt=" "></img>
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" class="nav-link px-2 menu-color">Home</Link></li>
        <li><Link to="/about" class="nav-link px-2 menu-color">About </Link></li>
        <li><Link to="/dashboard" class="nav-link px-2 menu-color">Login</Link></li>
        <li><Link to="/contact" class="nav-link px-2 menu-color">Contact Us</Link></li>
      </ul>

      <div class="col-md-3 text-end">
        <i className="bi bi-search fs-3 me-4 text-success"></i>
        <i className="bi bi-vehicle fs-3"></i>
      </div>
    </header>
  </div>
    )
}

export default Navbar