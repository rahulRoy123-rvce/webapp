// BannerCard.jsx
import React from "react";
import CabonCalc from "../Assets/CarbonCalc.png";
import Projects from "../Assets/Projects.png";
import Trackhere from "../Assets/Trackhere.png";

const BannerCard = () => {
  return (
    <div className="bg-[#fdfaec] w-full">
      <div className="p-12">
        <h1 className="text-[#1a5130] text-6xl font-bold mb-20 ">
          Decarbonn your Business
          <br />
          <span className="text-[#1a5130] text-6xl font-bold">
            Invest in Carbon Offset project
          </span>
        </h1>
        {/* */}
        <div
          className="border border-black rounded-xl w-full flex flex-col group "
          style={{ height: "620px" }}
        >
          <div className="max-w mx-auto  rounded-lg  flex flex-col md:flex-row items-center">
            <div
              className="md:w-2/3 h-full overflow-hidden rounded-lg"
              style={{ height: "620px" }}
            >
              <img
                src={CabonCalc}
                alt="Industrial smokestacks emitting smoke"
                className="w-full h-full object-cover rounded-2xl transition-all duration-700 group-hover:scale-110"
              />
            </div>
            <div className="md:w-1/2 p-4 flex flex-col gap-5">
              <h2 className="text-5xl font-bold text-[#1A5130] mb-2 text-left">
                CALCULATE YOUR CARBON FOOTPRINTS
              </h2>
              <p className="mb-5 text-left text-3xl text-black">
                Use our open-source calculator to
                <br /> find out how much CO2 your
                <br /> business emits.
              </p>
              <button className="text-white bg-[#1A5130] transition-colors duration-300 hover:bg-white hover:text-[#1a5130] hover:border hover:border-[#1a5130] font-medium py-2 px-6 rounded-full w-72 h-12">
                Carbon Calculator
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12">
        <div
          className="border border-black rounded-xl w-full flex  group "
          style={{ height: "620px" }}
        >
          <div className="md:flex-1 md:pr-10 md:w-1/2">
            <h2 className="text-5xl font-bold text-[#1A5130] mb-2 text-left">
              CALCULATE YOUR CARBON FOOTPRINTS
            </h2>
            <p className="mb-5 text-left text-3xl text-black">
              Use our open-source calculator to find out how much CO2 your
              business emits.
            </p>
            <button className="text-white bg-[#1A5130] hover:bg-green-750 font-medium py-2 px-6 rounded-xl">
              Carbon Calculator
            </button>
          </div>
          <div
            className="md:w-[750px] h-full overflow-hidden rounded-lg"
            style={{ height: "620px" }}
          >
            <img
              src={Projects}
              alt="Industrial smokestacks emitting smoke"
              className="w-full h-full object-cover rounded-2xl transition-all duration-700 group-hover:scale-110"
            />
          </div>
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
            Use our open-source calculator to find out how much CO2 your
            business emits.
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
