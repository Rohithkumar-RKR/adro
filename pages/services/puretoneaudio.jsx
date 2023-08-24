import Banner from '@/Components/Banner'
import Image from 'next/image'
import React from 'react'
import puretone from '../../public/images/puretone.jpg'
import Link from 'next/link'

const puretoneaudio = () => {
  return (
    <>
    <Banner/>
      <section id="pure_tagline" className='py-md-4 py-4'>
       <div className='container'>
       <h2 >Pure Tone Audiometry</h2>
     <h2 className="fs-2">"Precision in Sound: Discover Your Pure Tone Potential"</h2>
       </div>
      </section>
      <section id='pure_about' className="py-md-5 py-3 bg_color">
        <div className='container'>
           <div className='row gy-3'>
             <div className='col-md-6'>
              <p className='fw-medium'>
              Experience accurate hearing assessment with our Pure Tone Audiometry services. Using state-of-the-art equipment, we measure your hearing thresholds across various frequencies. Trust us to guide your journey to improved hearing clarity.
              </p>
              <p  className='fw-medium'>Pure Tone Audiometry Test – often said as PTA is a behavioral test that measures hearing sensitivity. This test mainly helps in indicating the Pure Tone Thresholds (PTTs).</p>
            <p  className='fw-medium'>
            <span className='fw-bolder fs-6'>
            PTA Test At Home :
            </span>
            We do offer Pure Tone Audiometry Test at home for senior citizens at a nominal cost of Rs.750*
            </p>
             <p  className='fw-medium'>Charges for Pure Tone Audiometry Test ( PTA Test Report ) – Rs.500.00*</p>
             
             </div>
             <div className='col-md-6'>
               <div className=''>
                  <Image src={puretone}  className='img-fluid shadow   bg-body rounded'/>
               </div>
             </div>
           </div>
        </div>

      </section>
      <section id="know_more" className='py-md-5 py-4'>
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

export default puretoneaudio
