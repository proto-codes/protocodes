import React, { useState } from 'react';
import Nav from '../components/Nav';
import profileImg from '../assets/img/portfolio_dp.jpg';
import AboutSec from '../components/AboutSec';
import ServicesSec from '../components/ServicesSec';
import PortfolioSec from '../components/PortfolioSec';
import ContactSec from '../components/ContactSec';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  const [left, setLeft] = useState('-100%');

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
          <div
            className="bg-sec nav-container col-md-3 vh-100 z-3"
            style={{ left: left }}
          >
            <Nav homeActive="btn-custom-color active" closeNav={handleClose} />
          </div>

          <div className="bg-sec col-md-9 vh-100 overflow-auto">
            <div className="bg-sec w-100 border-bottom d-block d-md-none position-sticky top-0 p-2 z-2">
              <button className="btn border fs-4" onClick={handleOpen}>
                <FontAwesomeIcon icon="bars" />
              </button>
            </div>

            <section className="px-md-2 d-flex justify-content-center border-bottom">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h2>
                    Hello, my name is{' '}
                    <span className="text-custom-color fw-bold fs-1 amita-font">
                      Tochukwu Elekwachi
                    </span>
                  </h2>

                  <h4 className="text-muted mt-2">
                    Software Developer • Project Manager
                  </h4>

                  <div className="text-custom-color fs-3 mt-2">
                    <Typewriter
                      words={[
                        'Welcome to my site!',
                        "I'm a Software Developer",
                        "I'm a Project Manager",
                        'I build & deliver scalable products',
                      ]}
                      loop={0}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </div>

                  <p className="fs-5 mt-3">
                    Welcome! I’m a Software Developer and Project Manager with a
                    strong focus on building scalable, efficient, and
                    user-friendly applications while ensuring projects are
                    delivered on time and aligned with business goals. I combine
                    hands-on development experience with project planning,
                    coordination, and team collaboration to turn ideas into
                    reliable digital products. I enjoy solving complex problems,
                    leading execution, and delivering real value—let’s connect!
                  </p>

                  <div className="d-flex gap-2 mb-3">
                    <Link to="/contact" className="btn btn-custom-color fs-4">
                      Let’s Work Together
                    </Link>
                    <Link to="/portfolio" className="btn btn-custom-color fs-4">
                      Portfolio
                    </Link>
                  </div>
                </div>

                <div className="col-md-6 text-center">
                  <div className="portfolio-img-container position-relative p-2 rounded">
                    <img
                      src={profileImg}
                      alt="Tochukwu Elekwachi"
                      className="w-100 rounded-circle shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            <AboutSec borderBottom="border-bottom" />
            <ServicesSec borderBottom="border-bottom" />
            <PortfolioSec borderBottom="border-bottom" />
            <ContactSec />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
