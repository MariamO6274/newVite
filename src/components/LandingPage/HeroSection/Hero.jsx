import React from 'react'
// import img from "../../../assets/img/merso.jpg";
import img from "../../../assets/img/shevi.jpg";


const Hero = () => {
  return (
    <div className=" bg-black text-white">
      {/* <div className=" w-full md:w-5/4 mt-2">
        <img src={img} alt="img" />
      </div> */}
      <div className=" h-screen container flex flex-col justify-center md:flex-row items-center">
        {/* content section  */}

        <div className=" w-full md:w-2/4 space-y-5 mt-2">
          <h1 className=" text-3xl lg:text-6xl font-bold leading-tight text-gradient">
            Find Your Perfect Ride Today
          </h1>
          <p className=" text-lg lg:text-2xl font-medium">
            Over 1000+ New Cars Available Here
          </p>
          <p className=" text-sm lg:text-base ext-dimWhite">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam
            recusandae ratione ducimus molestias ab neque accusamus eveniet
            cumque corrupti.
          </p>

          <div className="flex gap-8">
            <button className="border-2 border-primary py-3 px-4 rounded-md hover:scale-95 transition duration-150 ease-linear">
              Explore More
            </button>
          </div>
        </div>

        {/* img section  */}
        <div className=" w-full md:w-5/4 mt-2">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Hero

