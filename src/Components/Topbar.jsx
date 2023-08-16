import React from "react";
import { Link } from "react-router-dom";
import "bootstrap";

function Topbar() {
  return (
    <div className="containernav">
      <nav className="navbar navbar-expand-lg">
        <div className="navbar">
          <div className="container-fluid">
            {/* <button
              id="navbut"
              onClick={() => {
                console.log("hello");
              }}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <li className="nav-item" style={{ textDecoration: "none" }}>
                  <Link id="link" to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item" style={{ textDecoration: "none" }}>
                  <Link id="link" className="nav-link">
                    Features
                  </Link>
                </li>
                <li className="nav-item" style={{ textDecoration: "none" }}>
                  <Link id="link" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item" style={{ textDecoration: "none" }}>
                  <Link id="link" className="nav-link">
                    Login
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Topbar;
