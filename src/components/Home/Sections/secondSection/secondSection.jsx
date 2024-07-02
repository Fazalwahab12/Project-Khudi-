import React from "react";
import medicine from "../../../Images/medicine.png";
import faucet from "../../../Images/water-tap.png";
import vegetable from "../../../Images/vegetable.png";
import hat from "../../../Images/hat.png";
import "./secondSection.css";

function SecondSection() {
  return (
    <div className="home-second-section">
      <div className="icon-div">
        <div className="box">
          <a href="#">
            <img src={vegetable} alt="vegetable" />
            1500+ Volunteers
          </a>
        </div>
        <div className="box">
          <a href="#">
            <img src={faucet} alt="faucet" />
            5+ institutions
          </a>
        </div>
        <div className="box">
          <a href="#">
            <img src={medicine} alt="medicine" />
            85+ Cases Solved
          </a>
        </div>
        <div className="box">
          <a href="#">
            <img src={hat} alt="hat" />
            12000+ People Served
          </a>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
