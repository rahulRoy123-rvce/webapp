// BannerCard.jsx
import React from 'react';
import CabonCalc from '../Assets/CarbonCalc.png';
import Projects from '../Assets/Projects.png';
import Trackhere from '../Assets/Trackhere.png';

const BannerCard = () => {
  return (
    <div>
    <div className="max-w mx-auto p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <img
          src={CabonCalc}
          alt="Industrial smokestacks emitting smoke"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="md:w-1/2 p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Decarbonn your Business
        </h1>
        <p className="text-lg text-gray-700 mb-5">
          Invest in Carbon Offset project
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          CALCULATE YOUR CARBON FOOTPRINTS
        </h2>
        <p className="mb-5 text-gray-600">
          Use our open-source calculator to find out how much CO2 your business emits.
        </p>
        <button className="text-white bg-green-600 hover:bg-green-700 font-medium py-2 px-4 rounded">
          Carbon Calculator
        </button>
      </div>
      
    </div>
    <div className=" p-5 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
      <div className="md:flex-1 md:pr-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Decarbonn your Business
        </h1>
        <p className="text-lg font-semibold text-gray-700 mb-4">
          Invest in Carbon Offset project
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          CALCULATE YOUR CARBON FOOTPRINTS
        </h2>
        <p className="mb-5 text-gray-600">
          Use our open-source calculator to find out how much CO2 your business emits.
        </p>
        <button className="text-white bg-green-600 hover:bg-green-700 font-medium py-2 px-6 rounded">
          Carbon Calculator
        </button>
      </div>
      <div className="md:flex-1">
        <img
          src={Projects}
          alt="Industrial smokestacks emitting smoke"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
    <div className="max-w mx-auto p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <img
          src={Trackhere}
          alt="Industrial smokestacks emitting smoke"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="md:w-1/2 p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Decarbonn your Business
        </h1>
        <p className="text-lg text-gray-700 mb-5">
          Invest in Carbon Offset project
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          CALCULATE YOUR CARBON FOOTPRINTS
        </h2>
        <p className="mb-5 text-gray-600">
          Use our open-source calculator to find out how much CO2 your business emits.
        </p>
        <button className="text-white bg-green-600 hover:bg-green-700 font-medium py-2 px-4 rounded">
          Carbon Calculator
        </button>
      </div>
      
    </div>
   
   </div>
  );
};

export default BannerCard;
