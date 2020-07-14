import React, { Fragment } from "react";
import logo_small from "../../../arcfrontend/layout/logo/logo_small.png";
import "../../../stylesheets/TopMenu.css";

function TopMenu({ buttons }) {
  const buttonElements = buttons.map((item, index) => (
    <li key={index}>
      {item}
    </li>
  ));

  return (
    <nav className="navbar py-4 navbar-dark navbar-expand-sm">
      <a href="/" className="navbar-brand">
        <img src={logo_small} width="140" height="40" alt="Arcadia" />
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
        <ul className="navbar-nav">{buttonElements}</ul>
      </div>
    </nav>
  );
}

export default TopMenu;
