import React from "react";
import medicine from "../../../Images/medicine.png";
import faucet from "../../../Images/water-tap.png";
import vegetable from "../../../Images/vegetable.png";
import hat from "../../../Images/hat.png";
import "./secondSection.css";
function secondSection() {
  return (
    <div className="home-second-section">
      <div className="icon-div">
        <div className="first-box">
          <div className="image-box-container">
            <img src={vegetable} />
          </div>
          <a href="#">1500+ Volunteers</a>
        </div>
        <div className="second-box">
          <div className="image-box-container">
            <img src={faucet} />
          </div>
          <a href="#">5+ institutions</a>
        </div>
        <div className="third-box">
          <div className="image-box-container">
            <img src={medicine} />
          </div>
          <a href="#">85+ Cases Solved</a>
        </div>
        <div className="fourth-box">
          <div className="image-box-container">
            <img src={hat} />
          </div>
          <a href="#">12000+ People Served</a>
        </div>
      </div>
    </div>
  );
}
export default secondSection;
