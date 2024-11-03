import React, { useState } from 'react';
import Nav from '../components/Nav';
import profileImg from '../assets/img/my_image.png';
import AboutSec from '../components/AboutSec';
import ServicesSec from '../components/ServicesSec';
import PortfolioSec from '../components/PortfolioSec';
import ContactSec from '../components/ContactSec';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import TypingEffect from 'react-typing-effect';

function Home() {
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
            <Nav homeActive='btn-custom-color active' closeNav={handleClose} />
          </div>
          <div className="col-md-9 vh-100 overflow-auto">
            <div className="w-100 border-bottom bg-body d-block d-md-none position-sticky top-0 p-2 z-2">
              <button className='btn border fs-4' onClick={handleOpen}><FontAwesomeIcon icon='bars' /></button>
            </div>
            <section className='home-section d-flex align-items-center justify-content-center border-bottom'>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h2>Hello, my name is <span className='text-custom-color fw-bold fs-1 amita-font'>Tochukwu Elekwachi</span></h2>
                  <div className="text-custom-color fs-1">
                    <TypingEffect
                      text={["Welcome to my site!", "I am a Web Developer!", "I am a Graphic Designer!"]}
                      speed={100} // Typing speed in milliseconds
                      eraseDelay={1000} // Delay before starting to erase
                      eraseSpeed={50} // Erase speed in milliseconds
                    />
                  </div>
                  <p className='fs-5'>Welcome! I' m a skilled and creative Web developer with a passion for creating beautiful, responsive and user-friendly websites. I've worked on varieties of web projects and i get excited about new projects, let's connect.</p>
                  <div className="d-flex gap-2 mb-3">
                    <Link to='/contact' className="btn btn-custom-color fs-4">Hire Me</Link>
                    <Link to='/portfolio' className="btn btn-custom-color fs-4">Portfolio</Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="portfolio-img-container position-relative p-4">
                    <img src={profileImg} alt="Tochukwu Elekwachi" className='portfolio-img w-100 rounded' />
                  </div>
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
