// BannerCard.jsx
import React from "react";
import CabonCalc from "../Assets/CarbonCalc.png";
import Projects from "../Assets/Projects.png";
import Trackhere from "../Assets/Trackhere.png";

const BannerCard = () => {
  return (
    <div className="bg-[#fdfaec] w-full">
      <div className="p-12">
        <h1 className="text-[#1a5130] text-6xl font-bold mb-20 leading-tight">
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
            <div className="md:w-1/2 p-10 flex flex-col gap-14 ">
              <h2 className="text-5xl font-bold text-[#1A5130] mb-2 text-left leading-tight">
                CALCULATE YOUR CARBON FOOTPRINTS
              </h2>
              <p className="mb-5 text-left text-3xl text-[#403E3E] font-serif leading-tight ">
                On a mission to finance and remove
                <br />
                1,000,000 tonnes of CO2 from the
                <br /> atmosphere by 2028.
              </p>
              <div>
                <button className="text-white text-3xl bg-[#1A5130] transition-colors duration-300 hover:bg-white hover:text-[#1a5130] hover:border hover:border-[#1a5130] font-medium  py-2 px-6 rounded-full w-80 h-16 cursor-pointer">
                  Carbon Calculator
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12">
        <div
          className="border border-black rounded-xl w-full flex  group "
          style={{ height: "620px" }}
        >
          <div className="md:flex-1 md:pr-10 md:w-1/2 flex flex-col gap-8 justify-center items-center p-10">
            <div>
              <h2 className="text-5xl  font-bold text-[#1A5130] text-left mb-16 leading-tight">
                CONNECT WITH A PROJECT AND INVEST
              </h2>
              <p className="mb-5 text-left text-3xl text-[#403E3E] font-serif leading-tight">
                Choose a project and we'll connect
                <br /> you with the on-ground team before
                <br /> you invest.
              </p>
            </div>

            <div>
              <button className="text-white  bg-[#1A5130] transition-colors duration-300 hover:bg-white hover:text-[#1a5130] hover:border hover:border-[#1a5130] font-medium text-3xl py-2 px-6 rounded-full w-52 h-16 mt-8 flex justify-center items-center">
                <span>Projects</span>
              </button>
            </div>
          </div>
          <div
            className="md:w-[820px] h-full overflow-hidden rounded-lg"
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

      <div className="p-12">
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
                src={Trackhere}
                alt="Industrial smokestacks emitting smoke"
                className="w-full h-full object-cover rounded-2xl transition-all duration-700 group-hover:scale-110"
              />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col gap-10">
              <h2 className="text-5xl font-bold text-[#1A5130] mb-2 text-left leading-tight">
                EARN CREDITS AND TRACK YOUR INVESTMENT
              </h2>
              <p className="mb-5 text-left text-3xl text-[#403E3E] font-serif leading-tight">
                Recieve your carbon credits in your
                <br /> wallet and track your investment
                <br /> impact every month
              </p>
              <div>
                <button className="text-white text-3xl bg-[#1A5130] transition-colors duration-300 hover:bg-white hover:text-[#1a5130] hover:border hover:border-[#1a5130] font-semibold py-2 px-6 rounded-full w-52 h-16">
                  Track Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
