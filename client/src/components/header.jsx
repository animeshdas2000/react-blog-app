import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Login from "./Auth/Login";
function Header() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
          <div className="container">
            <Link className="navbar-brand" to=" " >
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/blog/all" >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                <Link to="/auth/login" className="nav-link" color="primary" >
                  Login
                </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/auth/register" >
                   Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/blog/create"
                  >
                   New Blog
                  </Link>
                </li>           
              </ul>
            </div>
          </div>
          </nav>
    </>
  );
}

export default Header;
