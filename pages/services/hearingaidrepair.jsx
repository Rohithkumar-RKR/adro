import Banner from '@/Components/Banner'
import React from 'react'
import aidrepair from '../../public/images/hearrepair.jpg'
import Image from 'next/image'
import Link from 'next/link'

const hearingaidrepair = () => {
  return (
    <>
    <Banner/>
    <section id="hearrepair_tagline" className='py-md-4 py-4'>
       <div className='container'>
       <h2 className='mb-3'>Hearing Aid Repair Service </h2>
       <h3 className="fs-3">"Reviving Sound: Expert Hearing Aid Repair Services"</h3>  
       </div>
    </section>
    <section id="hearrepair_about" className='py-md-5 py-5 bg_color'>
      <div className='container'>
        <div className='row gy-3'>
            <div className='col-md-6'>
               <div className='mt-3'>
                <p className='fw-medium'>
                Restore sound quality swiftly with our Hearing Aid Repair services. Our skilled technicians diagnose issues accurately, offering timely repairs to ensure your device performs at its best.
                </p>
                <p className='fw-medium'>
                We do hearing aid repair services for all brands of hearing aid such as Audio Service, Signia, Widex, Phonak, Unitron, ReSound, Oticon and Interton.  
                </p>
               </div>
            </div>
            <div className='col-md-6'>
               <div>
                   <Image src={aidrepair} className="img-fluid shadow   bg-body rounded"/>
               </div>
            </div> 
        </div>
      </div>
    </section>
    <section id="know_more4" className='py-md-5 py-4'>
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

export default hearingaidrepair
