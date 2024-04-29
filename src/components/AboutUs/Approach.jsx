
import React from "react";
import img from "../../assets/img/approch.jpg";

const Approach = () => {
  return (
    <div className=" flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14">
      {/* content section  */}
      <div className="w-full md:w-2/4 space-y-4">
        <h1 className=" text-4xl font-bold ">Our Approch</h1>
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]"></div>

        <h2 className=" font-semibold text-lg lg:text-2xl">
          Empower individuals to achieve sustainable mobility solutions and
          inspire a positive impact on the environment.
        </h2>
        <p className=" text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          quisquam!
        </p>
        <p className=" text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          maiores obcaecati est natus fugiat officiis, iste ut harum consequatur
          laboriosam praesentium non velit perferendis perspiciatis temporibus,
          error nemo itaque autem.
        </p>
      </div>

      {/* img section  */}
      <div className="w-full md:w-2/5">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Approach;