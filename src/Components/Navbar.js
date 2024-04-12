import React, { useState } from 'react';
import logo from '../Assets/logo_deCarbonn.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky font-bold text-black top-0 z-50 backdrop-blur bg-opacity-75 text- shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:space-x-10">
          
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <img src={logo} alt="logo" className="h-10" />
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {/* Icon for the button, like a hamburger icon or something similar */}
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          <div className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
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
                    {/* Icon for closing the menu */}
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['Home', 'Carbon Calculator', 'Projects', 'About', 'Team', 'Resources'].map((text, index) => (
                  <a key={index} href="#" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-900 hover:bg-gray-50">
                    {text}
                  </a>
                ))}
                <a href="#" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                  Connect
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <ul className="flex space-x-8">
              {['Home', 'Carbon Calculator', 'Projects', 'About', 'Team', 'Resources'].map((text, index) => (
                <li key={index} className="text-black mt-4 hover:text-gray-900 cursor-pointer">
                  {text}
                </li>
              ))}
              <button className="whitespace-nowrap text-base  text-black font-bold hover:text-gray-900">
                Connect
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
