import React from 'react';
import Nav from '../components/Nav';
import AboutSec from '../components/AboutSec';
import Footer from '../components/Footer';

function About() {
  return (
    <div>
      <div className="container-fluid">          
        <div className="row">
          <div className="nav-container col-md-3 vh-100 border-end bg-body z-3">
            <Nav aboutActive='active' />
          </div>
          <div className="col-md-9 vh-100 overflow-auto">
            <AboutSec />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
