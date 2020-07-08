import React, { Component } from "react";
import logo_small from "../arcfrontend/layout/logo/logo_small.png";
import "../stylesheets/TopMenu.css";

class TopMenu extends Component {
  render() {
    return(
        <nav className="navbar py-4 navbar-dark navbar-expand-sm">
   
          <a href="#" className="navbar-brand">
            <img
              src={ logo_small }
              width="140"
              height="40"
              alt="Arcadia"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarLinks"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarLinks">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a href="index.html" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#Register" className="nav-link">Register</a>
              </li>
              <li className="nav-item">
                <a href="#signin" className="nav-link" data-toggle="modal">Sign In</a>
              </li>
            </ul>
          </div>
        </nav>
    )
  }
}

export default TopMenu;
