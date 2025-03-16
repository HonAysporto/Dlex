import React from 'react'
import "./DashboardNav.css"

import Midsidebar from './Midsidebar'

const DashboardNav = () => {
    
  return (
    <>
        <div className="d-flex align-items-center justify-content-between px-4 py-3">
            <div className='d-flex align-items-center gap-4'>
                <img data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" className='nav-btn' src="https://img.icons8.com/?size=100&id=aflTW0mA9OBv&format=png&color=000000" alt="" />
                <img className='nav-btn' src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000" alt="" />
            </div>

            <div className='d-flex align-items-center gap-4'>
                <img className='nav-img'  src="/Images/flag.svg" alt="" />
                <img className='nav-img' src="/Images/IMG.svg" alt="" />
            </div>
        </div>

      

        

<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-body">
    <Midsidebar/>
  </div>
</div>
    </>
  )
}

export default DashboardNav