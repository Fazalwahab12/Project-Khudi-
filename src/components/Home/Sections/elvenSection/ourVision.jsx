import React from "react";
import pictureThirdSection from "../../../Images/third-section-picture.png";

const OurVision = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col m-8">
        <div className="flex-1 p-5 pt-10 md:space-y-10">
          <h4 className="text-2xl text-[#212158]">Our Vision</h4>
          <h2 className="text-xl text-[#212158]">
            Empowering a Prosperous Future
          </h2>
          <p>
            With abundant resources and a youthful population comprising 60% of
            its citizens, Pakistan holds immense potential. Despite facing
            numerous challenges, Pakistanis have shown resilience and remarkable
            success. Our vision is to transform Pakistan into a leading global
            economy through collective effort and strategic initiatives.
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Youth Empowerment:</strong> Equipping the youth with
              essential skills and fostering entrepreneurial spirit.
            </li>
            <li>
              <strong>Economic Growth:</strong> Supporting small-scale
              businesses and startups, securing investments, and creating a
              robust support ecosystem.
            </li>
            <li>
              <strong>Self-Sufficiency:</strong> Promoting self-reliance and
              ensuring Pakistan makes independent decisions on the global stage.
            </li>
          </ul>
          <button className="bg-[#212158] p-4 text-white rounded-xl">
            More About
          </button>
        </div>
        <div className="flex-1">
          <img
            className="rounded-3xl"
            src={pictureThirdSection}
            alt="Empowering a Prosperous Future"
          />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
