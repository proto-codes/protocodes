import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ServicesSec(props) {
  return (
    <div>
        <section className={'services-section ' + props.borderBottom}>            
            <h1 className='sec-info'>Services</h1>

            <div className="d-block d-sm-flex gap-2 mb-2">
                <div className="services-container col text-center border rounded d-flex flex-column p-2 mb-2">
                    <div>
                        <FontAwesomeIcon className='services-icon fs-3 btn text-custom-color p-2' icon="laptop-code" />
                    </div>
                    <h4>Website Development</h4>
                    <p className='fw-light'>Creating websites from scratch, implementing design elements, and coding functionalities to ensure a seamless user experience.</p>
                </div>
                <div className="services-container col text-center border rounded d-flex flex-column p-2 mb-2">
                    <div>
                        <FontAwesomeIcon className='services-icon fs-3 btn text-custom-color p-2' icon="mobile-alt" />
                    </div>
                    <h4>E-Commerce Solutions</h4>
                    <p className='fw-light'>Creating online stores, integrating payment gateways, and implementing functionalities that facilitate online transactions and shopping experiences.</p>
                </div>
            </div>
            <div className="d-block d-sm-flex gap-2 mb-2">
                <div className="services-container col text-center border rounded d-flex flex-column p-2 mb-2">
                    <div>
                        <FontAwesomeIcon className='services-icon fs-3 btn text-custom-color p-2' icon="code" />
                    </div>
                    <h4>Back End Development</h4>
                    <p className='fw-light'>Managing the server-side of websites, handling databases, server interactions, and ensuring the functionality and performance of the site through language like PHP and Python, etc.</p>
                </div>
                <div className="services-container col text-center border rounded d-flex flex-column p-2 mb-2">
                    <div>
                        <FontAwesomeIcon className='services-icon fs-3 btn text-custom-color p-2' icon="search" />
                    </div>
                    <h4>Site Maintenance</h4>
                    <p className='fw-light'>Regularly updating and optimizing websites, fixing bugs, adding new features, and ensuring security measures are up to date.</p>
                </div>
            </div>
            <div className="d-block d-sm-flex gap-2 mb-2">
                <div className="services-container col text-center border rounded d-flex flex-column p-2 mb-2">
                    <div>
                        <FontAwesomeIcon className='services-icon fs-3 btn text-custom-color p-2' icon="palette" />
                    </div>
                    <h4>Front End Development</h4>
                    <p className='fw-light'> Crafting the visible parts of a website that users interact with directly, involving HTML, CSS and JavaScript to build responsive and user-friendly interfaces.</p>
                </div>
                <div className="services-container col text-center border rounded d-flex flex-column p-2 mb-2">
                    <div>
                        <FontAwesomeIcon className='services-icon fs-3 btn text-custom-color p-2' icon="bullhorn" />
                    </div>
                    <h4>Web App Development</h4>
                    <p className='fw-light'>Designing and building web-based applications that operate within bd-flexsers, providing solutions for specific purposes like social networking, project management, or data analysis.</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ServicesSec;
