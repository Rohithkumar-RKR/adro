import Banner from '@/Components/Banner'
import Image from 'next/image'
import React from 'react';
import hearaccess from '../../public/images/hearaccess.jpg'
import Link from 'next/link';

const hearingaidaccessories = () => {
  return (
   <>
   <Banner/>
   <section id="hearaccess_tagline" className='py-md-4 py-4'>
     <div className='container'>
     <h2 className='mb-3'>Hearing Aid Accessories </h2>
       <h3 className="fs-3">"Elevate Your Experience through Premium Hearing Aid Accessories and Enhancements"</h3>  
     </div>
   </section>
   <section id="hearaccess_about" className='py-md-5 py-5 bg_color'>
     <div className="container">
        <div className='row'>
           <div className='col-md-6'>
              <div className='mt-3'>
                <p className='fw-medium'>
                Explore our curated range of Hearing Aid Accessories. From batteries to cleaning kits, our selection enhances your hearing aid experience, ensuring optimal performance and lasting comfort.
                </p>
                <p className='fw-medium'>
                Hearing aid batteries from PowerOne, & ReSound. Brand specific Hearing aid wireless accessories such as TV streamer, Phone Clip, Micro Phone & Remote control. Hearing aid cleaning tools.  
                </p>
              </div>
           </div>
           <div className='col-md-6'>
               <div>
                <Image src={hearaccess} className='img-fluid shadow  bg-body rounded'/>
               </div>
           </div>
        </div>
     </div>
   </section>
   <section id="know_more6" className='py-md-5 py-4'>
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

export default hearingaidaccessories