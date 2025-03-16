import React from 'react'
import "./Rightcolumn.css"

const Rightcolumn = () => {
  return (
    <>
    <div className='right-column d-none d-md-block m-3 d-flex flex-column px-3 py-4'>
    <div className='d-flex title flex-column justify-content-center align-items-center'>
            <div className='img-div'>
                <img src="/Images/IMG.svg" alt="" />
                <p className='rounded-5'>5</p>
            </div>
            <h3>Harrison Philips</h3>
            <span>Business analyst</span>
        </div>

        <div className='d-flex mt-5 border cuss rounded-2 justify-content-between p-3'>
            <div className='d-flex'>
                <div className='gram'>
                    <h6>Get - 10% sell price</h6>
                    <span>for "spanishAZ" course</span>
                </div>
            </div>
            <div className='d-flex align-items-center'>
            <img className='arrow-btn' src="/Images/keyboard_arrow_right.png" alt="" />
            </div>
           
        </div>

        <h4 className='cprog'>Course Progres</h4>




<div className='d-flex lat flex-column gap-2 mt-4'>
<div className='d-flex align-items-center cuss  border rounded-2  p-3'>
            <p className='tab1'>63%</p>
            <div className='div-img1 div-img rounded'>
            <img src="/Images/create.png" alt="" />
            </div>
            <div className='d-flex'>
                <div className='gram gramn'>
                    <h6>Grammer</h6>
                    <span>Learn new rules</span>
                </div>
            </div>
           
        </div>

        <div className='d-flex align-items-center cuss border rounded-2  p-3'>
            <p className='tab2'>78%</p>
            <div className='div-img2 div-img rounded'>
            <img src="/Images/description.png" alt="" />
            </div>
            <div className='d-flex'>
                <div className='gram gramn'>
                    <h6>Dictionary</h6>
                    <span>Learn 4 new words</span>
                </div>
            </div>
           
        </div>

        <div className='d-flex align-items-center cuss border rounded-2  p-3'>
            <p className='tab3'>34%</p>
            <div className='div-img3 div-img rounded'>
            <img src="/Images/ball.png" alt="" />
            </div>
            <div className='d-flex'>
                <div className='gram gramn'>
                    <h6>Reading</h6>
                    <span>train your skill</span>
                </div>
            </div>
           
        </div>
</div>
   
    </div>
     
    </>
  )
}

export default Rightcolumn