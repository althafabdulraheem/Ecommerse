import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <NavLink className="navbar-brand fw-bold fs-4 px-4" to='/'>
            Quick Deals
        </NavLink>
        {/* responsive toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
       {/* responsive toggle */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2">
            <li className="nav-item active">
              <NavLink className="nav-link" href="#">
                Home 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="#">
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" href="#">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" href="#">
                Contact
              </NavLink>
            </li>
        
            
          </ul>
          
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
         
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
