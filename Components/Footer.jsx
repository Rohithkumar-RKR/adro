import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
   <>
    <section id="footer" className='py-md-4 py-3  bg_color'>
      <div className='container py-4'>
      <div className='row gy-3'>
          <div className="col-md-3">
            <h4 className='mb-4'>About Adro</h4>
            <p className='fw-normal about_'>
            Adro Hearing is one of India’s fastest-growing hearing care networks. We are here to provide you the best possible hearing care and attention. We offer a wide range of hearing aids, hearing solutions, and hearing care services to achieve the highest benefits of hearing health.  
            </p>
          </div>
          <div className='col-md-3 '>
            <h4 className='mb-4'>Our Services</h4>
            <div className='fw-normal'>
            <p className='mb-0 py-1'> <Link href="#" className='text-decoration-none text-black'>Pure Tone Audiometry</Link></p>
            <p className='mb-0  py-1'><Link href="#" className='text-decoration-none  text-black'>Impedance Audiometry</Link></p>
            <p className='mb-0  py-1'><Link href="#" className='text-decoration-none  text-black'>Hearing Aid Trial and Fitting</Link></p>
            <p className='mb-0  py-1'> <Link href="#" className='text-decoration-none  text-black'>Hearing Aid Repair Service</Link></p>
            <p className='mb-0  py-1'> <Link href="#" className='text-decoration-none  text-black' >Tinnitus Treatment</Link></p>
            <p className='mb-0  py-1'><Link href="#" className='text-decoration-none  text-black'>Hearing Aid Accessories</Link></p>
            </div>
           
        
          </div>
          <div className='col-md-2'>
          <h4 className='mb-4'>Quick Links</h4>
          <div className='fw-normal'>
          <p className='mb-0 py-1' ><Link href="#" className='text-decoration-none text-black '>Home</Link></p>
          <p className='mb-0 py-1' ><Link href="#" className='text-decoration-none  text-black'>About us</Link></p>
          <p className='mb-0 py-1' ><Link href="#" className='text-decoration-none  text-black'>Services</Link></p>
          <p className='mb-0 py-1' ><Link href="#" className='text-decoration-none  text-black'>Price</Link></p>
          <p className='mb-0 py-1' ><Link href="#" className='text-decoration-none  text-black'>Contact Us</Link></p>
          </div>
        
          </div>
          <div className='col-md-4'>
            <div className='fw-normal'>
            <h4 className='mb-4'>Contact info</h4>
           <p>No.940, 1st floor, 9th cross,
24th main road H.S.R Layout, Sector 1, Bengaluru, Karnataka, 560102.</p>

         <p className='mt-3 mb-0 py-1 '><Link href="#"  className='text-decoration-none  text-black'>+91-98809 15931</Link></p>
         <p className='mb-0 py-1'><Link href="#"  className='text-decoration-none  text-black'>blr.hsr@adrohearingaid.com</Link></p>
         <p className='mb-0 py-1'><Link href="#"  className='text-decoration-none  text-black'>https://www.adrohearingaid.com</Link></p>
            </div>
         
         
          </div>
       </div>
       <div className='line'></div>
       <div>
        <h6 className='mt-3 text-center'>© Copyright 2023. All Rights Reserved</h6>
       </div>
      </div>

    
       
    </section>
   </>
  )
}

export default Footer
