import React from 'react';
import Nav from '../components/Nav';
import profileImg from '../assets/img/my_image.png';
import AboutSec from '../components/AboutSec';
import ServicesSec from '../components/ServicesSec';
import PortfolioSec from '../components/PortfolioSec';
import ContactSec from '../components/ContactSec';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <div className="container-fluid">          
        <div className="row">
          <div className="nav-container col-md-3 vh-100 border-end bg-body z-3">
            <Nav homeActive='active' />
          </div>
          <div className="col-md-9 vh-100 overflow-auto overflow-auto">
            <section className='home-section d-flex align-items-center justify-content-center border-bottom'>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h2>Hello, my name is <span className='text-primary fw-bold fs-1'>Tochukwu Elekwachi</span></h2>
                  <h2>I' m a <span className="typingEffect text-primary fw-bold fs-1">Web Developer</span></h2>
                  <p className='fs-5'>Welcome! I' m a skilled and creative Web developer with a passion for creating beautiful, responsive and user-friendly websites. I've worked on varieties of web projects and i get excited about new projects, let's connect.</p>
                  <div className="d-flex gap-2 mb-3">
                    <a href="/contact" className="btn btn-primary fs-4">Hire Me</a>
                    <a href="/portfolio" className="btn btn-primary fs-4">Portfolio</a>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={profileImg} alt="Tochukwu Elekwachi" className='w-100 rounded' />
                </div>
              </div>
            </section>
            <AboutSec borderBottom='border-bottom' />
            <ServicesSec borderBottom='border-bottom' />
            <PortfolioSec borderBottom='border-bottom' />
            <ContactSec />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
