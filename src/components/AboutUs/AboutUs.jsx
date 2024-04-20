import React from "react";
import OurTeam from "./OurTeam";
import Approach from "./Approach";

const AboutUs = () => {
  return (
    <div className=" container p-24 pb-30">
      <div>
        <h1 className=" font-bold text-4xl text-center">
          About <span className=" text-primary">US</span>
        </h1>
      </div>

      <OurTeam />
      <Approach />
    </div>
  );
};

export default AboutUs;
