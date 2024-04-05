import React, { useState } from "react";
// import { GiSteeringWheel } from "react-icons/gi";
import { GiCarWheel } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuMotion } from "react-icons/cg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <header className=" fixed w-full z-10 bg-secondary text-white py-4">
      {/* desktop navigation section  */}
      <nav className=" container flex justify-between items-center">
        <div className=" flex items-center gap-2">
          {/* <GiSteeringWheel size={35} className=" text-primary" /> */}
          <GiCarWheel size={35} className=" text-primary" />
          <a href="/" className="font-bold text-2xl">
            GeoAutoSales
          </a>
        </div>
        <div className=" hidden md:flex items-center gap-8 font-medium text-xl">
          <a
            href="/"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            Home
          </a>
          <a
            href="/"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            About Us
          </a>
          <a
            href="/"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            Our Cars
          </a>
          <a
            href="/"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            Services
          </a>
          <button className=" hidden lg:flex border-2 border-primary text-lg px-4 rounded-md hover:bg-primary transition duration-200 ease-linear">
            Sign In
          </button>
        </div>

        <div className=" md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <CgMenuMotion size={35} onClick={handleChange} />
          )}
        </div>
      </nav>
      {/* responsive closing menu */}
      <div
    //   ამ კლასნეიმში დევს მენიუს გამოსაწევი ლისტი ჩამონათტვალიტ
        className={`${menu ? "translate-x-0" : "-translate-x-full"}
       md:hidden flex flex-col absolute bg-secondary text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}
      >
        <a
          href="/"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          Home
        </a>
        <a
          href="/"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          About Us
        </a>
        <a
          href="/"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          Our Cars
        </a>
        <a
          href="/"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          Services
        </a>
      </div>
    </header>
  );
};

export default Navbar;


