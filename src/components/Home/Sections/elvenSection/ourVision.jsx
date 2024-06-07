import React from "react";
import pictureThirdSection from "../../../Images/ourvistion.jpg";
import ouevition from "../../../Images/ouevition1.jpg";
const OurVision = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col m-8">
        <div className="flex-1 p-5 pt-10 md:space-y-5">
          <h4 className="text-xl font-bold">Our Vision</h4>
          <h2 className=" text-lg  font-semibold ">
          Bring Pakistan Back on its feet & live as a dignified state

          </h2>
          <p className="text-xl">
            With abundant resources and a youthful population comprising 60% of
            its citizens, Pakistan holds immense potential. Despite facing
            numerous challenges, Pakistanis have shown resilience and remarkable
            success. Our vision is to transform Pakistan into a leading global
            economy through collective effort and strategic initiatives.
          </p>
          <ul className="list-disc list-inside text-xl">
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
         
        </div>
        <div className="flex-1 space-y-2">
          <img
            className="rounded-3xl h-72 w-full object-cover"
            src={pictureThirdSection}
            alt="Empowering a Prosperous Future"
          />
          <img
            className="rounded-3xl  h-72 w-full object-cover"
            src={ouevition}
            alt="Empowering a Prosperous Future"
          />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
