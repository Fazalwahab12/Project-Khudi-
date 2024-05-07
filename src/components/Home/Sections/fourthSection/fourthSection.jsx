import React from "react";
import "./fourthSection.css";
import FourthMedicine from "../../../Images/medicine_fourth.png";
import FourthMedicineProgress from "../../../Images/medicine-progress.png";
import Food from "../../../Images/food.png";
import FoodProgress from "../../../Images/food-progress.png";
import Education from "../../../Images/education.png";
import EducationProgress from "../../../Images/education-progress.png";
import Woman from "../../../Images/woman-fourth-section.png";
const fourthSection = () => {
  return (
    <div className="home-fourth-section">
      <div className="fourth-container">
        <div className="fourth-upper-container">
          <h4>We love to serve humanity</h4>
          <h2>Our Recent Campaigns</h2>
          <p>
            Project Khudi fights poverty for empowering Pakistan, whereas
            supporting its people in crisis and celebration.
          </p>
        </div>
        <div className="fourth-lower-container">
          <div className="fourth-lower-column-container">
            <div className="education-div">
              <img src={Education} className="img-template" />
              <br />
              <h2>
                <a href="#">
                  In 2023 and 2024, we organised Ramadan drives for a full 30
                  days (4000+ People Served)
                </a>
              </h2>
            </div>
            <div className="food-div">
              <img src={Food} className="img-template" />
              <br />
              <h2>
                <a href="#">
                  Delivered Free small businesses to deserving individuals (85+
                  FREE Setups delivered)
                </a>
              </h2>
            </div>
            <div className="medicine-div">
              <img src={FourthMedicine} className="img-template" />
              <br />
              <h2>
                <a href="#">
                  Aided in rescuing people during the flood relief campaign in
                  Malakand, KPK (200+ Families Rescued)
                </a>
              </h2>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default fourthSection;
