import React from "react";
import "./firstSection.css";
import kid1 from "../../../Images/kid1.png";
import totalProjects from "../../../Images/totalprojects.png";
import kid2 from "../../../Images/kid2.png";
import FirstSectionSlider from "../../../Sliders/FirstSectionSlider.jsx";
function firstSection() {
  return (
    <div className="home-first-section m-5">
      <div className="first-section-first-div ">
        <h3>Join us in empowering Pakistan economically.</h3>
        <h1>
          We believe in addressing root causes rather than offering temporary
          solutions
        </h1>
        <p>
          Project Khudi is committed to providing free small-scale businesses
          while simultaneously imparting valuable skills and offering support to
          entrepreneurs and startups in subsequent phases.
        </p>
        <button className="text-sm px-7 mt-4 mb-4 pr-7 font-semibold text-white bg-[#4C3F7C] p-3  rounded-md">
          Learn More
        </button>
      </div>
      <div className="first-section-second-div">
        <img src={kid1} alt="" />
        <div className="sliders-component">
          <FirstSectionSlider />
        </div>
      </div>
      <div className="first-section-third-div">
        <img src={totalProjects} id="totalprojectsPic" alt="" />
        <br />
        <img src={kid2} alt="" id="first-section-third-div-img" />
      </div>
    </div>
  );
}
export default firstSection;
