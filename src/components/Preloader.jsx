import React from 'react';
import './blocks/Preloader.css';

const Preloader = ({}) => {
  return (
    <div className="circle-preloader">
      <div className="circle-preloader__animation"></div>
      <p className="circle-preloader__text">Searching for news...</p>
    </div>
  );
};

export default Preloader;
