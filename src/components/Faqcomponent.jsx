import React, { useState } from 'react';
import './FAQComponent.css'; // Ensure this path is correct

const FaqComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Yt Managing Problem",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      question: "Lust Managing Problem",
      answer: "Components are the building blocks of a React application's UI."
    },
    {
      question: "Video Editing Problem",
      answer: "Components are the building blocks of a React application's UI."
    },
    {
      question: "Template Managing Problem",
      answer: "Components are the building blocks of a React application's UI."
    },
    {
      question: "Pic Managing Problem",
      answer: "Components are the building blocks of a React application's UI."
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="faq-container">
        <h2 className="header" style={{ color: '#b393d3' }}>
            <b>Frequently Asked Questions</b>
          </h2>
      <div className="faq">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className={`accordion ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            <div
              className={`panel ${activeIndex === index ? 'show' : ''}`}
            >
              <p className="details-description">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;
