import React from 'react'

import signa_1 from '../../public/images/brand_type/signa/styleto_ax.jpg'
import type1 from '../../public/images/brand_type/signa/pure_charge.jpg'
import type2 from '../../public/images/brand_type/signa/insio_ax.jpg'
import type3 from '../../public/images/brand_type/signa/motion_charge.png'
import type4 from '../../public/images/brand_type/signa/silk_x.jpg'
import type5 from '../../public/images/brand_type/signa/motion_sp.png'

import Image from 'next/image'
import Spacing from '@/Components/Spacing'
import Link from 'next/link'
import HeadTag from '@/Components/HeadTag'
import Section from '@/Components/Section'
import H2eadtag from '@/Components/H2eadtag'

const signa = () => {
  return (
    <>
    
      <Section className='bg_color'>
        <div className='container'  id='signa'>
        <H2eadtag>Signia Hearing Aids</H2eadtag>
        </div>
     </Section>
    
     
      <Section >
        <div className="container" id="signa_types">
          <div className="row gy-5 ">
            <div className="col-md-4 ">
              <div class="card ">
                <div className='text-center'>
                 <Image src={signa_1} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Styletto AX Slim</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Receiver-in-canal</p>
                     <p className='m-0 pb-1'>16-48 Channels</p>
                     <p className='m-0 pb-1'>Rechargeable Li-ion battery</p>
                     <p className='m-0 pb-1'>Outstanding Speech Clarity</p>
                     <p className='m-0 pb-1'>Android & iPhone Connectivity</p>
                     <p className='m-0 pb-1'>AI Assistant.</p>
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
                 <Image src={type1} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Pure Charge N G0 AX</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Receiver-in-canal</p>
                     <p className='m-0 pb-1'>48 Channels</p>
                     <p className='m-0 pb-1'>Rechargeable Li-ion battery</p>
                     <p className='m-0 pb-1'>Augmented Speech Understanding</p>
                     <p className='m-0 pb-1'>Immersive Soundscape</p>
                     <p className='m-0 pb-1'>AI Digital Assistant.</p>
                     {/* <p className='m-0 pb-1'></p> */}
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
                 <Image src={type2} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body   text-center bg_color">
                  <h5 class="card-title mb-3">Insio Charge N Go AX</h5>
                  <h6 class="card-subtitle mb-2 text-black fw-medium ">Key Features</h6>
                  <div class="card-text  text-md-left text-center ">
                  <p className='m-0 pb-1'>In-the-canal</p>
                     <p className='m-0 pb-1'>48 Channels</p>
                     <p className='m-0 pb-1'>Rechargable battery size 312</p>
                     <p className='m-0 pb-1'>Outstanding Speech Clarity</p>
                     <p className='m-0 pb-1'>Customized Fit</p>
                     <p className='m-0 pb-1'>Bluetooth Connectivity</p>
                  </div>
                  <Link href="#" class="btn btn-warning my-3">
                     Price details
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className='col-md-6'>


            </div> */}
            <div className="col-md-4 ">
              <div class="card ">
                <div className='text-center'>
                 <Image src={type3} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Motion Charge N Go X</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' > Behind-the-ear</p>
                     <p className='m-0 pb-1'>16-48 Channels</p>
                     <p className='m-0 pb-1'>Rechargable Li-ion battery</p>
                     <p className='m-0 pb-1'>Good Sound Clarity</p>
                     <p className='m-0 pb-1'>Feedback Correction</p>
                     <p className='m-0 pb-1'>Tinnitus masker</p>
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
                 <Image src={type4} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Silk X</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Completely-in-canal</p>
                     <p className='m-0 pb-1'>16-48 Channels</p>
                     <p className='m-0 pb-1'>Rechargable battery size 10</p>
                     <p className='m-0 pb-1'>Adaptive Directionality</p>
                     <p className='m-0 pb-1'>Better Noisce Cancellation</p>
                     <p className='m-0 pb-1'>Own Voice Processing(OVP)</p>
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
                 <Image src={type5} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body   text-center bg_color">
                  <h5 class="card-title mb-3">Motion SP</h5>
                  <h6 class="card-subtitle mb-2 text-black fw-medium ">Key Features</h6>
                  <div class="card-text  text-md-left text-center ">
                  <p className='m-0 pb-1' >Behind-the-ear</p>
                     <p className='m-0 pb-1'>16-24 Channels</p>
                     <p className='m-0 pb-1'>Rechargable battery size of 675</p>
                     <p className='m-0 pb-1'>Speech and Noisce Management</p>
                     <p className='m-0 pb-1'>Tinnitus Management</p>
                     <p className='m-0 pb-1'>SpeechMaster</p>
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
  );
}

export default signa
