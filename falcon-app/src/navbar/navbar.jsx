import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style/navbar.css";
import Logo from "../Images/falcon-logo.png";
import { navItems } from "./NavItems";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [Mobile, setMobile] = useState(false);

  return (
    <nav className="navi">
      <div className="color-container"></div>
      <div className="main-navbar">
        <img src={Logo} alt="Logo" className="logo-png" />
        <h1 className="falcon-title">FALCon</h1>
        <ul
          className={Mobile ? "Navlinks_Mobile" : "nav-items"}
          onClick={() => setMobile()}
        >
          {navItems.map((item, index) => {
            return (
              <>
                <li key={index} className={item.cName}>
                  <NavLink to={item.path}>{item.title}</NavLink>
                </li>
              </>
            );
          })}
          <div className="enroll">
            <Link to="/enrollment" className="enroll_btn">
              <button type="button" class="btn btn-success">
                ENROLL
              </button>
            </Link>

            <Link to="/login" className="login_btn">
              <button type="button" class="btn btn-success">
                LOGIN
              </button>
            </Link>
          </div>
        </ul>

        {/**Mobile Navigation */}
        <div className="Mobile_Navigation">
          <a
            className="Mobile_Navigation_Button"
            onClick={() => setMobile(!Mobile)}
          >
            {Mobile ? (
              <FontAwesomeIcon icon={faX} size="2xl" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="2xl" />
            )}
          </a>
        </div>
      </div>
    </nav>
  );
}