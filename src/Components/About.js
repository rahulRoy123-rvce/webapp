// BannerCard.jsx
import React from 'react';
import CabonCalc from '../Assets/CarbonCalc.png';
import Projects from '../Assets/Projects.png';
import Trackhere from '../Assets/Trackhere.png';

const BannerCard = () => {
  return (
    <div className="bg-[#fdfaec]">
       <h1 className="text-3xl font-bold text-[#1A5130] mb-3">
          Decarbonn your Business<br/>
          <span className="text-3xl text-[#1A5130]">Invest in Carbon Offset project</span>
        </h1>
    <div className="max-w mx-auto p-4 rounded-lg  flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <img
          src={CabonCalc}
          alt="Industrial smokestacks emitting smoke"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="md:w-1/2 p-4">
       
        
        <h2 className="text-5xl font-bold text-[#1A5130] mb-2 text-left">
          CALCULATE YOUR CARBON FOOTPRINTS
        </h2>
        <p className="mb-5 text-left text-3xl text-black">
          Use our open-source calculator to<br/> find out how much CO2 your<br/> business emits.
        </p>
        <button className="text-white bg-[#1A5130] hover:bg-green-700 font-medium py-2 px-6 rounded-xl">
          Carbon Calculator
        </button>
      </div>
      
    </div>
    <div className=" p-5 rounded-lg  flex flex-col md:flex-row items-center justify-between">
      <div className="md:flex-1 md:pr-10">
        
        <h2 className="text-5xl font-bold text-[#1A5130] mb-2 text-left">
          CALCULATE YOUR CARBON FOOTPRINTS
        </h2>
        <p className="mb-5 text-left text-3xl text-black">
          Use our open-source calculator to find out how much CO2 your business emits.
        </p>
        <button className="text-white bg-[#1A5130] hover:bg-green-700 font-medium py-2 px-6 rounded-xl">
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
    <div className="max-w mx-auto p-4 rounded-lg  flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <img
          src={Trackhere}
          alt="Industrial smokestacks emitting smoke"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="md:w-1/2 p-4">
        
        <h2 className="text-5xl font-bold text-[#1A5130] mb-2 text-left">
          CALCULATE YOUR CARBON FOOTPRINTS
        </h2>
        <p className="mb-5 text-left text-3xl text-black">
          Use our open-source calculator to find out how much CO2 your business emits.
        </p>
        <button className="text-white bg-[#1A5130] hover:bg-green-700 font-medium py-2 px-6 rounded-xl">
          Carbon Calculator
        </button>
      </div>
      
    </div>
   
   </div>
  );
};

export default BannerCard;
