import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function ContactSec() {
  return (
    <div>
        <section className='contact-section'>
            <h1 className='sec-info'>Contact</h1>

            <h3 className="text-primary text-center">Have You Any Question?</h3>
            <h5 className="text-center">I AM AT YOUR SERVICES</h5>
            <div className="row my-5">
                <div className="col-md-3 text-center">
                    <FontAwesomeIcon className='fs-3' icon='phone' />
                    <h4>Call Us On:</h4>
                    <p className='fs-5 fw-light'><a href="tel:+2349135104681" className='text-body text-decoration-none'>+234 913 510 4681</a></p>
                </div>
                <div className="col-md-3 text-center">
                    <FontAwesomeIcon className='fs-3' icon='map-marked-alt' />
                    <h4>Office:</h4>
                    <p className='fs-5 fw-light'>Umuahia</p>
                </div>
                <div className="col-md-3 text-center">
                    <FontAwesomeIcon className='fs-3' icon={faWhatsapp} />
                    <h4>WhatsApp:</h4>
                    <p className='fs-5 fw-light'><a href="http://wa.me/2349013041098" className='text-body text-decoration-none'>+234 901 304 1098</a></p>
                </div>
                <div className="col-md-3 text-center">
                    <FontAwesomeIcon className='fs-3' icon='globe-africa' />
                    <h4>Country:</h4>
                    <p className='fs-5 fw-light'>Nigeria</p>
                </div>
            </div>
            <h3 className="text-primary text-center">SEND ME A MAIL</h3>
            <h5 className="text-center mb-5">I AM VERY RESPONSIVE TO MESSAGES</h5>

            <div className="form">
                <form action="https://formspree.io/f/maygrjyl" method="post">
                    <div className="contact-flex-box mb-2">
                        <div className="form-floating w-100">
                            <input type="text" id='name' className='form-control' name="name" autocomplete="name" placeholder='Name' required />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating w-100">
                            <input type="email" id="email" className='form-control text-lowercase' name="email" autocomplete="email" placeholder="Email" required />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    
                    <div className="form-floating mb-2">
                        <input type="text" id="subject" className='form-control' name="subject" placeholder="Subject" required />
                        <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="form-floating mb-2">
                        <textarea name="message" id="message" className='form-control h-auto' cols={30} rows={7} placeholder='Message' required></textarea>
                        <label htmlFor="message">Message</label>
                    </div>

                    <button type="submit" className="btn btn-primary fs-4">Send Message</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default ContactSec;
