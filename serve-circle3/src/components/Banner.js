// src/Banner.js
import React from 'react';
import './Banner.css';

const Banner = ({heading,desc,button,image}) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>{heading}</h1>
        <p>{desc}</p>
        <button className="start-now-button">{button}</button>
      </div>
      <div className="banner-image">
        <img src={image} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
