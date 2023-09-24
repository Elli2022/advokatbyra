import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/jeweLogo.png";

function Navbar() {
  return (
    <nav
      className="navbar-style"
      style={{
        listStyleType: "none",
        padding: 20,
        display: "flex",
        backgroundColor: "black",
        justifyContent: "flex-end",
      }}
    >
      <div>
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "70px",
            height: "110px",
            justifyContent: "flex-start",
          }}
        />
      </div>
      <ul
        className="navbar-list"
        style={{
          listStyleType: "none",
          padding: 0,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/about">Om oss</Link>
        </li>
        <li>
          <Link to="/services">Tjänster</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
