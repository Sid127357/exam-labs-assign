import React from "react";
import GuarnteeImg from "../assets/images/guarntee.png";
const Guarantee = () => {
  return (
    <div className="card green-light p-4 guarntee-card">
      <HeaderSec />
      <Description />
    </div>
  );
};
const HeaderSec = () => (
  <div className="d-flex align-items-center gap-3">
    <img src={GuarnteeImg} alt="" className="img" />
    <div>
      <h2 className="fs-6 green-text-clr fw-semibold">
        Satisfaction Guaranteed
      </h2>
      <h3 className="mt-2">
        <span className="fw-semibold">98.4%</span> Pass Rate
      </h3>
    </div>
  </div>
);
const Description = () => (
  <p className="mt-3">
    Our team works hard to provide students with high exam practice test
    questions and compelling learning experiences. We're confident of the
    quality level of the products we offer and provide no hassle satisfaction
    guarantee.
  </p>
);
export default Guarantee;
