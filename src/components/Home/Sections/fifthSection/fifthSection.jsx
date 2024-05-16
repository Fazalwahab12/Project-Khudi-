import React from "react";
import "../fifthSection/fifthSection.css";
import FifthSectionSlider from "../../../Sliders/FifthSectionSlider.jsx";
function fifthSection() {
  return (
    <div id="warriors" className=" mt-6">
      <div className="fifth-container">
        <div className="fifth-upper-container pt-5">
          <h4 className=" text-2xl">Team Project Khudi</h4>
          <h2>Meet Our Warriors</h2>
          <p>
            We refer to our volunteers as warriors because of their ambition and
            spirit to combat Pakistan's biggest crisis: poverty. With the right
            approach, they are becoming beacons of hope for their communities
            during times of crisis. Team (Collect full names and images of top
            15 members): Hamna, Amna, Nida, Kamran, Roit et
          </p>
        </div>
        <div className="fifth-lower-container">
          <FifthSectionSlider />
        </div>
      </div>
    </div>
  );
}
export default fifthSection;
