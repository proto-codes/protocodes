import React from 'react';
import clubPro from '../assets/img/clubpro.png';
import affLanding from '../assets/img/aff_landing.png';
import affDashboard from '../assets/img/aff_dashboard.png';
import dashboard247 from '../assets/img/247_dashboard.png';
import policify from '../assets/img/policify.png';
import Landing247 from '../assets/img/247_landing.png';

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
              <a href="https://club_pro.com" target="_blank" rel="noopener noreferrer">
                <img src={clubPro} alt="ClubPro Membership Management System" className='past-project w-100 border-5 border rounded' />
              </a>
              <p className="text-center mt-2">ClubPro - Membership Management</p>
            </div>
            <div className="mb-3">
              <a href="https://www.afflandportglobalestatesltd.com/" target="_blank" rel="noopener noreferrer">
                <img src={affLanding} alt="Affiliate Marketing Landing Page" className='past-project w-100 border-5 border rounded' />
              </a>
              <p className="text-center mt-2">Affiliate Marketing Landing Page</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-4">
            <div className="mb-3">
              <a href="https://afflandportglobalestatesltd.vercel.app/properties" target="_blank" rel="noopener noreferrer">
                <img src={affDashboard} alt="Property Management System" className='past-project w-100 border-5 border rounded' />
              </a>
              <p className="text-center mt-2">Property Management System</p>
            </div>
            <div className="mb-3">
              <a href="https://app.247securityandforensic.com/" target="_blank" rel="noopener noreferrer">
                <img src={dashboard247} alt="Security and Forensic Dashboard" className='past-project w-100 border-5 border rounded' />
              </a>
              <p className="text-center mt-2">247 Security and Forensic Dashboard</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-md-4">
            <div className="mb-3">
              <a href="https://web_policify.com" target="_blank" rel="noopener noreferrer">
                <img src={policify} alt="Policify Security Platform" className='past-project w-100 border-5 border rounded' />
              </a>
              <p className="text-center mt-2">Policify - Security Monitoring System</p>
            </div>
            <div className="mb-3">
              <a href="https://247securityandforensic.com/" target="_blank" rel="noopener noreferrer">
                <img src={Landing247} alt="247 Security Landing Page" className='past-project w-100 border-5 border rounded' />
              </a>
              <p className="text-center mt-2">247 Security Landing Page</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioSec;
