import React from 'react';

function ScreenLoader() {
  return (
    <div>
        <div className='vh-100 vw-100 d-flex align-items-center justify-content-center'>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
    </div>
  )
}

export default ScreenLoader;
