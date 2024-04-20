// FeaturedResources.jsx
import React from "react";
import wind from "../Assets/Wind.png";
import ship from "../Assets/Ship.png";
import fire from "../Assets/Forestfire.png";
import garden from "../Assets/garden.png";

const resources = [
  {
    title: "What are Carbon Credits and how do they work?",
    image: wind,
    status: "Coming Soon...",
  },
  {
    title: "How Businesses and Organizations Can Reduce Their Carbon Emissions",
    image: ship,
    status: "Coming Soon...",
  },
  {
    title: "What are Carbon Credits and how do they work?",
    image: fire,
    status: "Coming Soon...",
  },
  {
    title: "What are the different carbon credit technologies?",
    image: garden,
    status: "Coming Soon...",
  },
];

const ResourceCard = ({ title, image, status }) => (
  <div
    className="relative w-80 group rounded-3xl overflow-hidden"
    style={{ height: "570px" }}
  >
    <img
      src={image}
      alt={title}
      className="w-full h-[600px] rounded-3xl object-cover transition-all duration-700 group-hover:scale-110"
    />
    <div className="absolute backdrop-blur bottom-0 w-full p-3 bg-stone-400 bg-opacity-90 text-white rounded-b-3xl h-2/6 flex flex-col justify-between items-center  font-semibold">
      <div className="text-2xl  text-left">{title}</div>
      <div className="text-2xl font-semibold mb-0">{status}</div>
    </div>
  </div>
);

const FeaturedResources = () => {
  return (
    <div className="bg-[#33FF0014] p-8 ">
      <h2 className="text-6xl font-bold text-center text-[#1a5130] mb-20 mt-10">
        Featured Resources
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 ">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
      <div className="text-center mt-20">
        <button className="text-white text-3xl bg-[#1A5130] transition-colors duration-500 hover:bg-white hover:text-[#1a5130] hover:border hover:border-[#1a5130] font-medium py-2 px-6 rounded-full w-72 h-16 mb-10">
          More Resources
        </button>
      </div>
    </div>
  );
};

export default FeaturedResources;
