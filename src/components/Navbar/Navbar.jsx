import React from "react";
import { Link } from "react-router-dom";
import CharitioLogo from "../Images/CharitioLogo.png";
import { BiSearch } from "react-icons/bi";
import "../Navbar/Navbar.css";
import ScrollToTop from "./scrollToTop";
import HamMenu from "./HamMenu";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="ham-menu">
          <HamMenu />
        </div>
        <div className="img-container">
          <img src={CharitioLogo} id="charitioLogo" alt="" />
        </div>
        <div className="center-buttons">
          <button>
            <Link to="Hero">Hero</Link>
          </button>
          <button>
            <Link to="about">About us</Link>
          </button>
          <button>
            <Link to="Campaigns"> Campaigns</Link>
          </button>
          <button>
            <Link to="Warriors"> Meet Our Warriors</Link>
          </button>
          <button>
            <Link to="Testimonials">Testimonials</Link>
          </button>
        </div>
        <div className="right-buttons">
          <button id="donate-btn">
            <Link to="contact">Donate Now</Link>
          </button>
          <button id="search-nav">
            <Link to="contact">
              <BiSearch />
            </Link>
          </button>
        </div>
      </div>
      <ScrollToTop />
    </nav>
  );
}

export default Navbar;
