import React from 'react'
import type1 from '../../public/images/types/widex.png'
import type2 from '../../public/images/types/widex_3.jpg'
import type3 from '../../public/images/types/widex_4.jpg'
import moment from '../../public/images/brand_type/widex/moment.png'
import momentbte from '../../public/images/brand_type/widex/momentbte.png'
import evoke from '../../public/images/brand_type/widex/evoke.jpg'
import magnify from '../../public/images/brand_type/widex/magnify.png'
import enjoy from '../../public/images/brand_type/widex/enjoy.png'
import menu from '../../public/images/brand_type/widex/menu.webp'
import Link from 'next/link'
import Image from 'next/image'
import H2eadtag from '@/Components/H2eadtag'
import Spacing from '@/Components/Spacing'
import Section from '@/Components/Section'

const widex = () => {
  return (
    <>

      <Section  className='bg_color'>
        <div className='container' id='signa'>
          <H2eadtag>Widex Hearing Aids</H2eadtag>
        </div>
     </Section>
    
     
      <Section >
        <div className="container" id="signa_types">
          <div className="row gy-5 ">

            <div className="col-md-4 ">
              <div class="card ">
                <div className='text-center'>
                 <Image src={moment} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Moment Sheer</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Receiver-in-Canal</p>
                     <p className='m-0 pb-1'>Rechargeable Li-ion Battery</p>
                     <p className='m-0 pb-1'>Speech Enhancement</p>
                     <p className='m-0 pb-1'>Reduction in Wind Noise</p>
                     <p className='m-0 pb-1'>Provides Audio Streaming</p>
                  </div>
                  <Link href="#" class="btn btn-warning my-3">
                     Price details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 recommended">
              <div class="card ">
              {/* <h5 className='m-0 fs-6 text-center pt-1'>Recommended</h5> */}
                <div className='text-center'>
                 <Image src={momentbte} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Moment</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Behind-the-Ear</p>
                     <p className='m-0 pb-1'>Rechargeable Li-ion Battery</p>
                     <p className='m-0 pb-1'>Ultrafast Sound Tracking</p>
                     <p className='m-0 pb-1'>Android & iPhone Connectivity.</p>
                     <p className='m-0 pb-1'>Provides Wireless Streaming</p>
                  </div>
                  <Link href="#" class="btn btn-warning my-3">
                     Price details
                  </Link>
                </div>
               
               
              </div>
            </div>
            <div className="col-md-4 ">
              <div class="card ">
                <div className='text-center'>
                 <Image src={magnify} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body   text-center bg_color">
                  <h5 class="card-title mb-3">Magnify</h5>
                  <h6 class="card-subtitle mb-2 text-black fw-medium ">Key Features</h6>
                  <div class="card-text  text-md-left text-center ">
                  <p className='m-0 pb-1' >Behind-the-Ear</p>
                     <p className='m-0 pb-1'>Rechargeable Li-ion Battery</p>
                     <p className='m-0 pb-1'>Wireless assist</p>
                     <p className='m-0 pb-1'>Bluetooth Connectivity</p>
                     <p className='m-0 pb-1'>Tinnitus Masker</p>
                  </div>
                  <Link href="#" class="btn btn-warning my-3">
                     Price details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div class="card ">
                <div className='text-center'>
                 <Image src={evoke} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Evoke</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Receiver-in-Canal</p>
                     <p className='m-0 pb-1'> Battery size 312</p>
                     <p className='m-0 pb-1'>Directional Focus</p>
                     <p className='m-0 pb-1'>Speech Enhancer</p>
                     <p className='m-0 pb-1'>Wind Noise Control</p>
                  </div>
                  <Link href="#" class="btn btn-warning my-3">
                     Price details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div class="card ">
                <div className='text-center'>
                 <Image src={enjoy} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Enjoy</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1'>Behind-the-Ear</p>
                  <p className='m-0 pb-1' >Battery size 13</p>
                     <p className='m-0 pb-1'>Better Noise Reducer</p>
                     <p className='m-0 pb-1'>Provides Feedback Cancelling</p>
                     <p className='m-0 pb-1'>iOS Streaming</p>
                  </div>
                  <Link href="#" class="btn btn-warning my-3">
                     Price details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div class="card ">
                <div className='text-center'>
                 <Image src={menu} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body   text-center bg_color">
                  <h5 class="card-title mb-3">Menu Super Power</h5>
                  <h6 class="card-subtitle mb-2 text-black fw-medium ">Key Features</h6>
                  <div class="card-text  text-md-left text-center ">
                  <p className='m-0 pb-1' >Behind-the-Ear</p>
                  <p className='m-0 pb-1'> Battery size 675</p>
                     <p className='m-0 pb-1'>Speech Enhancement</p>
                     <p className='m-0 pb-1'>Adjustable Frequency</p>
                     <p className='m-0 pb-1'>Tinnitus Management</p>
                  </div>
                  <Link href="#" class="btn btn-warning my-3">
                     Price details
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
         
        </div>
      </Section>
    </>
  )
}

export default widex
