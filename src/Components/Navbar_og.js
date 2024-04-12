import React from "react";
import logo from "../Assets/deCarbonn_logo.png";


export default function Navbar1() {
  return (
    <div className="sticky top-0 z-50 flex w-full h-36 backdrop-blur bg-stone-200 bg-opacity-75  items-center px-5">
      <div to="/" className="flex items-center gap-2 ml-5">
        <img src={logo} alt="DeCarbonn logo" className="w-20 h-20" />
        <span className="text-6xl font-extrabold ">DeCarbonn</span>
      </div>
      <div className="flex justify-center items-center ml-28">
        <ul className="flex gap-10">
          <li className="transition duration-300 transform hover:scale-105 hover:underline">
            <div to="/" className="font-semibold text-2xl">
              Home
            </div>
          </li>
          <li className="transition duration-300 transform hover:scale-105 hover:underline">
            <div to="/" className="font-semibold text-2xl">
              Carbon Calculator
            </div>
          </li>
          <li className="transition duration-300 transform hover:scale-105 hover:underline">
            <div to="/" className="font-semibold text-2xl">
              Projects
            </div>
          </li>
          <li className="transition duration-300 transform hover:scale-105 hover:underline">
            <div to="/" className="font-semibold text-2xl ">
              About
            </div>
          </li>
          <li className="transition duration-300 transform hover:scale-105 hover:underline">
            <div to="/" className="font-semibold text-2xl">
              Team
            </div>
          </li>
          <li className="transition duration-300 transform hover:scale-105 hover:underline">
            <div to="/" className="font-semibold text-2xl">
              Resources
            </div>
          </li>
        </ul>
        <button className="bg-white flex gap-2 justify-center items-center font-semibold text-xl rounded-3xl h-12  py-2 px-4 ml-14 w-48 hover:bg-[#1a5130] hover:text-white shadow-md hover:shadow-lg transition duration-300">
          <div to="/signup" className="text-2xl font-semibold">
            Connect
          </div>
        
        </button>
      </div>
    </div>
  );
}