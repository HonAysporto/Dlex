import React from 'react'

import "./Dashboard.css"

import Sidenav from '../components/Sidenav'
import Rightcolumn from '../components/Rightcolumn'
import Overview from './Overview'

const Dashboard = () => {
  return (
   <>
   <div className='d-flex main justify-content-between'>
    <div>
    <Sidenav/>
    </div>

    {/* <div className=''>
    <div className='d-block d-md-none'>
   <DashboardNav/>
   </div>
   <h2 className='px-4 fw-bold mt-4 prog'>Progress Dashboard</h2>
   <div className='ass'>
   <AssessmentTab/>
   </div>
    <div className='grupinfo'>
    <GroupInfo/>
    </div>

    <div className='mb-3'>
    <Grammer/>
    </div>
   
    </div> */}

    <Overview/>

    {/* Right column*/}
    <div>
        <Rightcolumn/>
    </div>
   </div>
  
   </>
  )
}

export default Dashboard