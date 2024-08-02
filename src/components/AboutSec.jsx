import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutSec(props) {
    const cvPreview = require('../assets/img/CV_preview.pdf');

  return (
    <div>
        <section className={'about-section ' + props.borderBottom}>
            <h1 className='sec-info'>About</h1>

            <h2>I' m Tochukwu Elekwachi a <span className='text-primary fw-bold fs-1'>Web Developer</span></h2>
            <p className='fs-5'>Enter the digital universe sculpted by Tochukwu Elekwachi, famously known as Protocol. As a co-founder of Protocodes and a maestro in web development, Protocol curates a symphony of code, weaving innovation and entrepreneurial spirit into the very fabric of online landscapes. With every line of code penned and every strategic step taken, Protocol steers the course of Protocodes toward unparalleled success, pioneering a new era in digital excellence.</p>

            <div className="row my-4">
                <div className='col-md-6'>
                    <p className='fs-5'>Birthday: <span>16th Aug 2005</span></p>
                    <p className='fs-5'>Complexion: <span>Fair</span></p>
                    <p className='fs-5'>Mobile: <span>+234 913 510 4681</span></p>
                    <p className='fs-5'>Mail: <span>elekwachitochukwu117@gmail.com</span></p>    
                    <p className='fs-5'>Website: <span>https://protocodes.vercel.app/</span></p>
                </div>
                <div className='col-md-6'>
                    <p className='fs-5'>Gender: <span>Male</span></p>
                    <p className='fs-5'>Degree: <span>CS</span></p>
                    <p className='fs-5'>City: <span>Umuahia</span></p>
                    <p className='fs-5'>State: <span>Abia State</span></p>
                    <p className='fs-5'>Country: <span>Nigeria</span></p>
                </div>
            </div>

            <div>
                <div className="mb-2">
                    <h5>React.js</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: '95%'}}>95%</div>
                    </div>
                </div>
                <div className="mb-2">
                    <h5>Vue.js</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: '93%'}}>93%</div>
                    </div>
                </div>
                <div className="mb-2">
                    <h5>Node.js</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: '95%'}}>95%</div>
                    </div>
                </div>
                <div className="mb-2">
                    <h5>Laravel</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: '91%'}}>91%</div>
                    </div>
                </div>
                <div className="mb-2">
                    <h5>Django</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: '76%'}}>76%</div>
                    </div>
                </div>
            </div>

            <div className="d-flex gap-2 my-4">
                <a href={cvPreview} download="CV_preview" className="btn btn-primary fs-4">Download CV</a>
                <a href="/contact" className="btn btn-primary fs-4">Hire Me</a>
            </div>
            
            <div className="row">
                <div className="col-md-6">
                    <h3>Education</h3>
                    <div className="position-relative border rounded p-3 ps-5">
                        <div className="css-line">
                            <div className="circle-dot bg-primary rounded-circle"></div>
                            <span className="small"><FontAwesomeIcon icon='calendar-alt' /> 2017 - 2023</span>
                            <h5 className="my-2">Studied Sciences at ISS</h5>
                            <p className="timeline_text">Obtained my SSCE certificate at International Secondary School, Uturu Abia State, marking a pivotal step in my educational journey.
                            </p>
                        </div>
                        <div className="css-line">
                            <div className="circle-dot bg-primary rounded-circle"></div>
                            <span className="small"><FontAwesomeIcon icon='calendar-alt' /> 2023 - 2024</span>
                            <h5 className="my-2">Studied Web Development at ATH</h5>
                            <p className="timeline_text">Skilled in Web Development from Abia Tech Hub, excel in shaping digital realms and crafting impactful digital experiences. Passionate about unlocking endless possibilities in the virtual universe.</p>
                        </div>
                        <div className="css-line">
                            <div className="circle-dot bg-primary rounded-circle"></div>
                            <span className="small"><FontAwesomeIcon icon='calendar-alt' /> 2024</span>
                            <h5 className="my-2">Certified in Web development</h5>
                            <p className="timeline_text">Certified in Web Development from Abia Tech Hub, equipped to innovate and create impactful digital solutions. Ready to revolutionize the online landscape with cutting-edge expertise.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h3>Expereince</h3>
                    <div className="position-relative border rounded p-3 ps-5">
                        <div className="css-line">
                            <div className="circle-dot bg-primary rounded-circle"></div>
                            <span className="small"><FontAwesomeIcon icon='calendar-alt' /> 2023 - 2024</span>
                            <h5 className="my-2">Full Stack Web Developer</h5>
                            <p className="timeline_text">Experienced in full-stack web development, from front-end finesse to back-end mastery. Innovating projects with comprehensive technical expertise.</p>
                        </div>
                        <div className="css-line">
                            <div className="circle-dot bg-primary rounded-circle"></div>
                            <span className="small"><FontAwesomeIcon icon='calendar-alt' /> 2023 - 2024</span>
                            <h5 className="my-2">Skilled in Front End Development</h5>
                            <p className="timeline_text">Proficient in front-end web development, expertise in HTML, CSS, and JavaScript. Skillfully blending design finesse with coding wizardry to sculpt captivating user interfaces and elevate digital interactions</p>
                        </div>
                        <div className="css-line">
                            <div className="circle-dot bg-primary rounded-circle"></div>
                            <span className="small"><FontAwesomeIcon icon='calendar-alt' /> 2023 - 2024</span>
                            <h5 className="my-2">Skilled in Back End Development</h5>
                            <p className="timeline_text">Proficient in PHP and Python for back-end web development. Creating robust digital infrastructures for seamless and secure online experiences.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutSec;
