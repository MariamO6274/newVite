import React from "react";
import OurTeam from "./OurTeam";
import Approach from "./Approach";
import FooterPages from "../FooterPages";
import WhyUs from '../../components/LandingPage/WhyUs/WhyUs'

const AboutUs = () => {
  return (
    <div className=" container pt-24 pb-30">
      <div>
        <h1 className=" font-bold text-4xl text-gradient text-center">
          About Us and Our Team
        </h1>
      </div>

      <OurTeam />
      <Approach />
      <WhyUs/>
      <FooterPages />
    </div>
  );
};

export default AboutUs;

