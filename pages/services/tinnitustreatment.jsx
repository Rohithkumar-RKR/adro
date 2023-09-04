import Banner from '@/Components/Banner'
import React from 'react'
import tint from '../../public/images/tint.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Spacing from '@/Components/Spacing'
import Section from '@/Components/Section'

const tinnitustreatment = () => {
  return (
    <>
<Spacing/>
      <Section  className="">
         <div className='container' id="tintus_tagline">
         <h2 className='mb-3'>Tinnitus Treatment</h2>
     <h3 className="">"Tinnitus Relief Solutions for Comprehensive Hearing Aid  Treatment"</h3>  
         </div>
      </Section>
  <Spacing/>
      <Section  className="bg_color">
          <div className='container pb-5 pt-md-5 pt-3 text-white' id='tintus_about'>
              <div className='row gy-5'>
                <div className='col-md-6'>
                   <div className='mt-3'>
                    <p className=''>Discover tranquility with our Tinnitus Treatment services. Our specialized approach combines advanced technology and expert care to alleviate tinnitus symptoms, restoring peace and harmony to your life.</p>
                    <p  className='' >
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
      </Section>
      <Spacing/>
      <Section  className=''>
         <div className='container id="know_more5"'>
           <div className='text-center'>
            <p className='fw-medium'>Do you want a free assessment of your hearing loss ? Please contact us at 9880915931. </p>
            <h3>or</h3>
            <button className='btn btn-warning p-2 mt-2'><Link href="/" className='text-decoration-none text-black'>Book an appointment</Link></button>
           </div>
         </div>
      </Section>
      <Spacing/>

    </>
  )
}

export default tinnitustreatment
