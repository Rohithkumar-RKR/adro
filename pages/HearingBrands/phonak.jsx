import React from 'react'
import audeolum from '../../public/images/brand_type/phonak/audeo_lum.png'
import audeopar from '../../public/images/brand_type/phonak/audeo_par.png'
import naida from '../../public/images/brand_type/phonak/naida.png'
import virto from '../../public/images/brand_type/phonak/virto.png'
import skym from '../../public/images/brand_type/phonak/skym.png'
import vitus from '../../public/images/brand_type/phonak/vitus.webp'
import Image from 'next/image'
import Link from 'next/link'


const phonak = () => {
  return (
   <>
    <section id='signa' className='my-5'>
        <div className='container'>
           <h1 className='text-center'>Phonak Hearing Aids</h1>
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
                 <Image src={audeolum} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Audeo Lumity</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Receiver-in-Canal</p>
                     <p className='m-0 pb-1'>20 Channels</p>
                     <p className='m-0 pb-1'>Rechargable Li-ion Battery</p>
                     <p className='m-0 pb-1'>Comfort in Noise</p>
                     <p className='m-0 pb-1'>Speech Enhancer</p>
                     <p className='m-0 pb-1'>Tinnitus Balance</p>
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
                 <Image src={audeopar} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Audeo Paradise</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Receiver-in-Canal</p>
                     <p className='m-0 pb-1'>12-20 Channels</p>
                     <p className='m-0 pb-1'>Rechargable Li-ion Battery</p>
                     <p className='m-0 pb-1'>Motion Sensor Hearing</p>
                     <p className='m-0 pb-1'>Dynamic Noise Cancellation</p>
                     <p className='m-0 pb-1'>EchoBlock</p>
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
                 <Image src={naida} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body   text-center bg_color">
                  <h5 class="card-title mb-3">Naida Paradise</h5>
                  <h6 class="card-subtitle mb-2 text-black fw-medium ">Key Features</h6>
                  <div class="card-text  text-md-left text-center ">
                  <p className='m-0 pb-1' >Behind-the-Ear</p>
                     <p className='m-0 pb-1'>12-20 Channels</p>
                     <p className='m-0 pb-1'>Rechargable Li-ion Battery</p>
                     <p className='m-0 pb-1'>Comfort in Noise</p>
                     <p className='m-0 pb-1'>SteroZoom</p>
                     <p className='m-0 pb-1'>SoundRelax</p>
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
                 <Image src={skym} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Sky M-Pediatric</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Behind-the-Ear</p>
                     <p className='m-0 pb-1'>8-12 Channels</p>
                     <p className='m-0 pb-1'>Rechargable Li-ion Battery</p>
                     <p className='m-0 pb-1'>Made for Children</p>
                     <p className='m-0 pb-1'>Maximun Speech Enhancement</p>
                     <p className='m-0 pb-1'>Better Audio Quality</p>
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
                 <Image src={virto} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Virto</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >In-the-Canal</p>
                     <p className='m-0 pb-1'>12-20 Channels</p>
                     <p className='m-0 pb-1'>Battery size 312</p>
                     <p className='m-0 pb-1'>Tap Control</p>
                     <p className='m-0 pb-1'>RogerDirect</p>
                     <p className='m-0 pb-1'>UltraZoom Sound Recover</p>
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
                 <Image src={vitus} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body   text-center bg_color">
                  <h5 class="card-title mb-3">Vitus+</h5>
                  <h6 class="card-subtitle mb-2 text-black fw-medium ">Key Features</h6>
                  <div class="card-text  text-md-left text-center ">
                  <p className='m-0 pb-1' >Behind-the-Ear</p>
                     <p className='m-0 pb-1'>6 Channels</p>
                     <p className='m-0 pb-1'>Battery size 675</p>
                     <p className='m-0 pb-1'>QuickSync</p>
                     <p className='m-0 pb-1'>Good Sound Recover</p>
                     <p className='m-0 pb-1'>Speech in Noise</p>
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

export default phonak
