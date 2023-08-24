import Banner from '@/Components/Banner'
import React from 'react'
import hearfit from '../../public/images/hear_fit.png'
import Image from 'next/image'
import Link from 'next/link'

const Hearingaidtrail = () => {
  return (
   <>
   <Banner/>
   <section id="heartrail_tagline" className='py-md-4 py-4'>
      <div className='container'>
      <h2 className='mb-3'>Hearing Aid Trial and Fitting</h2>
     <h3 className="fs-3">"Discover Your Perfect Fit Hearing Aid Trial Services"</h3>  
      </div>
   </section>
   <section id="hearing" className='py-md-5 py-5 bg_color'>
     <div className='container'>
       <div className='row gy-3'>
         <div className='col-md-6'>
        <div className='mt-3'>
            <p className='fw-medium'>Experience superior hearing with our Hearing Aid Trial and Fitting services. Our experts ensure a seamless fit, personalized to your comfort, empowering you to embrace life's vibrant sounds anew.</p>
            <p  className='fw-medium'>We will give trial on hearing aids that best suit your requirement and budget.</p>
            <p  className='fw-medium'>FREE Home Trial is also available for Senior citizens. </p>
        </div>
         </div>
         <div className='col-md-6'>
            <div>
                <Image src={hearfit} className="img-fluid shadow   bg-body rounded"/>
            </div>
         </div>
       </div>
     </div>
   </section>
   <section id="know_more3" className='py-md-5 py-4'>
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

export default Hearingaidtrail
