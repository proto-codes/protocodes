import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
        <div className="text-center my-3">
            <p>Copyright &copy; 2020 - {currentYear} Protocodes All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer;
