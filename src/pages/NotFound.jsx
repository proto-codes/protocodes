import React, { useState } from 'react';
import Nav from '../components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function NotFound() {
  const [left, setLeft] =  useState('-100%');

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
          <div className="bg-color nav-container col-md-3 vh-100 z-3" style={{left: left}}>
            <Nav closeNav={handleClose} />
          </div>
          <div className="bg-sec col-md-9 vh-100 overflow-auto">
            <div className="bg-sec w-100 border-bottom d-block d-md-none position-sticky top-0 p-2 z-2">
              <button className='btn border fs-4' onClick={handleOpen}><FontAwesomeIcon icon='bars' /></button>
            </div>
            <section className='d-flex align-items-center justify-content-center'>
              <div className='text-center'>
                <h1 className='fw-bolder display-1'>404</h1>
                <h4>Sorry we couldn't find the page.</h4>
                <p>But don't worry, you can find plenty of other things on our hompage</p>
                <Link to='/' className='btn btn-custom-color'>Back to homepage</Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NotFound;
