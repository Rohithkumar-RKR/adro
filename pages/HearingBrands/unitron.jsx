import Image from 'next/image'
import React from 'react'

import moxi_viv from '../../public/images/brand_type/unitron/moxi_viv.jpg'
import moxi_blu from '../../public/images/brand_type/unitron/moxi_blu.jpg'
import inser_cic from '../../public/images/brand_type/unitron/insera_cic.jpg'
import shine_rev from '../../public/images/brand_type/unitron/shine_rev.png'
import shride_blu from '../../public/images/brand_type/unitron/stride_blu.webp'
import t_max from '../../public/images/brand_type/unitron/T_max.png'
import Link from 'next/link'

const unitron = () => {
  return (
   <>
   <section id='signa' className='my-5'>
        <div className='container'>
           <h2 className='text-center'>Unitron Hearing Aids</h2>
        </div>
     </section>
     
      <section id="signa_types">
        <div className="container">
          <div className="row mb-5 gy-4 ">
            {/* <div className='col-md-6'>
               
               <h3 className=''> Signia Styletto AX</h3>
                <div className="row p-3">
                  <div className='col-6 '>
                      <Image src={type1}  className='img-fluid'/>
                  </div>
                  <div className='col-6 '>
                  <div>
                     <h5>Key Features</h5>
                     <p className='m-0' >Outstanding Speech Clarity.</p>
                     <p className='m-0'>Award-winning design.</p>
                     <p className='m-0'>Recharge on-the-go.</p>
                     <p className='m-0'>Android & iPhone Connectivity.</p>
                     <p className='m-0'>AI Assistant.</p>
                   </div>
                  </div>
                </div>
                <div>

                </div>
                
               </div> */}
            {/* <div className="col-md-4 ">
              <div class="card ">
                <div className='text-center'>
                 <Image src={type1} width={250} height={300} className='img-fluid'/>
                </div>
              
                <div class="card-body text-md-left text-center bg_color">
                  <h5 class="card-title mb-2  ">Signia Styletto AX</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black ">Key Features</h6>
                  <div class="card-text  text-md-left text-center">
                  <p className='m-0 pb-1' >Outstanding Speech Clarity.</p>
                     <p className='m-0 pb-1'>Award-winning design.</p>
                     <p className='m-0 pb-1'>Recharge on-the-go.</p>
                     <p className='m-0 pb-1'>Android & iPhone Connectivity.</p>
                     <p className='m-0 pb-1'>AI Assistant.</p>
                  </div>
                  <Link href="#" class="btn btn-warning my-3">
                     Price details
                  </Link>
                </div>
              </div>
            </div> */}
            <div className="col-md-4 ">
              <div class="card ">
                <div className='text-center'>
                 <Image src={moxi_viv} width={230} height={300} className='img-fluid'/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Moxi Vivante</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Receiver-in-canal</p>
                     <p className='m-0 pb-1'>12-20 Channels</p>
                     <p className='m-0 pb-1'>Rechargable Li-ion battery</p>
                     <p className='m-0 pb-1'>Noise Reduction</p>
                     <p className='m-0 pb-1'>Speech Enhancement</p>
                     <p className='m-0 pb-1'>Pinna Effect</p>
                  </div>
                  <Link href="#" class="btn btn-warning my-3">
                     Price details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 recommended">
              <div class="card ">
                <div className='text-center'>
                 <Image src={moxi_blu} width={230} height={300} className='img-fluid'/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">
                  Moxi Blu</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Receiver-in-canal</p>
                     <p className='m-0 pb-1'>12-20 Channels</p>
                     <p className='m-0 pb-1'>Rechargable Li-ion Battery</p>
                     <p className='m-0 pb-1'>Dynamic Noise Reduction</p>
                     <p className='m-0 pb-1'>Spatial awareness</p>
                     <p className='m-0 pb-1'>Soft Speech Lift</p>
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
                 <Image src={shride_blu} width={230} height={300} className='img-fluid'/>
                </div>
              
                <div class="card-body   text-center bg_color">
                  <h5 class="card-title mb-3">StrideBlu </h5>
                  <h6 class="card-subtitle mb-2 text-black fw-medium ">Key Features</h6>
                  <div class="card-text  text-md-left text-center ">
                  <p className='m-0 pb-1' >Behind-the-ear</p>
                     <p className='m-0 pb-1'>12-20 Channels</p>
                     <p className='m-0 pb-1'>Battery Size 675</p>
                     <p className='m-0 pb-1'>Dual Receiver</p>
                     <p className='m-0 pb-1'>Sound Optimization</p>
                     <p className='m-0 pb-1'>Feedback Canceler</p>
                  </div>
                  <Link href="#" class="btn btn-warning my-3">
                     Price details
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className='col-md-6'>


            </div> */}
          </div>
          <div className="row mb-5 gy-4 ">
            {/* <div className='col-md-6'>
               
               <h3 className=''> Signia Styletto AX</h3>
                <div className="row p-3">
                  <div className='col-6 '>
                      <Image src={type1}  className='img-fluid'/>
                  </div>
                  <div className='col-6 '>
                  <div>
                     <h5>Key Features</h5>
                     <p className='m-0' >Outstanding Speech Clarity.</p>
                     <p className='m-0'>Award-winning design.</p>
                     <p className='m-0'>Recharge on-the-go.</p>
                     <p className='m-0'>Android & iPhone Connectivity.</p>
                     <p className='m-0'>AI Assistant.</p>
                   </div>
                  </div>
                </div>
                <div>

                </div>
                
               </div> */}
            {/* <div className="col-md-4 ">
              <div class="card ">
                <div className='text-center'>
                 <Image src={type1} width={250} height={300} className='img-fluid'/>
                </div>
              
                <div class="card-body text-md-left text-center bg_color">
                  <h5 class="card-title mb-2  ">Signia Styletto AX</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black ">Key Features</h6>
                  <div class="card-text  text-md-left text-center">
                  <p className='m-0 pb-1' >Outstanding Speech Clarity.</p>
                     <p className='m-0 pb-1'>Award-winning design.</p>
                     <p className='m-0 pb-1'>Recharge on-the-go.</p>
                     <p className='m-0 pb-1'>Android & iPhone Connectivity.</p>
                     <p className='m-0 pb-1'>AI Assistant.</p>
                  </div>
                  <Link href="#" class="btn btn-warning my-3">
                     Price details
                  </Link>
                </div>
              </div>
            </div> */}
            <div className="col-md-4 ">
              <div class="card ">
                <div className='text-center'>
                 <Image src={shine_rev} width={230} height={300} className='img-fluid'/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Shine Rev</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Behind-the-ear</p>
                     <p className='m-0 pb-1'>12 Channels</p>
                     <p className='m-0 pb-1'>Battery size  312</p>
                     <p className='m-0 pb-1'>Microphone Shield</p>
                     <p className='m-0 pb-1'>Better Sound Enhancement</p>
                     <p className='m-0 pb-1'>Good Noise reduction </p>
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
                 <Image src={t_max} width={230} height={300} className='img-fluid'/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">
T Max</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Behind-the-ear</p>
                     <p className='m-0 pb-1'>6 Channels</p>
                     <p className='m-0 pb-1'>Battery Size 13</p>
                     <p className='m-0 pb-1'>Wind Control</p>
                     <p className='m-0 pb-1'>Feedback Mangement</p>
                     <p className='m-0 pb-1'>Directional Microphone</p>
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
                 <Image src={inser_cic} width={230} height={300} className='img-fluid'/>
                </div>
              
                <div class="card-body   text-center bg_color">
                  <h5 class="card-title mb-3">Insera B</h5>
                  <h6 class="card-subtitle mb-2 text-black fw-medium ">Key Features</h6>
                  <div class="card-text  text-md-left text-center ">
                  <p className='m-0 pb-1' >Completely-in-the-canal</p>
                     <p className='m-0 pb-1'>12-20 Channels</p>
                     <p className='m-0 pb-1'>Battery size 312</p>
                     <p className='m-0 pb-1'>Tinnitus Masker</p>
                     <p className='m-0 pb-1'>Better Noise Attenuation</p>
                     <p className='m-0 pb-1'>Spatial Awareness</p>
                  </div>
                  <Link href="#" class="btn btn-warning my-3">
                     Price details
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className='col-md-6'>


            </div> */}
          </div>
        </div>
      </section>
   </>
  )
}

export default unitron
