import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import volta_pb from '../../public/images/brand_type/audio/Volta_P.webp'
import volta_hp from '../../public/images/brand_type/audio/Volta_HP.jpg'
import colta_hpt from '../../public/images/brand_type/audio/volta_hpt.jpg'
import stiline from '../../public/images/brand_type/audio/stiline.webp'
import mood_g4 from '../../public/images/brand_type/audio/mood_g4.png'
import hp_4 from '../../public/images/brand_type/audio/hp4.webp'



const audioservice = () => {
  return (
   <>
    <section id='signa' className='my-5'>
        <div className='container'>
           <h2 className='text-center'>Audio Service Hearing Aids</h2>
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
                 <Image src={volta_pb} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Volta PB</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Behind-the-Ear</p>
                     <p className='m-0 pb-1'>4 Channels</p>
                     <p className='m-0 pb-1'> Battery size 13 </p>
                     <p className='m-0 pb-1'>Fitting Range 10-80dB</p>
                     
                  </div>
                  <Link href="#" class="btn btn-warning my-3">
                     Price details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 recommended">
              <div class="card ">
                <div className='text-center pb-3'>
                 <Image src={volta_hp} width={240} height={180} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Volta HPT</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Behind-the-Ear</p>
                     <p className='m-0 pb-1'>6 Channels</p>
                     <p className='m-0 pb-1'> Battery size 675</p>
                     <p className='m-0 pb-1'>Fitting Range 20-120dB</p>
            
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
                 <Image src={colta_hpt} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body   text-center bg_color">
                  <h5 class="card-title mb-3">Volta HPC</h5>
                  <h6 class="card-subtitle mb-2 text-black fw-medium ">Key Features</h6>
                  <div class="card-text  text-md-left text-center ">
                  <p className='m-0 pb-1' >Behind-the-ear</p>
                     <p className='m-0 pb-1'>8 Channels</p>
                     <p className='m-0 pb-1'>Battery size 675</p>
                     <p className='m-0 pb-1'>Fitting Range 20-120dB</p>
                    
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
                 <Image src={stiline} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Stiline</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Receiver-in-Canal</p>
                     <p className='m-0 pb-1'>16 Channels</p>
                     <p className='m-0 pb-1'>Rechargeable Li-ion Battery</p>
                     <p className='m-0 pb-1'>Anti-Feedback System</p>
                     <p className='m-0 pb-1'>Impulse Suppressor</p>
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
                <div className='text-center '>
                 <Image src={mood_g4} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body  text-md-left text-center bg_color">
                  <h5 class="card-title mb-3 text-md-left text-center">Mood 3 G4</h5>
                  <h6 class="card-subtitle mb-2 fw-medium text-black text-md-left text-center ">Key Features</h6>
                  <div class="card-text  text-center ">
                  <p className='m-0 pb-1' >Receiver-in-Canal</p>
                     <p className='m-0 pb-1'>12 Channels</p>
                     <p className='m-0 pb-1'>Battery size 312</p>
                     <p className='m-0 pb-1'>Speech Enhancement</p>
                     <p className='m-0 pb-1'>Spatial Sense.</p>
                     <p className='m-0 pb-1'>Most Affordable RIC</p>
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
                 <Image src={hp_4} width={200} height={200} className=''/>
                </div>
              
                <div class="card-body   text-center bg_color">
                  <h5 class="card-title mb-3">HP4 G4</h5>
                  <h6 class="card-subtitle mb-2 text-black fw-medium ">Key Features</h6>
                  <div class="card-text  text-md-left text-center ">
                  <p className='m-0 pb-1' >Behind-the-Ear</p>
                     <p className='m-0 pb-1'>16 Channels</p>
                     <p className='m-0 pb-1'>Battery size 675</p>
                     <p className='m-0 pb-1'>Fitting Range 20-120dB</p>
                     <p className='m-0 pb-1'>Frequency Compression</p>
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
        </div>
      </section>
   </>
  )
}

export default audioservice
