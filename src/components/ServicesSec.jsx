import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ServicesSec(props) {
  return (
    <div>
      <section className={'px-md-2 ' + props.borderBottom}>            
        <h1 className='sec-info'>Services</h1>

        {/* Row 1 */}
        <div className="d-block d-sm-flex gap-2 mb-2">
          <div className="services-container col text-center border rounded d-flex flex-column p-2 mb-2">
            <div>
              <FontAwesomeIcon className='services-icon fs-3 btn text-custom-color p-2' icon="laptop-code" />
            </div>
            <h4>Full-Stack Development</h4>
            <p>
              Building scalable web applications using modern front-end and back-end technologies like React, Node.js, PHP, and Python. Ensuring high performance, security, and maintainability.
            </p>
          </div>
          <div className="services-container col text-center border rounded d-flex flex-column p-2 mb-2">
            <div>
              <FontAwesomeIcon className='services-icon fs-3 btn text-custom-color p-2' icon="server" />
            </div>
            <h4>Software Development</h4>
            <p>
              Developing high-quality, scalable, and efficient software solutions tailored to business needs, including custom applications and automation tools.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="d-block d-sm-flex gap-2 mb-2">
          <div className="services-container col text-center border rounded d-flex flex-column p-2 mb-2">
            <div>
              <FontAwesomeIcon className='services-icon fs-3 btn text-custom-color p-2' icon="cloud" />
            </div>
            <h4>AWS Cloud Technologies</h4>
            <p>
              Deploying, managing, and scaling applications using AWS cloud solutions, ensuring reliability, security, and efficiency in cloud-based environments.
            </p>
          </div>
          <div className="services-container col text-center border rounded d-flex flex-column p-2 mb-2">
            <div>
              <FontAwesomeIcon className='services-icon fs-3 btn text-custom-color p-2' icon="shopping-cart" />
            </div>
            <h4>E-Commerce Development</h4>
            <p>
              Creating and optimizing e-commerce platforms with secure payment gateways, inventory management, and seamless user experience.
            </p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="d-block d-sm-flex gap-2 mb-2">
          <div className="services-container col text-center border rounded d-flex flex-column p-2 mb-2">
            <div>
              <FontAwesomeIcon className='services-icon fs-3 btn text-custom-color p-2' icon="palette" />
            </div>
            <h4>Front-End Development</h4>
            <p>
              Creating intuitive, interactive, and visually appealing user interfaces using React, Vue, Bootstrap, and Tailwind CSS.
            </p>
          </div>
          <div className="services-container col text-center border rounded d-flex flex-column p-2 mb-2">
            <div>
              <FontAwesomeIcon className='services-icon fs-3 btn text-custom-color p-2' icon="database" />
            </div>
            <h4>Back-End Development</h4>
            <p>
              Developing secure and scalable server-side applications, managing databases, and implementing APIs with PHP, Python, and Node.js.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesSec;
