import React from 'react'
import "./Overview.css"
import DashboardNav from '../components/dashboardNav'
import { AssessmentTab } from '../components/AssessmentTab'
import GroupInfo from '../components/GroupInfo'
import Grammer from '../components/Grammer'


const Overview = () => {
  return (
    <>
         <div className=''>
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
           
            </div>
    </>
  )
}

export default Overview