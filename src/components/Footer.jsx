import React from "react";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";



const Footer = () => {
    return (
      <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div className="flex-[1] flex flex-col justify-start mr-10">
            <h1 className=" font-semibold text-3xl pb-4 text-white">
              GeoAutoSales
            </h1>
            <p
              className={`${styles.paragraph} mt-4 max-w-[312px] text-dimWhite`}
            >
              1234 Mian Street Unit 9<br />
              Denver CO 12345
              <br />
              123-456-7890
            </p>
          </div>

          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {footerLinks.map((footerlink) => (
              <div
                key={footerlink.title}
                className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
              >
                {/* here we have titles: useful links, community and partners  */}
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-[white]">
                  {footerlink.title}
                </h4>
                <ul className="list-none mt-4">
                  {footerlink.links.map((link, index) => (
                    <li
                      // all the list links and names
                      key={link.name}
                      className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:translate-x-3 transition duration-200 ease-linear cursor-pointer ${
                        index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copy right text, first div on top is with line and arrangment of footer copy n icons */}
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
          <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
            Ⓒ 2024 GeoAutoSales | All Rights Reserved.
          </p>

          {/* social icon lists */}
          <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>
      </section>
    );

  
};

export default Footer;
