import React from 'react'
import banner from "../public/images/about_banner.jpg"
import about_1 from "../public/images/about1.jpg"
import appoint from "../public/images/appoint.jpg"

import Image from 'next/image';
import Link from 'next/link';
import Bookbtn from '@/Components/Bookbtn';
import Spacing from '@/Components/Spacing';
import Section from '@/Components/Section';
import Bookmainbtn from '@/Components/Bookmainbtn';

 function Home() {
  return (
    <>
    <>
    <section className="">
        <div className=" py-2" id="banner_about">
          <div className="about d-flex justify-content-center  ">
            <h1 className="text-center about_adro ">About Adro Hearing Clinic</h1>
          </div>
        </div>
      </section>
    </>
     
      <>
      <Section>
        <div className="container" id="tagline">
          <h3 className="fs-md-2  text-center">
            "Elevating Lives, One Sound at a Time"
          </h3>
          <h4 className="text-center">
            We’ll help to find The Perfect Hearing Aids
          </h4>
        </div>
      </Section>
      </>
      
      
  <>
  <Section  className="bg_color">
        <div className="container py-2" id="about_us">
          <h2 className="text-center pb-5 m-0">About Adro</h2>
          <div className="row gy-4">
            <div className="col-md-6">
              <h3 className='mb-3'>Best Hearing Clinic</h3>
              <p className="">
                We're more than a hearing aid company – we're your partners in
                better hearing. Our mission is to restore the joy of sound to
                people's lives. With a blend of innovation and compassion, we
                create hearing solutions that deliver not just sound, but also
                smiles.
              </p>
              <p className=" mt-3">
                During your one-on-one appointment, we will answer all of your
                questions, even ones you might not have thought of, in safe,
                homey environment. It is important that you understand all of
                the options available to you. This is a big decision, and we
                want you to know as much as possible about all of your choices.
              </p>
            </div>
            <div className="col-md-6">
              <div className="rounded">
                <Image src={about_1} width={500} className="img-fluid" />
              </div>
            </div>
          </div>
          <p></p>
        </div>
      </Section>
  </>
      <Spacing/>
      <>
      <Section className="">
        <div className="container  py-2 "  id="appointment">
          <div className="row gy-5">
            <div className="col-md-6 ">
              <div className=" shadow   bg-body rounded">
                <Image src={appoint} className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6">
              
              <h3 className="fs-2 fw-bold ">
                See how our hearing aids can transform your life
              </h3>
              <p className='pt-2 pb-4 m-0'>
                A virtually invisible design with advanced digol technology,
                delivering high-quality sound. You will hear clearly and
                comfortably in a variety of settings thanks to its advanced
                digital technology.
              </p>
  
              <Bookmainbtn/>
            </div>
          </div>
        </div>
      </Section>
      <Spacing/>
      </>
    </>
  );
}
export default Home;
