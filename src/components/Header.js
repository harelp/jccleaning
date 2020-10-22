import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">J&C</div>
        <ul className="menu">
          <li>Home</li>
          <li>Why Us</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="heading">
        <h1>
          <span className="heading_primary">Cleaning is our #1 Priority</span>
        </h1>

        <a href="!#" className="btn btn--white" style={{ marginTop: '45px' }}>
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
