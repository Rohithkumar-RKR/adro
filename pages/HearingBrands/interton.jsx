import Image from 'next/image'
import Link from 'next/link'

import move_hp from '../../public/images/brand_type/interon/move_hp.webp'
import move_sp from '../../public/images/brand_type/interon/move_sp.webp'
import move_rec from '../../public/images/brand_type/interon/move_rec.webp'
import gain_sp from '../../public/images/brand_type/interon/gain_sp.webp'
import move_wire from '../../public/images/brand_type/interon/move_wire.jpg'

import React from 'react'

const interton = () => {
  return (
    <>
     <section id='signa' className='my-5'>
        <div className='container'>
           <h2 className='text-center'>Interton Hearing Aids</h2>
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
                 <Image src={move_hp} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Move HP</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Behind-the-Ear</p>
                     <p className='m-0 pb-1'>4-12 Channels</p>
                     <p className='m-0 pb-1'>Battery size 13</p>
                     <p className='m-0 pb-1'>Outstanding Speech Clarity</p>
                     <p className='m-0 pb-1'>Android & iPhone Connectivity</p>
                     <p className='m-0 pb-1'>Better Noise Cancellation</p>
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
                 <Image src={move_sp} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Move SP</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Behind-the-Ear</p>
                     <p className='m-0 pb-1'>6-17 Channels</p>
                     <p className='m-0 pb-1'>Battery size 675</p>
                     <p className='m-0 pb-1'>Distortion Free Frequency</p>
                     <p className='m-0 pb-1'>Better Sound Recovery</p>
                     <p className='m-0 pb-1'>Provides Good Stable Gain</p>
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
                 <Image src={gain_sp} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body   text-center bg_color">
                  <h5 class="card-title mb-3">Gain SP</h5>
                  <h6 class="card-subtitle mb-2 text-black fw-medium ">Key Features</h6>
                  <div class="card-text  text-md-left text-center ">
                  <p className='m-0 pb-1'>Behind-the-Ear</p>
                     <p className='m-0 pb-1'>9 Channels</p>
                     <p className='m-0 pb-1'>Battery size 675</p>
                     <p className='m-0 pb-1'>Better Noise Cancellation</p>
                     <p className='m-0 pb-1'>Multi-Mic</p>
                     <p className='m-0 pb-1'>Sound Recovery</p>
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
                 <Image src={move_wire} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Move Wireless</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Completely-in-Canal</p>
                     <p className='m-0 pb-1'>17-8 Channels</p>
                     <p className='m-0 pb-1'>Battery size 10A</p>
                     <p className='m-0 pb-1'>Bluetooth Connectivity CIC</p>
                     <p className='m-0 pb-1'>Audio Streaming</p>
                     <p className='m-0 pb-1'>Integrated Directionality</p>
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
                 <Image src={move_rec} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Move Rechargeable</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Receiver-in-Canal</p>
                     <p className='m-0 pb-1'>12-17 Channels</p>
                     <p className='m-0 pb-1'>Rechargeable Li-ion Battery</p>
                     <p className='m-0 pb-1'>Fast Charging</p>
                     <p className='m-0 pb-1'>Bluetooth Connectivity</p>
                     <p className='m-0 pb-1'>Noise Reduction</p>
                  </div>
                  <Link href="#" class="btn btn-warning my-3">
                     Price details
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4 ">
              <div class="card ">
                <div className='text-center'>
                 <Image src={type5} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body   text-center bg_color">
                  <h5 class="card-title mb-2">Motion SP</h5>
                  <h6 class="card-subtitle mb-3 text-black fw-medium ">Key Features</h6>
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
            </div>  */}
            {/* <div className='col-md-6'>


            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default interton
