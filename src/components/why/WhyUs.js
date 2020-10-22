import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {box} from "./boxhelper";

const WhyUs = () => {
  const reasonBox = box.map((box,key)=>{
    return (
    <div className="reasons_box" key={key}>
          <FontAwesomeIcon icon={box.icon} className="reasons_box_icon"/>
    <p className="reasons_box_text">{box.text}</p>
        </div>)
  })

  return (
    <div className="container reasons_body">
      <div className="slogan_alt">Reasons to Choose J&C</div>
      <div className="reasons">
        {reasonBox}
      </div>
    </div>
  );
};

export default WhyUs;
