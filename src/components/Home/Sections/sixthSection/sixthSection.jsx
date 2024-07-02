// import React from "react";
// import "../sixthSection/sixthSection.css";
// import SixthSectionSlider from "../../../Sliders/SixthSectionSlider.jsx";
// function sixthSection() {
//   return (
//     <div className="home-sixth-section">
//       <div className="sixth-container">
//         <div className="sixth-upper-container">
//           <h4>Testimonial</h4>
//           <h2>What People Say About Us</h2>
//           <p>
//             There are many variations of passages of Lorem Ipsum available, but
//             the majority have suffered alteration in some form,
//           </p>
//         </div>
//         <div className="sixth-lower-container">
//           <SixthSectionSlider />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default sixthSection;
import React from "react";
import pictureThirdSection from "../../../Images/third-section-picture.png";

function sixthSection() {
  return (
    <div className="home-third-section">
      <div className="third-container gap-2">
        <div className="left-third-section">
          <img src={pictureThirdSection} alt="picture third section" />
        </div>
        <div className="right-third-section">
          <h4>About Us</h4>
          <h2>We Can Save More Lifes With Your Helping Hand.</h2>
          <p>
            Project Khudi started in 2022 as a youth-led initiative in
            Rawalpindi, Pakistan. Founded by Zain Ul Abideen Baloch (Founder)
            and Mohammad Noor Khan (Co-Founder), both students at Foundation
            University, the project arose from their concern about the country's
            economic crisis where they preferred not to be the audience but form
            community to solve it from the root cause one day
          </p>
          <ul>
            <li>
              Their idea resonated with other young people, and Project Khudi
              quickly grew to involve students from over 5 universities,
              including Military College of Signals, ARID, NDU, NUML, and Fatima
              Jinnah. This widespread support shows how eager Pakistani youth
              are to contribute to their country's development when given the
              chance.
            </li>
            <li>
              Project Khudi wants to create an Eco System where everyone helps
              each other grow and stand on feet from individual level. In the
              future, they plan to support startups and entrepreneurs,
              encouraging a culture of innovation and business creation.
            </li>
          </ul>
          <button>More About</button>
        </div>
      </div>
    </div>
  );
}
export default sixthSection;
