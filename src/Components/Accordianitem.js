
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl">{title}</span>
        <ChevronDownIcon
          className={`w-6 h-6 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      <div className={`px-6 pb-4 ${!isOpen ? 'hidden' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;