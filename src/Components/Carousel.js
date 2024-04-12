// Carousel.jsx
import React, { useState } from 'react';
import Card from './Card'; // Assume we have a Card component
import frame1 from '../Assets/frame1.png';
import frame2 from '../Assets/frame2.png';
import frame3 from '../Assets/frame3.png';

const cardData = [
  {
    title: 'Carbon',
    imageSrc: frame1,
    chartType: 'bar',
    category: 'Carbon',
  },
  {
    title: 'Wildlife',
    imageSrc: frame2,
    chartType: 'gauge',
    category: 'Wildlife',
  },
  {
    title: 'Communities',
    imageSrc: frame3,
    chartType: 'pie',
    category: 'Communities',
  },
  // Add more card data objects as needed
];

const Carousel = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handleClick = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="p-4 bg-[#fdfaec]">
      {/* Tabs for selecting cards */}
      <div className="flex justify-center bg-[#fdfaec] mb-4">
        {cardData.map((card, index) => (
          <button
            key={card.category}
            className={`px-8 py-2 mx-1 ${activeCard === index ? 'bg-[#1A5130] text-white rounded-xl' : 'bg-white rounded-xl'}`}
            onClick={() => handleClick(index)}
          >
            {card.category}
          </button>
        ))}
      </div>

      {/* Carousel Cards */}
      <div className="flex flex-col items-center">
        <Card {...cardData[activeCard]} />
      </div>
    </div>
  );
};

export default Carousel;
