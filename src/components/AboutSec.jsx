import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutSec(props) {
    const Resume = require('../assets/img/Resume.pdf');

  return (
    <div>
        <section className={'about-section ' + props.borderBottom}>
            <h1 className='sec-info'>About</h1>

            <h2>I' m Tochukwu Elekwachi a <span className='text-custom-color fw-bold fs-1'>Web Developer</span></h2>
            <p className='fs-5'>Enter the digital universe sculpted by Tochukwu Elekwachi, famously known as Protocol. As a co-founder of Protocodes and a maestro in web development, Protocol curates a symphony of code, weaving innovation and entrepreneurial spirit into the very fabric of online landscapes. With every line of code penned and every strategic step taken, Protocol steers the course of Protocodes toward unparalleled success, pioneering a new era in digital excellence.</p>

            <div className="row my-4">
                <div className='col-md-6'>
                    <p className='fs-5'>Languages: <span>English & Igbo</span></p>
                    <p className='fs-5'>Mobile: <span>+234 901 304 1098</span></p>
                    <p className='fs-5'>Mail: <span>elekwachitochukwu117@gmail.com</span></p>    
                    <p className='fs-5'>Website: <span>https://protocodes.vercel.app/</span></p>
                </div>
                <div className='col-md-6'>
                    <p className='fs-5'>Gender: <span>Male</span></p>
                    <p className='fs-5'>City: <span>Umuahia</span></p>
                    <p className='fs-5'>State: <span>Abia State</span></p>
                    <p className='fs-5'>Country: <span>Nigeria</span></p>
                </div>
            </div>

            <div>
                <div className="mb-2">
                    <h5>JavaScript</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated progress-bar-custom-color" style={{width: '100%'}}>100%</div>
                    </div>
                </div>
                <div className="mb-2">
                    <h5>Node.js</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated progress-bar-custom-color" style={{width: '100%'}}>100%</div>
                    </div>
                </div>
                <div className="mb-2">
                    <h5>PHP (Laravel)</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated progress-bar-custom-color" style={{width: '98%'}}>98%</div>
                    </div>
                </div>
                <div className="mb-2">
                    <h5>Python (Django)</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated progress-bar-custom-color" style={{width: '91%'}}>91%</div>
                    </div>
                </div>
                <div className="mb-2">
                    <h5>Git</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated progress-bar-custom-color" style={{width: '100%'}}>100%</div>
                    </div>
                </div>
            </div>

            <div className="d-flex gap-2 my-4">
                <a href={Resume} download="Resume" className="btn btn-custom-color fs-4">Download CV</a>
                <Link to='/contact' className="btn btn-custom-color fs-4">Hire Me</Link>
            </div>
            
            <div className="row">
                <div className="col-md-6 mb-3">
                    <h3>Education</h3>
                    <div className="position-relative border rounded p-3 ps-5">
                        <div className="css-line">
                            <div className="circle-dot bg-custom-color rounded-circle"></div>
                            <span className="small"><FontAwesomeIcon icon='calendar-alt' /> 2021 - 2024</span>
                            <h5 className="my-2">Federal Polythenic, Oko</h5>
                            <p className="timeline_text">Obtained a Higher National Diploma (HND) in Computer Science from Federal Polythenic, Oko. equipped with strong foundation in Programming</p>
                        </div>
                        <div className="css-line">
                            <div className="circle-dot bg-custom-color rounded-circle"></div>
                            <span className="small"><FontAwesomeIcon icon='calendar-alt' /> 2021 - 2022</span>
                            <h5 className="my-2">Abia Tech Hub</h5>
                            <p className="timeline_text">Skilled in Full Stack Development from Abia Tech Hub, excel in shaping digital realms and crafting impactful digital experiences. Passionate about unlocking endless possibilities in the virtual universe.</p>
                        </div>
                        <div className="css-line">
                            <div className="circle-dot bg-custom-color rounded-circle"></div>
                            <span className="small"><FontAwesomeIcon icon='calendar-alt' /> 2015 - 2021</span>
                            <h5 className="my-2">International Sec. Sch.</h5>
                            <p className="timeline_text">Obtained SSCE certificate at International Secondary School, Uturu Abia State, marking a pivotal step in my educational journey.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h3>Expereince</h3>
                    <div className="position-relative border rounded p-3 ps-5">
                        <div className="css-line">
                            <div className="circle-dot bg-custom-color rounded-circle"></div>
                            <span className="small"><FontAwesomeIcon icon='calendar-alt' /> 2021 - 2022</span>
                            <h5 className="my-2">Full Stack Development</h5>
                            <p className="timeline_text">Experienced in Full Stack Development, from front-end finesse to back-end mastery. Innovating projects with comprehensive technical expertise.</p>
                        </div>
                        <div className="css-line">
                            <div className="circle-dot bg-custom-color rounded-circle"></div>
                            <span className="small"><FontAwesomeIcon icon='calendar-alt' /> 2021 - 2022</span>
                            <h5 className="my-2">Front End Development</h5>
                            <p className="timeline_text">Proficient in Front End Development, expertise in React, Vue, Bootstrap, Tailwind and etc. Skillfully blending design finesse with coding wizardry to sculpt captivating user interfaces and elevate digital interactions</p>
                        </div>
                        <div className="css-line">
                            <div className="circle-dot bg-custom-color rounded-circle"></div>
                            <span className="small"><FontAwesomeIcon icon='calendar-alt' /> 2021 - 2022</span>
                            <h5 className="my-2">Back End Development</h5>
                            <p className="timeline_text">Proficient in PHP, Python and Nodejs for Back End Development. Creating robust digital infrastructures for seamless and secure online experiences.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutSec;
