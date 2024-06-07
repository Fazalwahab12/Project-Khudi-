import React from "react";
import "../tenthSection/tenthSection.css";
import TenthSectionSlider from "../../../Sliders/TenthSectionSlider.jsx";
function tenthSection() {
  return (
    
    <div id="warriors" className="mt-6  py-12 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h4 className="text-2xl font-bold mb-2">Shared Vision</h4>
        <h2 className="text-4xl mb-4">We Encourage Collaborations</h2>
        <p className="text-lg mb-8">
        We believe in collaboration and joining hands with all those who
        wish well for humanity and Pakistan.
        </p>
      </div>
        <div className="tenth-lower-container">
          <TenthSectionSlider />
        </div>
      </div>
  
  );
}
export default tenthSection;
