import React from 'react';
import star from '../../sass/images/star.png';

const WhyUs = () => {
  return (
    <div className="container">
      <div className="slogan">Reasons to Choose J&C</div>
      <div className="reasons">
        <div className="reasons_box">
          <img src={star} className="reasons_box_icon"></img>
          <h3 className="lol">Explore the world</h3>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
