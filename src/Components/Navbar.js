import React, { useState } from "react";
import logo from "../Assets/logo_deCarbonn.png";
import EastIcon from "@mui/icons-material/East";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur  bg-opacity-75 text-black shadow-md py-2">
      <div className="mx-3">
        <div className="flex justify-between items-center py-3 md:space-x-10">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-16" />
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img src={logo} alt="logo" className="h-8 w-auto" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  "Home",
                  "Carbon Calculator",
                  "Projects",
                  "About",
                  "Team",
                  "Resources",
                ].map((text, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-poppins block px-2 py-2 rounded-md text-base font-medium text-black hover:text-gray-900 hover:bg-gray-50 text-center"
                  >
                    {text}
                  </a>
                ))}
                <a
                  href="#"
                  className="flex font-poppins flex-row w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                >
                  <div>Connect</div>
                  <ArrowForwardIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1">
            <ul className="flex space-x-24">
              {["Home", "Projects", "About"].map((text, index) => (
                <li
                  key={index}
                  className="font-poppins text-black text-xl font-semibold hover:scale-105 hover:underline cursor-pointer"
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className=" flex items-center">
            <button className="bg-white mx-4 shadow-lg flex px-2 gap-2 justify-center items-center font-semibold text-xl rounded-3xl h-12 py-2  hover:bg-[#1a5130] hover:text-white  hover:shadow-xl transition duration-300">
              <div to="/" className="text-2xl font-semibold">
                Connect
              </div>
              <EastIcon />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
