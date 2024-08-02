import React from 'react';
import GIGM from '../assets/img/GIGM_preview.jpg';
import netflix from '../assets/img/Netflix_preview.jpg';
import login from '../assets/img/login_page_preview.jpg';
import web from '../assets/img/web_preview.jpg';
import policify from '../assets/img/policify_preview.jpg';
import transport from '../assets/img/transport_site_preview.jpg'

function PortfolioSec(props) {
  return (
    <div>
        <section className={'portfolio-section ' + props.borderBottom}>
            <h1 className='sec-info'>Portfolio</h1>

            <h3 className='text-center mb-4'>My Past Project:</h3>
            <div className="row">
                <div className="col-md-4">
                    <img src={GIGM} alt="Portfolio" className='w-100 mb-3 border-5 border rounded' />
                    <img src={netflix} alt="Portfolio" className='w-100 mb-3 border-5 border rounded' />
                </div>
                <div className="col-md-4">
                    <img src={login} alt="Portfolio" className='w-100 mb-3 border-5 border rounded' />
                    <img src={web} alt="Portfolio" className='w-100 mb-3 border-5 border rounded' />
                </div>
                <div className="col-md-4">
                    <img src={policify} alt="Portfolio" className='w-100 mb-3 border-5 border rounded' />
                    <img src={transport} alt="Portfolio" className='w-100 mb-3 border-5 border rounded' />
                </div>
            </div>
        </section>
    </div>
  )
}

export default PortfolioSec
