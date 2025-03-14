import React from "react";
import { NavLink,Link } from "react-router-dom";
import { useSelector} from "react-redux";
const Navbar = () => {
  const cart_items=useSelector((state)=>state.cartCounter)

  return (

      <nav className="navbar navbar-expand-lg navbar-light py-3 sticky-top bg-light">
        <div className="container">
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
              <Link to="/login" className="btn btn-outline-success my-2 my-sm-0" type="submit">
                  Sign In 
                </Link>
              
                <Link to="/cart" className="btn btn-outline-success  my-2 my-sm-0 left" type="submit">
                  Cart ({cart_items.items.length})
                </Link>
            
            </div>
        </div>
      </nav>
  
  );
};

export default Navbar;
