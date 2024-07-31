import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

function Nav(props) {
  return (
    <div>
        <nav className='position-relative'>
            <button type='submit' className='btn btn-close border position-absolute top-0 end-0 m-3'></button>
            <div className='nav-box vh-100 position-relative d-flex flex-column justify-content-center'>
                <a href='/' title="Logo" className='position-absolute top-0 start-0 end-0 fs-2 text-center text-decoration-none'>
                    Protocodes
                </a>
                
                <ul className="nav nav-pills flex-column border-bottom-0 m-auto">
                    <li title='Home' className='nav-item'>
                        <Link to="/" className={'nav-link d-flex gap-2 align-items-center p-1 px-2 ' + props.homeActive}>
                            <FontAwesomeIcon icon="home" className='fs-4' />
                            <span className='fs-4 d-inline'> Home</span>
                        </Link>
                    </li>
                    <li title='About' className='nav-item'>
                        <Link to="/about" className={'nav-link d-flex gap-2 align-items-center p-1 px-2 ' + props.aboutActive}>
                            <FontAwesomeIcon icon="user" className='fs-4' />
                            <span className='fs-4 d-inline'> About</span>
                        </Link>
                    </li>
                    <li title='Services' className='nav-item'>
                        <Link to="/services" className={'nav-link d-flex gap-2 align-items-center p-1 px-2 ' + props.servicesActive}>
                            <FontAwesomeIcon icon="list" className='fs-4' />
                            <span className='fs-4 d-inline'> Services</span>
                        </Link>
                    </li>
                    <li title='Portfolio' className='nav-item'>
                        <Link to="/portfolio" className={'nav-link d-flex gap-2 align-items-center p-1 px-2 ' + props.portfolioActive}>
                            <FontAwesomeIcon icon="briefcase" className='fs-4' />
                            <span className='fs-4 d-inline'> Portfolio</span>
                        </Link>
                    </li>
                    <li title='Contact' className='nav-item'>
                        <Link to="/contact" className={'nav-link d-flex gap-2 align-items-center p-1 px-2 ' + props.contactActive}>
                            <FontAwesomeIcon icon="comments" className='fs-4' />
                            <span className='fs-4 d-inline'> Contact</span>
                        </Link>
                    </li>
                </ul>

                <div className='d-flex flex-column gap-2 position-absolute bottom-0 start-0 end-0 mb-3'>
                    <button className='btn btn-primary p-1 d-block m-auto'><FontAwesomeIcon icon="cog" className='fs-4' /></button>
                    <button className='btn btn-primary p-1 d-block m-auto'><FontAwesomeIcon icon="moon" className='fs-4' /></button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav;
