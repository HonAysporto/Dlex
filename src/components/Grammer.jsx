import React from 'react'
import "./Grammer.css"

const Grammer = () => {
  return (
    <>
    <div className='m-3 d-flex flex-column flex-md-row gap-3'>
        {/* Grammer */}
        <div className='d-flex gramm border rounded-2 justify-content-between p-3'>
            <div className='d-flex'>
            <div className='img-div me-2 shadow rounded-5 d-flex align-items-center justify-content-center'>
                <img className='' src="/Images/create-outline.png" alt="" />
                </div>
                <div className='gram'>
                    <h6>Grammer</h6>
                    <span>+30 grammer rules</span>
                </div>
            </div>
            <div className='d-flex align-items-center'>
            <img className='arrow-btn' src="/Images/keyboard_arrow_right.png" alt="" />
            </div>
           
        </div>

        {/* Dictionary */}
        <div className='d-flex  gramm border rounded-2 justify-content-between p-3'>
            <div className='d-flex'>
            <div className='img-div me-2 shadow rounded-5 d-flex align-items-center justify-content-center'>
                <img className='' src="/Images/support.png" alt="" />
                </div>
                <div className='gram'>
                    <h6>Dictionary</h6>
                    <span>+10 new words</span>
                </div>
            </div>
            <div className='d-flex align-items-center'>
            <img className='arrow-btn' src="/Images/keyboard_arrow_right.png" alt="" />
            </div>
           
        </div>

    </div>
    </>
  )
}

export default Grammer