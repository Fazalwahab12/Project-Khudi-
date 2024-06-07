import React from "react";
import FourthMedicine from "../../../Images/Campaigns1.jpeg";
import compagin2 from "../../../Images/compagin2.jpeg";
import Education from "../../../Images/compagin3.jpeg";
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
            <div className=" shadow-lg rounded-2xl  ">
              <img src={compagin2} className="rounded-3xl p-2 " height={50} />
              <br />
              <h2 className="  p-3 text-center justify-center  flex font-bold text-xl">
                <a href="#">
                2023/ 2024 Ramadan Drive 

                </a>
              </h2>
            </div>
            <div className=" shadow-lg rounded-2xl">
              <img src={FourthMedicine} className="rounded-3xl p-2" />
              <br />
              <h2 className="  p-3 text-center justify-center  flex font-bold text-xl">
                <a href="#">
                Empowering not Donating
                </a>
              </h2>
            </div>
            <div className="shadow-lg rounded-2xl">
              <img src={compagin2} className=" rounded-3xl p-2" />
              <br />
              <h2 className=" p-3 text-center justify-center  flex font-bold text-xl">
                <a href="#">
                Flood Relief Campaign

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
