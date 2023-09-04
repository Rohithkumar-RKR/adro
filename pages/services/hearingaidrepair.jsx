import Banner from '@/Components/Banner'
import React from 'react'
import aidrepair from '../../public/images/hearrepair.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Spacing from '@/Components/Spacing'
import Section from '@/Components/Section'
import Bookmainbtn from '@/Components/Bookmainbtn'

const hearingaidrepair = () => {
  return (
    <>
    <Spacing/>
    <Section  className=''>
       <div className='container' id="hearrepair_tagline">
       <h2 className='mb-3'>Hearing Aid Repair Service </h2>
       <h3 className="">"Reviving Sound: Expert Hearing Aid Repair Services"</h3>  
       </div>
    </Section>
    <Spacing/>
    <Section  className='bg_color'>
      <div className='container  pb-5 pt-md-5 pt-3 text-whte' id="hearrepair_about">
        <div className='row gy-5'>
            <div className='col-md-6'>
               <div className='mt-3'>
                <p className=''>
                Restore sound quality swiftly with our Hearing Aid Repair services. Our skilled technicians diagnose issues accurately, offering timely repairs to ensure your device performs at its best.
                </p>
                <p className=''>
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
    </Section>
    <Spacing/>
    <Section  className=''>
         <div className='container' id="know_more4">
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

export default hearingaidrepair
