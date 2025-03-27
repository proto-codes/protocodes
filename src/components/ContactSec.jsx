import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function ContactSec() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
        const response = await axios.post('https://formspree.io/f/maygrjyl', {
            name,
            email,
            subject,
            message
        }, {
            headers: {
            'Accept': 'application/json'
            }
        });

        if (response.status === 200) {
            setStatus('Success! Your message has been sent.');
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } else {
            setStatus('Oops! Something went wrong.');
        }
        } catch (error) {
        setStatus('Oops! Something went wrong.');
        } finally {
        setIsSubmitting(false);
        }
    };
  
  return (
    <div>
        <section className='px-md-2'>
            <h1 className='sec-info'>Contact</h1>

            <h3 className="text-custom-color text-center">Have You Any Question?</h3>
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
            <h3 className="text-custom-color text-center">SEND ME A MAIL</h3>
            <h5 className="text-center mb-5">I AM VERY RESPONSIVE TO MESSAGES</h5>

            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="contact-flex-box mb-2">
                        <div className="form-floating w-100">
                            <input type="text" id='name' className='form-control' name="name" autoComplete='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating w-100">
                            <input type="email" id="email" className='form-control text-lowercase' name="email" autoComplete="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    
                    <div className="form-floating mb-2">
                        <input type="text" id="subject" className='form-control' name="subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                        <label htmlFor="subject">Subject</label>
                    </div>
                    <div className="form-floating mb-2">
                        <textarea name="message" id="message" className='form-control h-auto' cols={30} rows={7} placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                        <label htmlFor="message">Message</label>
                    </div>
                    <button type="submit" className="btn btn-custom-color fs-4" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
                {status && <p className='fs-5'>{status}</p>}
            </div>
        </section>
    </div>
  )
}

export default ContactSec;
