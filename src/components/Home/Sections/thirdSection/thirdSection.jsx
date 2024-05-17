import React from "react";
import pictureThirdSection from "../../../Images/aboutus.jpg";

function thirdSection() {
  return (
    <div id="About">
      <div className=" flex md:flex-row flex-col m-8 ">
        <div className=" flex-1">
          <img
            className=" rounded-3xl"
            src={pictureThirdSection}
            alt="picture third section"
          />
        </div>
        <div className=" flex-1 space-x-8 space-y-10">
          <h4 className=" text-2xl px-4 text-[#212158]">About Us</h4>
          <h2 className="text-xl text-[#212158]">
            We Can Save More Lifes With Your Helping Hand.
          </h2>
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
          <button className=" bg-[#212158] p-4 text-white  rounded-xl">
            More About
          </button>
        </div>
      </div>
    </div>
  );
}
export default thirdSection;
