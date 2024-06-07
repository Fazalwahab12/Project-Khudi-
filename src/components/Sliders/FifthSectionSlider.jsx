import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import FifthSectionSliderData from "../Sliders/FifthSectionSliderData.jsx";


function FifthSectionSlider() {
  const items = FifthSectionSliderData.map((type, index) => {
    return (
      <div className="m-6 text-center" key={index}>
        <div className="relative  h-[470px] w-80 mx-auto rounded-lg overflow-hidden">
          <img
            src={type.image}
            alt={type.name}
            className="object-cover h-full w-full"
          />
        </div>
        <h3 className="mt-4 font-bold text-lg">{type.name}</h3>
        <p className="text-sm text-gray-600">{type.designation}</p>
      </div>
    );
  });

  return (
    <div>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={{
          0: { items: 1 },
          767: { items: 2 },
          1023: { items: 3 },
          1439: { items: 4 },
        }}
        disableDotsControls
        disableButtonsControls
        infinite
        autoPlay
        autoPlayInterval={3000}
      />
    </div>
  );
}

export default FifthSectionSlider;
