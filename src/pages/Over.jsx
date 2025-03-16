import React from 'react'
import "./Overview.css"
import Sidenav from '../components/Sidenav'
import Rightcolumn from '../components/Rightcolumn'

export const Over = () => {
  return (
   <>
    <div className='d-flex main justify-content-between'>
    <Sidenav/>
   
    <h1>Overview</h1>
 
    <Rightcolumn/>
    </div>
    
   </>
  )
}
