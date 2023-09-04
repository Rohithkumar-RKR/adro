import Banner from '@/Components/Banner'
import Image from 'next/image'
import React from 'react'
import puretone from '../../public/images/puretone.jpg'
import Link from 'next/link'
import Section from '@/Components/Section'
import Spacing from '@/Components/Spacing'

const puretoneaudio = () => {
  return (
    <>
    <>
    <Spacing/>
    <Section >
       <div className='container' id="pure_tagline">
       <h2 className='mb-3'>Pure Tone Audiometry</h2>
        <h3 className="">"Precision in Sound: Discover Your Pure Tone Potential"</h3>
       </div>
      </Section>
    </>
    <Spacing/>
      <>
      <Section className="bg_color">
        <div className='container py-5 text-white'  id='pure_about'>
           <div className='row gy-5'>
             <div className='col-md-6'>
              <p className=''>
              Experience accurate hearing assessment with our Pure Tone Audiometry services. Using state-of-the-art equipment, we measure your hearing thresholds across various frequencies. Trust us to guide your journey to improved hearing clarity.
              </p>
              <p  className=''>Pure Tone Audiometry Test – often said as PTA is a behavioral test that measures hearing sensitivity. This test mainly helps in indicating the Pure Tone Thresholds (PTTs).</p>
            <p  className=''>
            <span className='fw-bolder fs-6'>
            PTA Test At Home :
            </span>
            We do offer Pure Tone Audiometry Test at home for senior citizens at a nominal cost of Rs.750*
            </p>
             <p  className=''>Charges for Pure Tone Audiometry Test ( PTA Test Report ) – Rs.500.00*</p>
             
             </div>
             <div className='col-md-6'>
               <div className=''>
                  <Image src={puretone}  className='img-fluid shadow   bg-body rounded'/>
               </div>
             </div>
           </div>
        </div>

      </Section>
      </>
      <Spacing/>
      <>
      <Section  className=''>
         <div className='container' id="know_more">
           <div className='text-center'>
            <p className='fw-medium'>Do you want a free assessment of your hearing loss ? Please contact us at 9880915931. </p>
            <h3>or</h3>
            <button className='btn btn-warning p-2 mt-2'><Link href="/" className='text-decoration-none text-black'>Book an appointment</Link></button>
           </div>
         </div>
      </Section>
      <Spacing/>
      </>
    
    </>
  )
}

export default puretoneaudio
