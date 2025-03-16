import React from 'react'
import "./GroupInfo.css"


const GroupInfo = () => {
  return (
    <>
        <div className='p-3  d-flex flex-md-row align-items-start flex-column gap-3'>

       
        {/* GroupInfo */}
        <div className='border rounded-4 p-3 group-info'>
            <div className='notif-div'>
                <span className='fw-bold'>Group info</span>
                <img src="/Images/notifications-outline.svg" alt="" />
            </div>
            <span className='no-student'>13 students in the group</span>
            
            <div className='alert cuss rounded-4 mt-3'>
                <h5>Group Homework</h5>
                <div className='click d-flex align-items-start justify-content-between'>
                    <p>4 students from your group online now</p>
                    <img src="/Images/keyboard_arrow_right.svg" alt="" />
                </div>
            </div>
            <h3>Today's lesson</h3>
            <span>unit 6 - Article</span>
        </div>


        {/* Overall Progress */}
        <div>
        <div className=' p-3 group-info'>
        <span className='fw-bold '>Overall progress</span>
            <div className='germany d-flex justify-content-between align-items-center mt-3'>
                <h3 >Germany for beginners</h3>
                <div className='img-div p-2 shadow rounded-5'>
                <img className=' ' src="/Images/germany.png" alt="" />
                </div>
            </div>
            <div className="progress mt-3 mb-2" style={{ height: "8px" }}>
  <div
    className="progress-bar"
    role="progressbar"
    style={{ width: "75%", backgroundColor: '#28439D' }}
    aria-valuenow="75"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
</div>
<p className="mt-3 mb-4">75%</p>
        </div>

        <div className='btn-div cuss'>
            <div className='py-3 px-3 d-flex align-items-center justify-content-end'>
            <span className=''>Explore more </span>
            <img src="/Images/blue_arrow.svg" alt="" />
            </div>

</div>
        </div>


        </div>
    </>
  )
}

export default GroupInfo