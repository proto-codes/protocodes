import React from 'react';
import Nav from '../components/Nav';
import PortfolioSec from '../components/PortfolioSec';
import Footer from '../components/Footer';

function Portfolio() {
  return (
    <div>
      <div className="container-fluid">          
        <div className="row">
          <div className="nav-container col-md-3 vh-100 border-end bg-body z-3">
            <Nav portfolioActive='active' />
          </div>
          <div className="col-md-9 vh-100 overflow-auto">
            <PortfolioSec />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
