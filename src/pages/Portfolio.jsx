import React, { useState } from 'react';
import Nav from '../components/Nav';
import PortfolioSec from '../components/PortfolioSec';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Portfolio() {
  const [left, setLeft] =  useState('-100%');

  const handleOpen = () => {
      setLeft('0');
  };

  const handleClose = () => {
    setLeft('-100%');
  };

  return (
    <div>
      <div className="bg-color container-fluid">          
        <div className="row">
          <div className="bg-color nav-container col-md-3 vh-100 z-3" style={{left: left}}>
            <Nav portfolioActive='btn-custom-color active' closeNav={handleClose} />
          </div>
          <div className="bg-sec col-md-9 vh-100 overflow-auto">
            <div className="bg-sec w-100 border-bottom d-block d-md-none position-sticky top-0 p-2 z-2">
              <button className='btn border fs-4' onClick={handleOpen}><FontAwesomeIcon icon='bars' /></button>
            </div>
            <PortfolioSec />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
