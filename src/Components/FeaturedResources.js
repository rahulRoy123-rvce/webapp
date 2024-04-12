// FeaturedResources.jsx
import React from 'react';
import wind from '../Assets/Wind.png';
import ship from '../Assets/Ship.png';
import fire from '../Assets/Forestfire.png';
import garden from '../Assets/garden.png'

const resources = [
  {
    title: 'What are Carbon Credits and how do they work?',
    image: wind,
    status: 'Coming Soon...'
  },
  {
    title: 'How Businesses and Organizations Can Reduce Their Carbon Emissions',
    image: ship,
    status: 'Coming Soon...'
  },
  {
    title: 'What are Carbon Credits and how do they work?',
    image: fire,
    status: 'Coming Soon...'
  },
  {
    title: 'What are the different carbon credit technologies?',
    image: garden,
    status: 'Coming Soon...'
  },
];

const ResourceCard = ({ title, image, status }) => (
  <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{status}</p>
    </div>
  </div>
);

const FeaturedResources = () => {
  return (
    <div className="bg-green-100 p-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Featured Resources
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {resources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="text-green-600 font-bold">
          More Resources
        </button>
      </div>
    </div>
  );
};

export default FeaturedResources;
