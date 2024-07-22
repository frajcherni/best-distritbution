import React from 'react';
import './NavbarWithBackground.css';

const NavbarWithBackground = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" style={{ height: '22vh' }}>
        <div className="container">
          <a className="navbar-brand" href="#home">BrandName</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#link">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="background-image-container">
        <img src="src/assets/sac.jpg" alt="Background" className="background-image" />
      </div>
    </div>
  );
};

export default NavbarWithBackground;
