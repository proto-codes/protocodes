import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Resume from '../assets/img/Resume.pdf';

function AboutSec(props) {
  return (
    <div>
        <section className={'px-md-2 ' + props.borderBottom}>
            <h1 className='sec-info'>About</h1>

            <h2>I' m Tochukwu Elekwachi a <span className='text-custom-color fw-bold fs-1'>Software Developer</span></h2>
            <p className='fs-5'>I am a results-driven Software Developer with a strong passion for building scalable, efficient, and user-centric applications. With expertise in web development, software architecture, and modern programming frameworks, I create seamless digital solutions that enhance user experience and drive business growth. I thrive in collaborative environments, leveraging problem-solving skills and industry best practices to develop high-quality, maintainable code. Committed to continuous learning and staying ahead of emerging technologies, I am eager to contribute my skills to innovative projects. Let’s connect and build something impactful.</p>

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
                    <h5>JavaScript (React, Next.js, Vue)</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated progress-bar-custom-color" style={{width: '100%'}}>100%</div>
                    </div>
                </div>
                <div className="mb-2">
                    <h5>Node.js | Express | MongoDB</h5>
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
                    <h5>Python (Django, Flask)</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated progress-bar-custom-color" style={{width: '91%'}}>91%</div>
                    </div>
                </div>
                <div className="mb-2">
                    <h5>Git & GitHub</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated progress-bar-custom-color" style={{width: '100%'}}>100%</div>
                    </div>
                </div>
                <div className="mb-2">
                    <h5>MySQL & PostgreSQL</h5>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated progress-bar-custom-color" style={{width: '95%'}}>95%</div>
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
                            <h5 className="my-2">Enugu State University of Science and Technology (ESUT)</h5>
                            <p className="timeline_text">
                                Earned a Bachelor's Degree in Computer Science, gaining in-depth knowledge in software development, algorithms, and system design.
                            </p>
                        </div>
                        <div className="css-line">
                            <div className="circle-dot bg-custom-color rounded-circle"></div>
                            <span className="small"><FontAwesomeIcon icon='calendar-alt' /> 2020 - 2021</span>
                            <h5 className="my-2">Abia Tech Hub (ATH)</h5>
                            <p className="timeline_text">
                                Specialized in Full-Stack Development, mastering modern web technologies and building scalable applications.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h3>Experience</h3>
                    <div className="position-relative border rounded p-3 ps-5">
                        <div className="css-line">
                            <div className="circle-dot bg-custom-color rounded-circle"></div>
                            <span className="small"><FontAwesomeIcon icon='calendar-alt' /> 2020 - Present</span>
                            <h5 className="my-2">Full Stack Developer</h5>
                            <p className="timeline_text">
                                Experienced in Full Stack Development, from front-end design to back-end architecture. 
                                Skilled in JavaScript (React, Vue, Next.js), Node.js (Express), and database management (MongoDB, MySQL).
                            </p>
                        </div>

                        <div className="css-line">
                            <div className="circle-dot bg-custom-color rounded-circle"></div>
                            <span className="small"><FontAwesomeIcon icon='calendar-alt' /> 2020 - Present</span>
                            <h5 className="my-2">Software Developer</h5>
                            <p className="timeline_text">
                                Designing and developing scalable software solutions, ensuring optimal system performance and seamless user experiences.
                                Proficient in PHP (Laravel), Python (Django, Flask), and cloud technologies like AWS.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutSec;
