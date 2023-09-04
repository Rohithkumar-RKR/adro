import Banner from '@/Components/Banner'
import Image from 'next/image'
import React from 'react';
import hearaccess from '../../public/images/hearaccess.jpg'
import Link from 'next/link';
import Spacing from '@/Components/Spacing';
import Section from '@/Components/Section';
import Bookmainbtn from '@/Components/Bookmainbtn';

const hearingaidaccessories = () => {
  return (
   <>
  <Spacing/>
   <Section className=''>
     <div className='container' id="hearaccess_tagline">
     <h2 className='mb-3'>Hearing Aid Accessories </h2>
       <h3 className="fs-3">"Elevate Your Experience through Premium Hearing Aid Accessories and Enhancements"</h3>  
     </div>
   </Section>
   <Spacing/>
   <Section  className='bg_color'>
     <div className="container pb-5 pt-md-4 pt-3 text-white" id="hearaccess_about">
        <div className='row gy-5'>
           <div className='col-md-6'>
              <div className='mt-3'>
                <p className=''>
                Explore our curated range of Hearing Aid Accessories. From batteries to cleaning kits, our selection enhances your hearing aid experience, ensuring optimal performance and lasting comfort.
                </p>
                <p className=''>
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
   </Section>
   <Spacing/>
   <Section  className=''>
         <div className='container' id="know_more6">
           <div className='text-center'>
            <p className='fw-medium'>Do you want a free assessment of your hearing loss ? Please contact us at 9880915931. </p>
            <h3>or</h3>
            {/* <button className='btn btn-warning p-2 mt-2'><Link href="/" className='text-decoration-none text-black'>Book an appointment</Link></button> */}
           <Bookmainbtn/>
           </div>
         </div>
      </Section>
  <Spacing/>
   </>
  )
}

export default hearingaidaccessories
