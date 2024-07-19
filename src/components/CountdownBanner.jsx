import React from "react";
import counterClock from "../assets/images/counterClock.png";
import CountDownTimer from "./CountDownTimer";

const CountdownBanner = () => {
  return (
    <section className="counter-block">
      <div className="container">
        <div className="d-flex justify-content-md-between position-relative counter-row align-items-md-center px-4 py-md-2 py-3  mt-4 flex-column flex-md-row gap-2">
          <ClockImage />
          <OfferTitle />
          <TimerSection />
          <CouponCode couponCode="EXAMSTART" />
        </div>
      </div>
    </section>
  );
};
const OfferTitle = () => (
  <h2 className="text-uppercase fs-6 fw-semibold ms-md-4">Limited time Offer</h2>
);

const ClockImage = () => (
  <div className="clock-image">
    <img src={counterClock} alt="Countdown Clock" />
  </div>
);
const CouponCode = ({ couponCode }) => (
  <h2 className="fs-6 text-capitalize coupon-code">
    <span className="fw-semibold pe-3 text-uppercase"> get 10% Off</span> use
    code:
    <span className="fw-semibold "> {couponCode}</span>
  </h2>
);
const TimerSection = () => (
  <p className="timer-section">
    Ends in:{" "}
    <span className="fw-semibold">
      <CountDownTimer />
    </span>
  </p>
);
export default CountdownBanner;
