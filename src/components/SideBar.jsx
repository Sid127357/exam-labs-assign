import React from "react";
import Guarantee from "./Guarantee";
import WhyChoose from "./WhyChoose";
import Help from "./Help";

const SideBar = () => {
  return (
    <>
      <div className="sidebar-block">
        <Guarantee />
        <WhyChoose/>
        <Help/>
      </div>
    </>
  );
};

export default SideBar;
