import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faFontAwesome, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import Spacing from '@/Components/Spacing'
import Section from '@/Components/Section'
import Link from 'next/link'

const contact = () => {
  return (
    <>
    <Spacing/>
    <Section  className='bg_color'>
      <div className='container py-5 text-white' id="contact">
         <div className='row d-flex justify-content-between gy-5'>
           <div className='col-md-7 mb-md-0 mb-3 '>
           <div className=" p-4 bg_grad text-black border rounded-3">
                <h4 className="text-center mb-4">Book a Free Hearing Aid Trial</h4>
                <p>Reach out to us through by taking  the first step towards rediscovering the joy of clear and vibrant hearing with our advanced hearing aid solutions.</p>
                <div>
                  <form>
                    <div className="mb-3">
                      <input
                        type="text"
                        class="form-control "
                        aria-describedby="emailHelp"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Phone no"
                      />
                    </div>
                    <div className="mb-3">
                      <select
                        class="form-select 0"
                        aria-label="Default select example"
                      >
                        <option selected  className="">Services</option>
                        <option value="1">Pure Tone Audiometry</option>
                        <option value="2">Impedance Audiometry</option>
                        <option value="3">Hearing Aid Trial and Fitting</option>
                        <option value="4">Hearing Aid Repair Service</option>
                        <option value="4">Tinnitus Treatment</option>
                        <option value="4">Hearing Aid Accessories</option>
                      </select>
                    </div>
                    <div class="mb-3">
                     
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Define your hearing problem"
                      ></textarea>
                    </div>
                     <div className="mt-4 mb-4 ">
                     <button type="submit" class="btn btn-warning p-2 fw-medium  w-100 ">
                      Submit
                    </button>
                     </div>
                    
                  </form>
                </div>
              </div>
           </div>
           <div className='col-md-4'>
              <div className=' text-center mb-5'>
                <p className=''><FontAwesomeIcon icon={faLocationDot}  style={{width:"30px"}}/></p>  
                <h5 className='m-2'>Address</h5>
                <p>No.940, 1st floor, 9th cross, 24th main road H.S.R Layout, Sector 1, Bengaluru, Karnataka, 560102.</p>
              </div>
              <div className=' text-center mb-5'>
                <p ><FontAwesomeIcon icon={faPhone}  style={{width:"30px"}}/></p>  
                <h5 className='m-1'>Phone no</h5>
                <p>+91-98809 15931</p>
              </div>
              <div className=' text-center '>
                <p  ><FontAwesomeIcon icon={faEnvelope}  style={{width:"30px"}}/></p>  
                <h5 className='m-1'>Email</h5>
                <p>blr.hsr@adrohearingaid.com</p>
              </div>
           </div>
         </div>
      </div>
    </Section>
    <Spacing/>
    <Section>
       {/* <div className='container' id='map'>
          <div className='row'>
            <div className='col-md-12 map-responsive'>
            <iframe className='' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31110.653632305828!2d77.64933600000002!3d12.918536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1483e76962a3%3A0x9bf903efc90f0d12!2sAdro%20Hearing%20Aid%20Centre%20Bangalore!5e0!3m2!1sen!2sin!4v1693223710188!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
         
          </div>
       </div> */}
       <div className='container'>
          <h4 className='mb-4'>Navigate to Our Hearing Aid Center</h4>
          <Link className='btn btn-warning p-2 px-4' href="https://goo.gl/maps/diytnHpeURYzXArK8" target="_blank">Get Directions</Link>
       </div>
    </Section>
    <Spacing/>

    </>
  )
}

export default contact
