import React from "react";
import FifthSectionSlider from "../../../Sliders/FifthSectionSlider.jsx";
import "./fifthSection.css";

function FifthSection() {
  return (
    <div id="warriors" className="mt-6 bg-[#fef6f3] py-12 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h4 className="text-2xl font-bold mb-2">Team Project Khudi</h4>
        <h2 className="text-4xl mb-4">Meet Our Warriors</h2>
        <p className="text-lg mb-8">
          We refer to our volunteers as warriors because of their ambition and
          spirit to combat Pakistan's biggest crisis: poverty. With the right
          approach, they are becoming beacons of hope for their communities
          during times of crisis. Team (Collect full names and images of top 15
          members): Hamna, Amna, Nida, Kamran, Roit et
        </p>
      </div>
      <div className="relative">
        <button className="carousel-button left bg-blue-500 text-white absolute left-0 top-1/2 transform -translate-y-1/2 p-2 z-10">‹</button>
        <div className="fifth-lower-container">
          <FifthSectionSlider />
        </div>
        <button className="carousel-button right bg-blue-500 text-white absolute right-0 top-1/2 transform -translate-y-1/2 p-2 z-10">›</button>
      </div>
    </div>
  );
}

export default FifthSection;
