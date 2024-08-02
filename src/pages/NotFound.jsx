import React, { useState } from 'react';
import Nav from '../components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <div className="container-fluid">          
        <div className="row">
          <div className="nav-container col-md-3 vh-100 bg-body z-3" style={{left: left}}>
            <Nav closeNav={handleClose} />
          </div>
          <div className="col-md-9 vh-100 overflow-auto">
            <div className="w-100 border-bottom bg-body d-block d-md-none position-sticky top-0 p-2 z-2">
              <button className='btn border' onClick={handleOpen}><FontAwesomeIcon icon='bars' /></button>
            </div>
            <section className='d-flex align-items-center justify-content-center'>
              <div className='text-center'>
                <h1 className='fw-bolder display-1'>404</h1>
                <h4>Sorry we couldn't find the page.</h4>
                <p>But don't worry, you can find plenty of other things on our hompage</p>
                <a href='/' className='btn btn-primary'>Back to homepage</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NotFound;
