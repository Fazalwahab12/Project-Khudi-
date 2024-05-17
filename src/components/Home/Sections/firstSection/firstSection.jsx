// import React from "react";
// import "./firstSection.css";
// import kid1 from "../../../Images/kid1.png";
// import totalProjects from "../../../Images/totalprojects.png";
// import kid2 from "../../../Images/kid2.png";
// import FirstSectionSlider from "../../../Sliders/FirstSectionSlider.jsx";
// function firstSection() {
//   return (
//     <div className="home-first-section m-5">
//       <div className="first-section-first-div ">
//         <h3>Join us in empowering Pakistan economically.</h3>
//         <h1>
// We believe in addressing root causes rather than offering temporary
// solutions
//         </h1>
//         <p>
// Project Khudi is committed to providing free small-scale businesses
// while simultaneously imparting valuable skills and offering support to
// entrepreneurs and startups in subsequent phases.
//         </p>
//         <button className="text-sm px-7 mt-4 mb-4 pr-7 font-semibold text-white bg-[#4C3F7C] p-3  rounded-md">
//           Learn More
//         </button>
//       </div>
//       <div className="first-section-second-div">
//         <img src={kid1} alt="" />
//         <div className="sliders-component">
//           <FirstSectionSlider />
//         </div>
//       </div>
//       <div className="first-section-third-div">
//         <img src={totalProjects} id="totalprojectsPic" alt="" />
//         <br />
//         <img src={kid2} alt="" id="first-section-third-div-img" />
//       </div>
//     </div>
//   );
// }
// export default firstSection;
import React from "react";
import joinus from "../../../Images/joinus.jpeg";
const firstSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className=" flex md:flex-row flex-col m-4 md:gap-9 md:m-16">
        <div className=" flex-1">
          <h1 className="max-w-2xl pb-4 pt-12  text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl  text-[#4C3F7C]">
            Join us in empowering Pakistan economically
          </h1>
          <p className="max-w-2xl pb-6 pt-4 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            We believe in addressing root causes rather than offering temporary
            solutions
          </p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Project Khudi is committed to providing free small-scale businesses
            while simultaneously imparting valuable skills and offering support
            to entrepreneurs and startups in subsequent phases.
          </p>

          <a
            href="# "
            className="inline-flex mt-9 bg-[#4C3F7C] items-center justify-center px-5 py-3 text-base font-medium text-center  text-white border  rounded-lg  focus:ring-4   "
          >
            Learn More
          </a>
        </div>

        <div className="  w-full flex-1">
          <img src={joinus} alt="mockup" className="rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default firstSection;
