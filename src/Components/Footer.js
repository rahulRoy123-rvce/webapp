import React from "react";
import logo from "../Assets/whiteLogo.png";

import Instagram from "../UI/Instagram";
import Whatsapp from "../UI/Whatsapp";
import Facebook from "../UI/Facebook";
import X from "../UI/X";

const Footer = () => {
  return (
    <footer
      className="bg-[#1a5130] text-white w-full "
      style={{ height: "500px" }}
    >
      <div className="w-full mx-auto  ">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and query section */}
          <div className="mb-6 w-full md:w-auto md:mb-0 p-10 ml-20">
            <a href="#" className="flex items-center space-x-2 mb-20 ">
              <img src={logo} alt="DeCarbonn Logo" className="h-20 w-20" />
              <span className="font-bold text-6xl">DeCarbonn</span>
            </a>
            <div className="flex flex-col justify-center items-center ">
              <p className="text-4xl mb-6 mr-28">Have any query?</p>
              <div className="flex space-x-2 gap-20 ">
                <input
                  type="text"
                  placeholder="write your query here..."
                  className="p-3 px-5 rounded-md  text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white"
                />
                <button className="bg-white text-green-700 rounded-md font-bold px-6 h-10 hover:bg-slate-200">
                  Send
                </button>
              </div>
            </div>
            <div className="flex space-x-4 mb-6 md:mb-0 my-4 mt-14 ml-5">
              <a href="#" className="hover:text-gray-300">
                <Instagram />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Whatsapp />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Facebook />
              </a>
              <a href="#" className="hover:text-gray-300">
                <X />
              </a>
            </div>
          </div>

          {/* Company and Initiatives section */}
          <div className="flex flex-wrap md:space-x-20 mb-6 md:mb-0 mr-40">
            <div className="mb-6 md:mb-0">
              <h3 className="font-medium mb-8 text-3xl">COMPANY</h3>
              <ul className="text-3xl flex flex-row gap-8">
                <li>
                  <a href="#" className="hover:text-gray-300 leading-tight">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 leading-tight">
                    Project
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 leading-tight">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="border-t border-white border-opacity-25 my-6"></div> */}

        {/* Bottom section */}
        <div className="flex flex-col items-center text-2xl font-light">
          <p className="text-center py-2">Made with ❤️ at Maiti Labs</p>
          <p>
            Copyright © 2024 <strong className="font-bold">DeCarbonn</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
