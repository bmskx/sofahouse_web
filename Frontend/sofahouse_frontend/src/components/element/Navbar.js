import React from "react";
import "../../assets/css/components/navbar.css";

import navLogo from "../../assets/images/nav-logo.png";

export default function Navbar(props) {
  return (
    <div id="navbar" className="section">
      <div className="navbar-container">
        <div>
          <img id="nav-logo" src={navLogo} alt="" />
        </div>
        <div id="nav-menu" className="section">
          <h1
            onClick={() => linkPath("")}
            className={`bg-text ${
              props.path === "/" ? "bg-text nav-active" : null
            }`}
          >
            Home
          </h1>
          <h1
            onClick={() => linkPath("portfolio")}
            className={`bg-text ${
              props.path === "portfolio" ? "bg-text nav-active" : null
            }`}
          >
            Portfolio
          </h1>
          <h1
            onClick={() => linkPath("service")}
            className={`bg-text ${
              props.path === "service" ? "bg-text nav-active" : null
            }`}
          >
            Service
          </h1>
          <h1
            onClick={() => linkPath("aboutus")}
            className={`bg-text ${
              props.path === "aboutus" ? "bg-text nav-active" : null
            }`}
          >
            About Us
          </h1>
        </div>
      </div>
    </div>
  );
}

let linkPath = (value) => {
  let web = "http://localhost:3000/";
  window.location = web + value;
};