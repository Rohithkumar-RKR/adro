import Banner from '@/Components/Banner'
import React from 'react'
import impedence from '../../public/images/impedence.webp'
import Image from 'next/image'
import Link from 'next/link'

const impedenceaudiometry = () => {
  return (
   <>
   <Banner/>
   <section id="impedence_tagline" className='py-md-5 py-4'>
     <div className='container'>
     <h2 className='mb-3'>Impedance Audiometry</h2>
     <h3 className="fs-3">"Empowering Hearing Wellness: Impedance Audiometry Services"</h3>  
     </div>
   </section>
   <section id="impedence_about" className='py-md-5 py-4 bg_color'>
     <div className='container'>
       <div className='row gy-3'>
        <div className='col-md-6 text-center'>
         <div className='text-center'>
            <Image src={impedence} className="img-fluid"/>
         </div>
        </div>
        <div className='col-md-6 '> 
        <div className='mt-3'>
        <p className='fw-medium'>
           Navigate your hearing health with our Impedance Audiometry service. 
           </p>
           <p className='fw-medium'>
           Impedance audiometry test is a vital test to analyze the middle ear condition. Primary use: Tympanic membrane and middle ear status are determined via this test. 
           </p>
           <p  className='fw-medium'>
           Impedance Audiometry Test charges : Rs.750.00
           </p>
        </div>
          
        </div>
       </div>
     </div>
   </section>
   <section id="know_more1" className='py-md-5 py-4'>
         <div className='container'>
           <div className='text-center'>
            <p className='fw-bold fs-6 mb-1'>Do you want a free assessment of your hearing loss ? Please contact us at 9880915931. </p>
            <h3>or</h3>
            <button className='btn btn-warning p-2 fw-medium'><Link href="/" className='text-decoration-none text-black'>Book an appointment</Link></button>
           </div>
         </div>
      </section>
   </>
  )
}

export default impedenceaudiometry
