import React from 'react';
import {scrollToref} from './helper';

const Header = (props) => {
  return (
    <header ref={props.scrollTo[0]}>
      <nav>
        <div className="logo">J&C</div>
        <ul className="menu">
          <li onClick={()=>scrollToref(props.scrollTo[0])}>Home</li>
          
          <li onClick={()=>scrollToref(props.scrollTo[1])}>Services</li>
          <li onClick={()=>scrollToref(props.scrollTo[2])}>Why Us</li>
          <li onClick={()=>scrollToref(props.scrollTo[3])}>Contact</li>
        </ul>
      </nav>

      <div className="heading">
        <h1>
          <span className="heading_primary">Cleaning is our #1 Priority</span>
        </h1>

        <button type="button" onClick={()=>scrollToref(props.scrollTo[3])} href="!#" className="btn btn--white" style={{ marginTop: '45px' }}>
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
