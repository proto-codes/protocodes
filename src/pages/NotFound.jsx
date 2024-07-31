import React from 'react';
import Nav from '../components/Nav';

function NotFound() {
  return (
    <div>
      <div className="container-fluid">          
        <div className="row">
          <div className="nav-container col-md-3 vh-100 border-end bg-body z-3">
            <Nav />
          </div>
          <div className="col-md-9 vh-100 overflow-auto">
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
