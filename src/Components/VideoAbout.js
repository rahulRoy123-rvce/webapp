import React from "react";

const VideoAbout = () => {
  return (
    <div className="bg-[#fdfaec] w-full my-16">
      <div className="p-12">
        <div
          className=" rounded-xl w-full flex flex-col group "
          style={{ height: "670px" }}
        >
          <h1 className="text-6xl font-bold text-[#1A5130] mb-10">
            Know More About Us
            <br /> And Our Journey
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:flex-1 md:pr-10 flex flex-col justify-center items-center p-5 gap-5">
              <p className="text-[#403E3E] text-left text-4xl mb-4">
                At Decarbonn, we envision a world where every business,
                regardless of its size, plays a part in creating a sustainable
                future.
              </p>
              <p className="text-[#403E3E] text-4xl text-left mb-4">
                We are here to guide and support this transition, one carbon
                credit at a time.
              </p>
              <p className="text-[#403E3E] text-left text-3xl mb-6">
                Join us in our journey towards a sustainable future. Together,
                we can make a difference.
                
              </p>
              <p>
              <button className="text-white bg-[#1A5130] transition-colors duration-300 hover:bg-white hover:text-[#1a5130] hover:border hover:border-[#1a5130] font-medium py-2 px-6 rounded-full w-72 h-12">
                About Us
              </button>
              </p>
             
            </div>
            <div className="md:flex-1 mt-6 md:mt-0">
              <div className="bg-gray-200 w-full h-96 flex items-center justify-center rounded-lg">
                {/* Placeholder for video or image */}
                <span className="text-gray-500 ">video</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAbout;
