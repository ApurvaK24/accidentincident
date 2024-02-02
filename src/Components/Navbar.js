import React from "react";
import Logo from '../images/7.png'

const Navbar = () =>{
    return(
        <div class="container-fluid px-5 header sticky-top">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 border-bottom border-light">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src={Logo} alt=" "></img>
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 menu-color">Home</a></li>
        <li><a href="#" class="nav-link px-2 menu-color">About </a></li>
        <li><a href="#" class="nav-link px-2 menu-color">Login</a></li>
        <li><a href="#" class="nav-link px-2 menu-color">Contact Us</a></li>
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