import React from "react";
import { FaCheck } from "react-icons/fa6";

const WhyChoose = () => {
  const featureItems = [
    { text: "100% Latest Exam Questions", boldPart: "100%" },
    { text: "Accurate & Updated Answers", boldPart: "Answers" },
    { text: "Regular Free Updates", boldPart: "Free" },
    { text: "24/7 Customer Support", boldPart: "24/7" },
    { text: "98.4% Pass Rate", boldPart: "98.4%" },
    { text: "Instant Download", boldPart: "Instant" },
  ];

  return (
    <div className="why-choose-block card mt-5">
      <Header />
      <Features featureItems={featureItems} />
    </div>
  );
};

const Header = () => (
  <>
    <h2 className="text-center fs-6 fw-semibold">Why choose Exam-Labs?</h2>
    <h3 className="text-center mt-3 fs-6">
      Over <span className="green-text-clr fw-semibold">603,068</span>
    </h3>
    <h4 className="text-center fs-6 mt-1">Satisfied Customers Since 2015</h4>
  </>
);

const Features = ({ featureItems }) => (
  <ul className="d-flex flex-column gap-2 mt-3">
    {featureItems.map((item, index) => {
      const parts = item.text.split(item.boldPart);

      return (
        <li key={index} className="feature-item">
          <FaCheck className="green-text-clr" />
          <span className="ps-2">
            {parts[0]}
            <b>{item.boldPart}</b>
            {parts[1]}
          </span>
        </li>
      );
    })}
  </ul>
);

export default WhyChoose;
