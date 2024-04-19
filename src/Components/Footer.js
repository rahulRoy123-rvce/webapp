import React from "react";
import logo from "../Assets/deCarbonn_logo.png";

import Instagram from "../UI/Instagram";
import Whatsapp from "../UI/Whatsapp";
import Facebook from "../UI/Facebook";
import X from "../UI/X";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white p-10">
      <div className="flex flex-row justify-between max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
           <img src={logo} alt="logo" className="h-10" />
          </div>
          
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-white">
              Have any query?
            </p>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                name="query"
                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                placeholder="write your query here..."
              />
              <button
                type="button"
                className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-green-700 text-white text-sm"
              >
                Send
              </button>
            </div>
            <div className="flex space-x-4 mb-6 md:mb-0 my-4">
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

          <div className="flex flex-wrap md:space-x-20 mb-6 md:mb-0">
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold mb-2">COMPANY</h3>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Project
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">INITIATIVES</h3>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Maiti Labs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    DeCarbonn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    GreenBit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-center py-2">Made with ❤️ at Maiti Labs</p>
          <p>
            Copyright © 2024 <strong>DeCarbonn</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
