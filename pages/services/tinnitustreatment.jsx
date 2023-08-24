import Banner from '@/Components/Banner'
import React from 'react'
import tint from '../../public/images/tint.jpg'
import Image from 'next/image'
import Link from 'next/link'

const tinnitustreatment = () => {
  return (
    <>
      <Banner/>
      <section id="tintus_tagline" className="py-md-4 py-4">
         <div className='container' >
         <h2 className='mb-3'>Tinnitus Treatment</h2>
     <h3 className="fs-3">
"Tinnitus Relief Solutions for Comprehensive Hearing Aid  Treatment"</h3>  
         </div>
      </section>
      <section id='tintus_about' className="py-md-5 py-4 bg_color">
          <div className='container'>
              <div className='row gy-3'>
                <div className='col-md-6'>
                   <div className='mt-3'>
                    <p className='fw-medium'>Discover tranquility with our Tinnitus Treatment services. Our specialized approach combines advanced technology and expert care to alleviate tinnitus symptoms, restoring peace and harmony to your life.</p>
                    <p  className='fw-medium' >
                    For an effective Tinnitus Retraining Therapy session it fetches around 1hr for completion. The patient has to undergo this treatment for a prescribed duration of months.  
                    </p>
                   </div>
                </div>
                <div className='col-md-6'>
                    <div>
                       <Image src={tint} className="img-fluid shadow   bg-body rounded"/>
                    </div>
                </div>

              </div>
          </div>
      </section>
      <section id="know_more5" className='py-md-5 py-4'>
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

export default tinnitustreatment
