import React from 'react';
import logo from '../Assets/deCarbonn_logo.png';

import Instagram from '../UI/Instagram';
import Whatsapp from '../UI/Whatsapp';
import Facebook from '../UI/Facebook';
import X from '../UI/X';

const Footer = () => {
  return (
    <footer className="bg-[#133009] text-white">
      <div className="max-w-6xl mx-auto  py-10">
        <div className="flex flex-wrap justify-between items-center">
        
          <div className="mb-6 w-full md:w-auto md:mb-0">
            <a href="#" className="flex items-center justify-center  space-x-2 mb-4">
              <img src={logo} alt="DeCarbonn Logo " className="h-14" />
              
            </a>
            <div className="flex flex-col">
              <p className="mb-4">Have any query?</p>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="write your query here..."
                  className="p-2 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white"
                />
                <button className="bg-white text-green-700 px-4 rounded-md font-bold">Send</button>
              </div>
            </div>
            <div className="flex space-x-4 mb-6 md:mb-0 my-4">
              <a href="#" className="hover:text-gray-300"><Instagram /></a>
              <a href="#" className="hover:text-gray-300"><Whatsapp /></a>
              <a href="#" className="hover:text-gray-300"><Facebook /></a>
              <a href="#" className="hover:text-gray-300"><X /></a>
            </div>
          </div>

          
          <div className="flex flex-wrap md:space-x-20 mb-6 md:mb-0">
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold mb-2">COMPANY</h3>
              <ul>
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300">Project</a></li>
                <li><a href="#" className="hover:text-gray-300">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">INITIATIVES</h3>
              <ul>
                <li><a href="#" className="hover:text-gray-300">Maiti Labs</a></li>
                <li><a href="#" className="hover:text-gray-300">DeCarbonn</a></li>
                <li><a href="#" className="hover:text-gray-300">GreenBit</a></li>
              </ul>
            </div>
          </div>
        </div>

       
        <div className="flex flex-col items-center">
          <p className="text-center py-2">Made with ❤️ at Maiti Labs</p>
          <p>Copyright © 2024 <strong>DeCarbonn</strong></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;