import React from "react";

const Help = () => {
  return (
    <div className="help-sec card mt-4">
      <h2 className="fs-6 fw-semibold mb-2">Need Help? Contact Us</h2>
      <Support />
    </div>
  );
};
const Support = () => (
  <a href="mailto:support@exam-labs.com" className="text-decoration-none">
    {" "}
    Cutomer Support
  </a>
);

export default Help;
