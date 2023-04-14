import React from "react";
import "./style/navbar.css";
import Logo from "../Images/falcon-logo.png";
import { navItems } from "./NavItems";
import { NavLink } from "react-router-dom";

export default function navbar() {
  return (
    <nav className="navbar">
      <div className="color-container"></div>
      <div className="main-navbar">
        <img src={Logo} alt="Logo" className="logo-png" />
        <h1 className="falcon">FALCon</h1>
        <ul className="nav-items">
        {navItems.map((item) => {
          return (
            <>
              <li key={item.id} className={item.cName}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </li>
            </>
          );
        })}
      </ul>
      <a href="#"className="enroll_btn">ENROLL</a>
      <a href="#"className="login_btn">LOG IN</a>
      </div>
    </nav>
  );
} 