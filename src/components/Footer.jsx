import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
        <div className="text-center my-3">
            <p className='fs-5'>Copyright &copy; 2021 - {currentYear} Protocodes All Rights Researved.</p>
        </div>
    </div>
  )
}

export default Footer;
