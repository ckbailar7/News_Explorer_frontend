import React from "react";
import "../blocks/Preloader.css";

const Preloader = ({}) => {
  return (
    <div className="preloader__container">
      <div className="circle-preloader"></div>
      <p>Searching for news...</p>
    </div>
  );
};

export default Preloader;
