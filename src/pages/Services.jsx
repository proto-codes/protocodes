import React from 'react';
import Nav from '../components/Nav';
import ServicesSec from '../components/ServicesSec';
import Footer from '../components/Footer';

function Services() {
  return (
    <div>
      <div className="container-fluid">          
        <div className="row">
          <div className="nav-container col-md-3 vh-100 border-end bg-body z-3">
            <Nav servicesActive='active' />
          </div>
          <div className="col-md-9 vh-100 overflow-auto">
            <ServicesSec />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
