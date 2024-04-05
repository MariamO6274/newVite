import React from 'react'

const Navbar = () => {
  return (
    <header>
      {/* desktop navigation section  */}
      <nav>
        <div>
          {/* <GiSteeringWheel size={35} className=" text-primary" /> */}
          <a href="/">WheelsDeal</a>
        </div>
        <div>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Our Cars</a>
          <a href="/">Services</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar

