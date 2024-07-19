// src/pages/Checkout.js

import Breadcrumb from "../components/Breadcrumb";
import CountdownBanner from "../components/CountdownBanner";
import Note from "../components/Note";
import SideBar from "../components/SideBar";

const Checkout = () => {
  return (
    <>
      <Breadcrumb />
      <Note
        primaryHeading="Secure One-Step Checkout"
        secHeading="Your Product Will Become Available Immediately After Purchase"
      />
      <CountdownBanner/>
      <section className="content-block mt-5 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-9 d-none d-md-block"></div>
            <div className="col-md-3"><SideBar/></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
