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

const widex = () => {
  return (
    <>
      <section id='signa' className='my-5'>
        <div className='container'>
           <h2 className='text-center'>Widex Hearing Aids</h2>
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
            {/* <div className='col-md-6'>


            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default widex
