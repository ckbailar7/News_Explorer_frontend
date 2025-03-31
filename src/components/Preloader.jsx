import React from "react";
import "../blocks/Preloader.css";

const Preloader = ({}) => {
  return (
    <div className="circle-preloader">
      <div className="circle-preloader__animation"></div>
      <p>Searching for news...</p>
    </div>
  );
};

export default Preloader;
