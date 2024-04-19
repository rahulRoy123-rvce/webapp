import React from 'react';
import Video from '../Assets/Video.mp4';

const Banner = () => {
  return (
    <div>
      <section className="relative flex flex-col overflow-hidden text-white h-screen">
        <video
          className="absolute z-0 w-full h-full object-cover"
          src={Video}
          type="video/mp4"
          autoPlay
          muted
          loop
        />
        <div className="relative z-10 flex flex-col text-left justify-end h-full p-8 pb-16 ">
          <h1 className="text-7xl font-semibold mb-10">
            INVEST IN THE <br />
            FUTURE OF EARTH
          </h1>
          <p className="text-2xl md:text-4xl font-semibold ">
            On a mission to finance and remove 1,000,000 tonnes of CO2 from
            <br /> the atmosphere by 2028.
          </p>
        </div>
      </section>
      <div className="bg-[#fdfaec] flex justify-center items-center w-full h-32 drop-shadow-lg">
        <div className="flex z-10 justify-center items-center mx-auto space-x-4">
          <div className="font-extrabold text-2xl md:text-5xl font-serif">
            Trusted By:
          </div>
          <div className="flex">
            <span className="font-extrabold text-2xl md:text-5xl font-serif">
              AIR
            </span>
            <span className="text-2xl md:text-5xl font-serif font-extralight">
              MINERS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;