import React from 'react'
import banner from "../public/images/about_banner.jpg"
import about_1 from "../public/images/about1.jpg"
import appoint from "../public/images/appoint.jpg"

import Image from 'next/image';
import Link from 'next/link';
import Bookbtn from '@/Components/Bookbtn';

 function Home() {
  return (
    <>
      <section id="banner_about">
        <div className=" p-0">
          <div className="postion-relative img-fluid">
            <Image src={banner} className="img-fluid " />
          </div>
          <h1 className=" about">About Adro Hearing Clinic</h1>
        </div>
      </section>
      <section id="tagline" className="py-md-5 py-4 ">
        <div className="container">
          <h2 className="fs-1 text-center">
            "Elevating Lives, One Sound at a Time"
          </h2>
          <h4 className="text-center">
            We’ll help to find The Perfect Hearing Aids
          </h4>
        </div>
      </section>
      <section id="about_us" className="py-md-5 py-3 bg_color ">
        <div className="container">
          <h2 className="text-center pb-3">About Adro</h2>
          <div className="row">
            <div className="col-md-6 my-auto">
              <h3>Best Hearing Clinic</h3>
              <p className="  fw-medium ">
                We're more than a hearing aid company – we're your partners in
                better hearing. Our mission is to restore the joy of sound to
                people's lives. With a blend of innovation and compassion, we
                create hearing solutions that deliver not just sound, but also
                smiles.
              </p>
              <p className=" fw-medium">
                During your one-on-one appointment, we will answer all of your
                questions, even ones you might not have thought of, in safe,
                homey environment. It is important that you understand all of
                the options available to you. This is a big decision, and we
                want you to know as much as possible about all of your choices.
              </p>
            </div>
            <div className="col-md-6">
              <div className=" shadow  mb-5 bg-body rounded">
                <Image src={about_1} className="img-fluid" />
              </div>
            </div>
          </div>
          <p></p>
        </div>
      </section>
      <section id="appointment" className=" ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-auto">
              <div className=" shadow   bg-body rounded">
                <Image src={appoint} className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 ps-4">
              
              <h3 className="fs-2 fw-bold pt-3">
                See how our hearing aids can transform your life
              </h3>
              <p className='fw-medium pt-4 pb-3'>
                A virtually invisible design with advanced digol technology,
                delivering high-quality sound. You will hear clearly and
                comfortably in a variety of settings thanks to its advanced
                digital technology.
              </p>
              
  
              <button className='btn btn-warning p-2 fw-medium'><Link href="/" className='text-decoration-none text-black'>Book an appointment</Link></button>
            </div>
          </div>
        </div>
      </section>
      <Bookbtn/>
    </>
  );
}
export default Home;
