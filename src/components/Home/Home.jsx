import React from "react";
import "../Home/Home.css";
import FirstSection from "./Sections/firstSection/firstSection.jsx";
import SecondSection from "./Sections/secondSection/secondSection.jsx";
import ThirdSection from "./Sections/thirdSection/thirdSection.jsx";
import FourthSection from "./Sections/fourthSection/fourthSection.jsx";
import FifthSection from "./Sections/fifthSection/fifthSection.jsx";
import OurVision from "./Sections/elvenSection/ourVision.jsx";
import SeventhSection from "./Sections/seventhSection/seventhSection";
import TenthSection from "./Sections/tenthSection/tenthSection";
const Home = () => {
  return (
    <div className="">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <OurVision />
      <FourthSection />
      <FifthSection />
      
      <TenthSection />
    </div>
  );
};
export default Home;
