import React from 'react'
import img from "../../../assets/img/merso.jpg";

const HeroImg = () => {
  return (
    <div className=" bg-black text-white">
      <div className=" w-full md:w-5/4 mt-2">
        <img src={img} alt="img" />
      </div>
      
    </div>
  );
}

export default HeroImg