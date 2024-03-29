import Banner from '@/Components/Banner'
import React from 'react'
import impedence from '../../public/images/impedence.webp'
import Image from 'next/image'
import Link from 'next/link'
import Spacing from '@/Components/Spacing'
import Section from '@/Components/Section'
import Bookmainbtn from '@/Components/Bookmainbtn'
import Servicecal from '@/Components/Servicecal'

const impedenceaudiometry = () => {
  return (
   <>
   <Spacing/>
   <Section className=''>
     <div className='container'  id="impedence_tagline">
     <h2 className='mb-3'>Impedance Audiometry</h2>
     <h3 className="">"Empowering Hearing Wellness: Impedance Audiometry Services"</h3>  
     </div>
   </Section>
   <Spacing/>
   <Section  className='bg_color'>
     <div className='container py-5 text-white' id="impedence_about">
       <div className='row gy-5'>
        <div className='col-md-6 text-center'>
         <div className='text-center'>
            <Image src={impedence} className="img-fluid"/>
         </div>
        </div>
        <div className='col-md-6 '> 
        <div className='mt-3'>
        <p className=''>
           Navigate your hearing health with our Impedance Audiometry service. 
           </p>
           <p className=''>
           Impedance audiometry test is a vital test to analyze the middle ear condition. Primary use: Tympanic membrane and middle ear status are determined via this test. 
           </p>
           <p  className=''>
           Impedance Audiometry Test charges : Rs.750.00
           </p>
        </div>
          
        </div>
       </div>
     </div>
   </Section>
   <Spacing/>
   <Section  className=''>
         <Servicecal/>
      </Section>
      <Spacing/>
   </>
  )
}

export default impedenceaudiometry
