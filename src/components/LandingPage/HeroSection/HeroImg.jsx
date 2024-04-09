import React from 'react'
import img from "../../../assets/img/merso.jpg";

const HeroImg = () => {
  return (
    <div className=" bg-black text-white">
      <div className=" w-full md:w-5/4 mt-2">
        <img src={img} alt="img" />
      </div>
      <div className='flex justify-center items-center'>
        <h1 className=" text-3xl lg:text-6xl ">
          Find Your Perfect Ride Today
        </h1>
      </div>
    </div>
  );
}

export default HeroImg

