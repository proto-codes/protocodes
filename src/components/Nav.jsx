import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemeToggler from './ThemeToggler';

function Nav(props) {
  return (
    <div>
        <nav>
            <div className='vh-100 position-relative d-flex flex-column justify-content-center'>
                <div className='position-absolute top-0 start-0 end-0 fs-2 mt-4'>
                    <div className="d-flex justify-content-end d-md-none">
                        <button className='btn btn-close border mb-3 fs-5' onClick={props.closeNav}></button>
                    </div>
                    <div className="position-relative text-center">
                        <a href='/' title="Logo" className='site-logo fs-2 mt-5 text-auto text-decoration-none'>
                            <span className='amita-font display-5'>P</span>rotocodes
                        </a>
                    </div>
                </div>
                
                <ul className="nav nav-pills flex-column border-bottom-0 m-auto">
                    <li title='Home' className='nav-item'>
                        <Link to="/" className={'nav-link d-flex gap-2 align-items-center p-1 px-2 text-auto ' + props.homeActive}>
                            <FontAwesomeIcon icon="home" className='fs-4' />
                            <span className='fs-4 d-inline'> Home</span>
                        </Link>
                    </li>
                    <li title='About' className='nav-item'>
                        <Link to="/about" className={'nav-link d-flex gap-2 align-items-center p-1 px-2 text-auto ' + props.aboutActive}>
                            <FontAwesomeIcon icon="user" className='fs-4' />
                            <span className='fs-4 d-inline'> About</span>
                        </Link>
                    </li>
                    <li title='Services' className='nav-item'>
                        <Link to="/services" className={'nav-link d-flex gap-2 align-items-center p-1 px-2 text-auto ' + props.servicesActive}>
                            <FontAwesomeIcon icon="list" className='fs-4' />
                            <span className='fs-4 d-inline'> Services</span>
                        </Link>
                    </li>
                    <li title='Portfolio' className='nav-item'>
                        <Link to="/portfolio" className={'nav-link d-flex gap-2 align-items-center p-1 px-2 text-auto ' + props.portfolioActive}>
                            <FontAwesomeIcon icon="briefcase" className='fs-4' />
                            <span className='fs-4 d-inline'> Portfolio</span>
                        </Link>
                    </li>
                    <li title='Contact' className='nav-item'>
                        <Link to="/contact" className={'nav-link d-flex gap-2 align-items-center p-1 px-2 text-auto ' + props.contactActive}>
                            <FontAwesomeIcon icon="comments" className='fs-4' />
                            <span className='fs-4 d-inline'> Contact</span>
                        </Link>
                    </li>
                </ul>

                <div className='d-flex flex-column gap-2 position-absolute bottom-0 start-0 end-0 mb-3'>
                    <div className="m-auto">
                        <ThemeToggler />
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav;
