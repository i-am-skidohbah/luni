import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const  
 handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleMenuToggleClick = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  return (
    <div className="page-wrapper">
      <div className="nav-wrapper">
        <div className="grad-bar"></div>
        <nav className={`navbar ${isMobileNavActive ? 'mobile-nav' : ''}`}>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png" alt="Company Logo"  
 />
          <button className={`menu-toggle ${isMobileNavActive ? 'is-active' : ''}`} onClick={handleMenuToggleClick}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className={`nav ${isSearchActive ? 'search' : 'no-search'}`}>
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#">About</a></li>
            <li className="nav-item"><a href="#">Work</a></li>
            <li className="nav-item"><a href="#">Careers</a></li>  

            <li className="nav-item"><a href="#">Contact Us</a></li>
            <li className="nav-item  
 search-icon" onClick={handleSearchClick}>
              <i className="fas fa-search"></i>
            </li>
            <input className={`search-input ${isSearchActive ? 'search-active' : ''}`} type="text" placeholder="Search.." />
          </ul>
        </nav>
      </div>
      <section className="headline">
        <h1>Lightup Nigeria Solar Power</h1>
        <p>“Lightup Nigeria Solar Power Ltd offers innovative, affordable, and sustainable solar energy solutions to empower homes and businesses across Nigeria, 
          reducing energy costs and promoting environmental responsibility.”</p>
      </section>
      <section className="features">
        <div className="feature-container">
          <img src="https://cdn-images-1.medium.com/max/2000/1*HFAEJvVOq4AwFuBivNu_OQ.png" alt="Flexbox Feature" />
          <h2>Flexbox Featured</h2>
          <p>This pen contains use of flexbox for the headline and feature section! We use it in our mobile navbar and show the power of mixing css grid and flexbox.</p>
        </div>
        <div className="feature-container">
          <img src="https://blog.webix.com/wp-content/uploads/2017/06/20170621-CSS-Grid-Layout-710x355-tiny.png" alt="Flexbox Feature" />
          <h2>CSS Grid Navigation</h2>
          <p>While flexbox is used for the the mobile navbar, CSS grid is used for the desktop navbar showing many ways we can use both.</p>
        </div>
        <div className="feature-container">
          <img src="https://www.graycelltech.com/wp-content/uploads/2015/06/GCT-HTML5.jpg" alt="Flexbox Feature" />
          <h2>Basic HTML5</h2>
          <p>This pen contains basic HTML to setup the page to display the responsive navbar.</p>
        </div>
      </section>
    </div>
  );
}



  



export default App;
