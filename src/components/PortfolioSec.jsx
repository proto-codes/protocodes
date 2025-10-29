import React from 'react';
import bemsnest from '../assets/img/bemsnest.png';
import affLanding from '../assets/img/aff_landing.png';
import affDashboard from '../assets/img/aff_dashboard.png';
import dashboard247 from '../assets/img/247_dashboard.png';
import suntienergy from '../assets/img/suntienergy.png';
import Landing247 from '../assets/img/247_landing.png';
import enviableLogisticsImg from '../assets/img/enviablelogistics.png';
import enviableLandingImg from '../assets/img/enviablelogistics_landing.png';
import enviableFlowImg from '../assets/img/enviableflow.png';

function PortfolioSec(props) {
  return (
    <div>
      <section className={'px-md-2 ' + props.borderBottom}>
        <h1 className='sec-info'>Portfolio</h1>
        <h3 className='text-center mb-4'>My Past Projects:</h3>

        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4">
            <div className="mb-3">
              <a href="https://bemsnest.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={bemsnest}
                  alt="BemsNest Property Management Platform"
                  className='past-project w-100 border-5 border rounded'
                />
              </a>
              <p className="text-center mt-2">BemsNest – Property / Rental Management System</p>
            </div>
            <div className="mb-3">
              <a href="https://www.afflandportglobalestateltd.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src={affLanding}
                  alt="AFF Landport Global Estates Website"
                  className='past-project w-100 border-5 border rounded'
                />
              </a>
              <p className="text-center mt-2">AFF Landport – Real Estate Marketing Website</p>
            </div>
            <div className="mb-3">
              <a href="https://admin.enviablelogistics.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={enviableLogisticsImg}
                  alt="Enviable Logistics Admin Dashboard"
                  className='past-project w-100 border-5 border rounded'
                />
              </a>
              <p className="text-center mt-2">Enviable Logistics – Admin Dashboard / Operations Platform</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-4">
            <div className="mb-3">
              <a href="https://app.afflandportglobalestateltd.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src={affDashboard}
                  alt="AFF Landport Dashboard"
                  className='past-project w-100 border-5 border rounded'
                />
              </a>
              <p className="text-center mt-2">AFF Landport – Property Management Dashboard</p>
            </div>
            <div className="mb-3">
              <a href="https://app.247securityandforensic.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src={dashboard247}
                  alt="247 Security & Forensic Dashboard"
                  className='past-project w-100 border-5 border rounded'
                />
              </a>
              <p className="text-center mt-2">247 Security – Internal Dashboard for Security Ops</p>
            </div>
            <div className="mb-3">
              <a href="https://enviablelogistics.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={enviableLandingImg}
                  alt="Enviable Logistics Public Website"
                  className='past-project w-100 border-5 border rounded'
                />
              </a>
              <p className="text-center mt-2">Enviable Logistics – Public Website / Branding</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-md-4">
            <div className="mb-3">
              <a href="https://suntienergy.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={suntienergy}
                  alt="SuntiSolar Energy Africa"
                  className='past-project w-100 border-5 border rounded'
                />
              </a>
              <p className="text-center mt-2">SuntiSolar Energy Africa Ltd – Renewable Energy Solutions</p>
            </div>
            <div className="mb-3">
              <a href="https://247securityandforensic.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={Landing247}
                  alt="247 Security Landing Page"
                  className='past-project w-100 border-5 border rounded'
                />
              </a>
              <p className="text-center mt-2">247 Security – Public Landing & Services Page</p>
            </div>
            <div className="mb-3">
              <a href="https://www.enviableflow.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={enviableFlowImg}
                  alt="Enviable Flow Vehicle Asset Platform"
                  className='past-project w-100 border-5 border rounded'
                />
              </a>
              <p className="text-center mt-2">Enviable Flow – Hire-Purchase / Vehicle Asset Management</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioSec;
