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
      <div className="container-fluid">          
        <div className="row">
          <div className="nav-container col-md-3 vh-100 bg-body z-3" style={{left: left}}>
            <Nav portfolioActive='btn-custom-color active' closeNav={handleClose} />
          </div>
          <div className="col-md-9 vh-100 overflow-auto">
            <div className="w-100 border-bottom bg-body d-block d-md-none position-sticky top-0 p-2 z-2">
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
