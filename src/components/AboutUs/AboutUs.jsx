import React from "react";
import OurTeam from "./OurTeam";
import Approach from "./Approach";
import FooterPages from "../FooterPages";
// import WhyUs from '../components/LandingPage/WhyUs/WhyUs'
import WhyUs from '../../components/LandingPage/WhyUs/WhyUs'

const AboutUs = () => {
  return (
    <div className=" container p-24 pb-30">
      <div>
        <h1 className=" font-bold text-4xl text-gradient text-center">
          About Us
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
