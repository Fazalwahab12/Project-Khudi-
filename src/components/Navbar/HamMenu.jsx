import React from "react";
import "../Navbar/HamMenu.css";
import { Link } from "react-router-dom";

function HamMenu() {
  return (
    <div>
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <Link to="home">
            <a href="#">
              <li>Hero</li>
            </a>
          </Link>
          <Link to="about">
            <a href="#">
              <li>About us</li>
            </a>
          </Link>
          <Link to="contact">
            <a href="#">
              <li>Campaigns</li>
            </a>
          </Link>
          <Link to="about">
            <a href="#">
              <li>Meet Our Warriors</li>
            </a>
          </Link>
          <Link to="contact">
            <a href="#">
              <li>Testimonials</li>
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default HamMenu;
