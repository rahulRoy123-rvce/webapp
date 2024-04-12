
// FAQ.jsx
import React from 'react';
import AccordionItem from './Accordianitem';

const FAQ = () => {
  return (
    <div className="bg-[#fdfaec] p-4 md:p-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto bg-[#33FF0014] rounded-xl">
        <AccordionItem title="How do I invest in a Project?">
          <p>Here is the answer to how you can invest in a project...</p>
        </AccordionItem>
        <AccordionItem title="Can I get more details on the project than already on the site?">
          <p>Here is the answer to getting more details on the project...</p>
        </AccordionItem>
        <AccordionItem title="When will I receive my Carbon Credits in my account?">
          <p>Here is the answer to when you will receive your Carbon Credits...</p>
        </AccordionItem>
      </div>
    </div>
  );
};

export default FAQ;
