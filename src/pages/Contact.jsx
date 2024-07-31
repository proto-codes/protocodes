import React from 'react';
import Nav from '../components/Nav';
import ContactSec from '../components/ContactSec';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div>
      <div className="container-fluid">          
        <div className="row">
          <div className="nav-container col-md-3 vh-100 border-end bg-body z-3">
            <Nav contactActive='active' />
          </div>
          <div className="col-md-9 vh-100 overflow-auto">
            <ContactSec />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
