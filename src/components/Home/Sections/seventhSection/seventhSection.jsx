import React from "react";
import "../seventhSection/seventhSection.css";
import volunteerPicture from "../../../Images/volunteer.png";
function seventhSection() {
  return (
    <div className="home-seventh-section">
      <div className="seventh-container">
        <div className="tablet-sevent-item">
          <div className="seventh-first-item">
            <h1>
              Let’s Help Pakistan Prosper and Grow Economically Become a Warrior
            </h1>
          </div>
          <div className="seventh-second-item">
            <button>Become A Volunteer</button>
          </div>
        </div>
        <div className="seventh-third-item">
          <img
            src={volunteerPicture}
            alt="volunteer picture"
            id="volunteer-pic"
          />
        </div>
      </div>
    </div>
  );
}
export default seventhSection;
