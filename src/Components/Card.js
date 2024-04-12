// Card.jsx
import React from 'react';

const Card = ({ title, imageSrc, chartType }) => {
  // You would have some logic to render the chart based on the chartType prop
  const renderChart = () => {
    // Logic to render chart based on chartType
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Card Header */}
      <div className="p-4 border-b">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
      {/* Card Image */}
      <img src={imageSrc} alt={title} className="w-full" />
      {/* Card Chart */}
      <div className="p-4">
        {renderChart()}
      </div>
    </div>
  );
};

export default Card;
