import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <>
        <div className='footer d-flex p-5 ' >
            <div className='footer-sec'>
               <h4>GET IN TOUCH</h4>
               <div className='d-flex align-items-center justify-content-center'>
               <i class="fa-regular fa-envelope"></i>
               <p>demiana@gmail.com</p>
               </div>
               <div className='d-flex align-items-center justify-content-center'>
               <i class="fa-solid fa-phone"></i>
               <p>01151909840</p>
               </div>
            </div>
            <div className='footer-sec'>
                 <button className='btn'> CONTACT ME</button>
            </div>
            <div className='footer-sec'>
            <i class="fa-brands fa-linkedin fa-x m-2"></i>
            <i class="fa-brands fa-facebook-f fa-x m-2"></i>
            <i class="fa-brands fa-twitter fa-x m-2"></i>
            <p>Copyright @2019 HR</p>
            </div>
        </div>
    </>
  )
}
