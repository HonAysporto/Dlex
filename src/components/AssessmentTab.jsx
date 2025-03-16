import React from 'react'
import "./AssesmentTab.css"

export const AssessmentTab = () => {
  return (
    <>
        <div className='p-3 d-flex flex-md-row flex-column gap-3'>
            {/* Exam Unit */}
            <div className='exam-unit shadow px-3 py-3 rounded-4'>
                <p>DEADLINE <span className='fw-bold'>12:00</span></p>
                <h3 className='text-white'>Exam - Unit 5</h3>
                <p className=''>Spanish for beginners</p>
                <div className='img-div d-flex align-items-center'>
            <img className='nav-img' src="/Images/Avatar.png" alt="" />             <img className='nav-img overlay-img' src="/Images/Avatar2.png" alt="" />           <img className='nav-img overlay-img' src="/Images/Avatar3.png" alt="" /> 
            <span className='bg-white rounded-5 overlay-img '>+99</span>         
                </div>
            </div>


            {/* Homework&Reading */}
           
            <div className='d-flex gap-3'>
                {/* Homework */}
                <div className='home p-3 rounded-3 '>
                   <img src="/Images/check_circle_outline.svg" alt="" /> 
                   <h4 className='fw-bold'>Homework</h4>
                   <p className=''>For today's lesson</p>
                   <h5 >35 MIN AGO</h5>
                </div>
            
           

                {/* Reading */}
                <div className='read p-3 rounded-3 '>
                   <img src="/Images/bluetick.svg" alt="" /> 
                   <h4 className='fw-bold'>Reading</h4>
                   <p className=''>24 words per week</p>
                   <h5 >2H AGO</h5>
                </div>
            </div>
        </div>
    </>
  )
}
