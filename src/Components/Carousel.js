
import React, { useState } from "react";
import Card from "./Card";
import frame1 from "../Assets/frame1.png";
import frame2 from "../Assets/frame2.png";
import frame3 from "../Assets/frame3.png";

const cardData = [
  {
    title: "Carbon",
    imageSrc: frame1,
    chartType: "bar",
    category: "Carbon",
  },
  {
    title: "Wildlife",
    imageSrc: frame2,
    chartType: "gauge",
    category: "Wildlife",
  },
  {
    title: "Communities",
    imageSrc: frame3,
    chartType: "pie",
    category: "Communities",
  },
  // Add more card data objects as needed
];

const Carousel = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handleClick = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="p-8 bg-[#fdfaec] flex flex-col justify-center items-center">
      {/* Tabs for selecting cards */}
      <div className="text-6xl text-[#1A5130] my-8 font-bold">See Carbon in Action</div>
      <div className="flex justify-center bg-[#fdfaec] mb-4">
        {cardData.map((card, index) => (
          <button
            key={card.category}
            className={`px-8 py-3 w-[240px] mx-1 transition duration-200 hover:drop-shadow-lg ${
              activeCard === index
                ? "bg-[#1A5130] text-white rounded-full"
                : "bg-white rounded-full"
            }`}
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