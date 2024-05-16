import React from "react";
import FourthMedicine from "../../../Images/medicine_fourth.png";
import Food from "../../../Images/food.png";
import Education from "../../../Images/education.png";
const fourthSection = () => {
  return (
    <div id="campaigns" className="">
      <div className=" m-5 ">
        <div className=" flex flex-col justify-center items-center">
          <h4 className=" text-2xl text-[#212158]">
            We love to serve humanity
          </h4>
          <h2>Our Recent Campaigns</h2>
          <p>
            Project Khudi fights poverty for empowering Pakistan, whereas
            supporting its people in crisis and celebration.
          </p>
        </div>
        <div className="  ">
          <div className="flex  md:mx-16 mt-6  gap-10 flex-col  md:flex-row">
            <div className=" shadow-lg rounded-lg">
              <img src={Education} className="" />
              <br />
              <h2 className=" p-3">
                <a href="#">
                  In 2023 and 2024, we organised Ramadan drives for a full 30
                  days (4000+ People Served)
                </a>
              </h2>
            </div>
            <div className=" shadow-lg rounded-lg">
              <img src={Food} className="" />
              <br />
              <h2 className=" p-3">
                <a href="#">
                  Delivered Free small businesses to deserving individuals (85+
                  FREE Setups delivered)
                </a>
              </h2>
            </div>
            <div className="shadow-lg rounded-lg">
              <img src={FourthMedicine} className="" />
              <br />
              <h2 className=" p-3">
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
