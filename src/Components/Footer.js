import React from 'react';
import logo from '../Assets/deCarbonn_logo.png';

import Instagram from '../UI/Instagram';
import Whatsapp from '../UI/Whatsapp';
import Facebook from '../UI/Facebook';
import X from '../UI/X';


// Import your icons from wherever you have them, e.g. react-icons, your own svg files etc.

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white p-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
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
            <div className="mt-8 flex justify-center space-x-6">
              {/* Replace these placeholders with your actual icons */}
              <img src={Instagram} className=''/>
              <a href="#" className="text-white hover:text-green-500">
                WhatsApp Icon
              </a>
              <a href="#" className="text-white hover:text-green-500">
                Facebook Icon
              </a>
              <a href="#" className="text-white hover:text-green-500">
                X Icon
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-between mt-8 md:mt-12 border-t border-gray-700 pt-8">
          <div className="md:flex md:items-center md:justify-start">
            <nav className="flex space-x-10">
              <a href="#" className="text-base text-white hover:text-green-500">
                Home
              </a>
              <a href="#" className="text-base text-white hover:text-green-500">
                Project
              </a>
              <a href="#" className="text-base text-white hover:text-green-500">
                About
              </a>
            </nav>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-white">
              Made with <span className="text-red-600">&hearts;</span> at Matii Labs
            </p>
            <p className="text-center text-base text-white">
              Copyright &copy; 2024 DeCarbonn
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
