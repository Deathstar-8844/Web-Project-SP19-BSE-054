import React from 'react'
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div>
            <header>
        <nav className="navbar navbar-expand-md navigation">
          <div className="container">    
            <a className="navbar-brand" href="#"><img src="images/logo-white.png" /></a>
            {/* Toggler/collapsibe Button */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="fa fa-bars" />
            </button>
            {/* Navbar links */}
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">ABOUT US</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/menu">OUR MENU</Link>
                </li> 
                <li className="nav-item">
                  <Link className="nav-link" to="/reservation">RESERVATIONS</Link>
                </li>  
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">CONTACT US</Link>
                </li> 
              </ul>
              <ul className="pages">
                <li className="page1">
                  <Link to="/login">Login</Link>
                </li> 
                <li className="page2">
                  <Link to="/signup">Sign Up</Link>
                </li> 
                <li className="page3">
                  <Link to="/cart">CART
                  {
            props.countItems ?(
              <span className="badge badge-secondary">{props.countItems}</span>
            ) : (
              ''
            )
          }
          </Link>
                </li> 
              </ul>
            </div>
          </div>
          
        </nav>
      </header>
        </div>
    )
}

export default Navbar
