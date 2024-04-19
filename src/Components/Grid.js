import React from 'react';
import Boot from '../Assets/Boot.png';
import leaf from '../Assets/leaf.png';
import earth from '../Assets/earth.png';
import money from '../Assets/money.png';

const GalleryGrid = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-4 mx-8 py-4">
      <div className="col-span-2 row-span-2 relative">
        <img
          src={Boot}
          alt="Large landscape"
          className="w-full h-full object-cover rounded-lg mb-4 transition duration-300 transform hover:scale-105 hover:blur-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50 rounded-lg">
          <h2 className="text-white text-4xl my-4">PRECISE TRACKING</h2>
          <p className="text-white text-xl text-left justify-center mx-4 font-bold">We carefully check how much CO2 is offest by each project,so we can promise you lasting impact</p>
        </div>
      </div>
      <div className="col-start-2 justify-center items-center flex row-start-3 text-5xl font-bold text-[#1A5130]">
        WHY CHOOSE US?
      </div>
      <div className="row-span-3 col-start-3 row-start-1 relative">
        <img
          src={money}
          alt="money"
          className="w-full h-full object-cover rounded-lg mb-4 transition duration-300 transform hover:scale-105 hover:blur-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50 rounded-lg">
        <h2 className="text-white text-4xl my-4">EVERY DOLLAR COUNTS</h2>
          <p className="text-white text-lg font-bold">Our projects wouldn't happen without yoursupport. With DeCarbonn, your money makes a real impact.</p>
        </div>
      </div>
      <div className="row-span-3 col-start-1 row-start-3 relative">
        <img
          src={earth}
          className="w-full h-full object-cover rounded-lg mb-4 transition duration-300 transform hover:scale-105 hover:blur-lg"
          alt="earth"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-white text-lg font-bold">INTERNATIONALLY RECOGNISED CREDITS ISSUER</h1>
        </div>
      </div>
      <div className="col-span-2 row-span-2 col-start-2 row-start-4 relative">
        <img
          src={leaf}
          alt="leaf"
          className="w-full h-full object-cover rounded-lg mb-4 transition duration-300 transform hover:scale-105 hover:blur-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-white text-2xl my-4 font-bold">REGULAR UPDATES</h1>
          <p className="text-white text-lg font-bold">We get data straight from projects on the ground, so you can track your impact, month by month.</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;
