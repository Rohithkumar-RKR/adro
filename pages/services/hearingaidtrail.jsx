import Banner from '@/Components/Banner'
import React from 'react'
import hearfit from '../../public/images/hear_fit.png'
import Image from 'next/image'
import Link from 'next/link'
import Section from '@/Components/Section'
import Spacing from '@/Components/Spacing'
import Bookmainbtn from '@/Components/Bookmainbtn'

const Hearingaidtrail = () => {
  return (
   <>
  <Spacing/>
   <Section >
      <div className='container'  id="heartrail_tagline">
      <h2 className='mb-3'>Hearing Aid Trial and Fitting</h2>
     <h3 className="">"Discover Your Perfect Fit Hearing Aid Trial Services"</h3>  
      </div>
   </Section>
   <Spacing/>
   <Section  className=' bg_color'>
     <div className='container pb-5 pt-md-5 pt-3 text-white' id="hearing">
       <div className='row gy-5'>
         <div className='col-md-6 '>
        <div className=''>
            <p className=''>Experience superior hearing with our Hearing Aid Trial and Fitting services. Our experts ensure a seamless fit, personalized to your comfort, empowering you to embrace life's vibrant sounds anew.</p>
            <p  className=''>We will give trial on hearing aids that best suit your requirement and budget.</p>
            <p  className=''>FREE Home Trial is also available for Senior citizens. </p>
        </div>
         </div>
         <div className='col-md-6'>
            <div>
                <Image src={hearfit} className="img-fluid shadow   bg-body rounded"/>
            </div>
         </div>
       </div>
     </div>
   </Section>
   <Spacing/>
   <Section  className=''>
         <div className='container' id="know_more3">
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

export default Hearingaidtrail
