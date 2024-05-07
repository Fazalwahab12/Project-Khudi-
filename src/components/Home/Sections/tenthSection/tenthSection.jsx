import React from "react";
import "../tenthSection/tenthSection.css";
import TenthSectionSlider from "../../../Sliders/TenthSectionSlider.jsx";
function tenthSection() {
  return (
    <div className="home-tenth-section">
      <div className="tenth-container">
        <div className="tenth-upper-container">
          <h4>Shared Vision</h4>
          <h2>We Encourage Collaborations</h2>
          <p>
            We believe in collaboration and joining hands with all those who
            wish well for humanity and Pakistan.
          </p>
        </div>
        <div className="tenth-lower-container">
          <TenthSectionSlider />
        </div>
      </div>
    </div>
  );
}
export default tenthSection;
