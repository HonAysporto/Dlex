import React from 'react'
import "./Midsidebar.css"
import { Link } from 'react-router-dom'


const Midsidebar = () => {
  return (
    <>
        <div className='p-3 sidebarr'>
            <div>

            
            <div className='logo-div'>
                <img src="/Images/onDark.svg" alt="" />
            </div>

            <div className='d-flex team-tag rounded align-items-center '>
                <h5 className='rounded-5 p-1 mt-2 me-2'>DW</h5>
                <div className='team d-flex flex-column '>
                    <h4>Dlex Designs</h4>
                    <span>general team</span>
                </div>
                <img className='cuss' src="/Images/unfold_more.svg" alt="" />
            </div>

    {/* Links */}
            <div className=' d-flex flex-column gap-3'>
            <div>
                <Link to="/dashboard" className='text-decoration-none'>
                    <div className='link gap-2 d-flex flex-row align-items-center'>
                        <img src="/Images/Graph.png" alt="" />
                        <h5>Dashboard</h5>
                        
                    </div>
                    </Link>
            </div>

            <div>
                <Link to="/overview" className='text-decoration-none'>
                    <div className='link gap-2 d-flex flex-row align-items-center'>
                        <img src="/Images/Chart.svg" alt="" />
                        <h5>Overview</h5>
                    </div>
                    </Link>
            </div>

            <div>
                <a href="" className='text-decoration-none'>
                    <div className='link gap-2 d-flex flex-row align-items-center'>
                        <img src="/Images/Chat.svg" alt="" />
                        <h5>Chat</h5>
                        <p className='rounded-5'>5</p>
                    </div>
                    </a>
            </div>

            <div>
                <a href="" className='text-decoration-none'>
                    <div className='link gap-2 d-flex flex-row align-items-center'>
                        <img src="/Images/User.svg" alt="" />
                        <h5>Team</h5>
                    </div>
                    </a>
            </div>
            </div>

            {/* ShortCut */}

            <h6 className='short fw-bold '>SHORTCUT</h6>
            <div className=' d-flex flex-column gap-3'>
            <div>
                <a href="" className='text-decoration-none'>
                    <div className='link gap-2 d-flex flex-row align-items-center'>
                        <img src="/Images/Document.png" alt="" />
                        <h5>Task</h5>
                    </div>
                    </a>
            </div>

            <div>
                <a href="" className='text-decoration-none'>
                    <div className='link gap-2 d-flex flex-row align-items-center'>
                        <img src="/Images/Danger.svg" alt="" />
                        <h5>Reports</h5>
                    </div>
                    </a>
            </div>

            <div>
                <a href="" className='text-decoration-none'>
                    <div className='link gap-2 d-flex flex-row align-items-center'>
                        <img src="/Images/Setting.svg" alt="" />
                        <h5>Settings</h5>
                    </div>
                    </a>
            </div>
            </div>
            </div>

            <div>

           

            <div className="storag storage rounded-1 p-3">
      <div className="d-flex head justify-content-between">
        <h5>Storage</h5>
        <span>Upgrade</span>
      </div>
      <h6>
        <strong>3.4GB</strong> <span>of 15GB</span>
      </h6>

      {/* Progress Bar */}
      <div className="progress mt-2" style={{ height: "4px" }}>
        <div
          className="progress-bar bg-light"
          role="progressbar"
          style={{ width: "23%" }} 
          aria-valuenow="3.4"
          aria-valuemin="0"
          aria-valuemax="15"
        ></div>
      </div>
    </div>

    <div className='d-flex bottom-tag align-items-center'>
        <img className='imgg' src="/Images/IMG.svg" alt="" />
        <h1>Jane Smith</h1>
        <img className='cuss' src="/Images/unfold_more.svg" alt="" />
    </div>
    </div>
        </div>
    </>
  )
}

export default Midsidebar