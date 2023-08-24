import React from "react";
import banner1 from "../public/images/banner-image.webp";
import banner2 from "../public/images/banner-img1.webp";
import banner3 from "../public/images/banner-img3.webp";
import introimg from "../public/images/intro-img.png";
import pro1 from "../public/images/image_1.png";
import pro2 from "../public/images/image_2.jpg"
import pro3 from "../public/images/image_3.png"
import pro4 from "../public/images/image_4.png"
import pro5 from "../public/images/pro_6.png"
import svg1 from "../public/images/one.svg"
import svg2 from "../public/images/two.svg"
import svg3 from "../public/images/three.svg"
import ser1 from "../public/images/serimg1.png"
import ser2 from "../public/images/serimg2.png"
import ser3 from "../public/images/serimg3.png"
import ser4 from "../public/images/serimg4.png"
import ser5 from "../public/images/serimg5.png"
import ser6 from "../public/images/serimg6.png"
import brand1 from "../public/images/brand1.png"
import brand2 from "../public/images/brand2.png"
import brand3 from "../public/images/brand3.png"
import brand4 from "../public/images/brand4.png"
import brand5 from "../public/images/brand5.png"
import brand6 from "../public/images/brand6.png"
import brand7 from "../public/images/brand7.png"
import brand8 from "../public/images/brand8.png"
import banner from  "../public/images/sample1.svg"
import intro_side from  "../public/images/intro_side.webp"

import choose_1 from "../public/images/offer_1.jpg"
import choose_2 from "../public/images/offer_2.jpg"
import choose_3 from "../public/images/offer_3.jpg"
import choose_4 from "../public/images/offer_4.jpg"

var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
  }
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

import signa from '../public/images/signa_logo.webp'
import widex from '../public/images/widex_logo.png'
import unitron from '../public/images/Unitron-logo.webp'
import resound from '../public/images/resound_logo.png'
import phonak from '../public/images/phonak_logo.jpg'
import oticon from '../public/images/oticon_logo.jpg'
import  rexton from '../public/images/rexton_logo.png'
import starkey from '../public/images/starkey_logo.jpg'

import Image from "next/image";
import Link from "next/link";
import Spacing from "@/Components/Spacing";
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
   ssr: false,
 });

 const options = {
   loop: true,
   margin: 15,
   items: 4,
   autoplay: true,
   nav:true,
   dots:true,
   responsiveClass:true,
   responsive:{
       0:{
           items:1,
           nav:false
       },
       600:{
           items:3,
           nav:false

       },
       1000:{
           items:4,
           nav:false,
           loop:true,
       }
   }
 };


const about = () => {
  return (
    <>
      <section id="banner">
         <div className="container-fluid p-0" data-aos="">
         <Image src={banner} width={2400}  className="img-fluid"/>
         </div>
      </section>
      <section id="intro" className=" py-5 bg_color  ">
         <div className="container py-5">
         <div className="row gy-3 ">
          <div className="col-md-6 ">
            <div className="" data-aos="fade-right">
             <h1>Welcome to Our Adro Hearing Clinic</h1>
             {/* <h1 className="mb-2">We are Specialized in Hearing Care Service</h1> */}
             <p>"Welcome to Adro Hearing Clinic, where better hearing means a better life. We specialize in advanced hearing solutions that restore clarity and connection. Our expert team is dedicated to improving your well-being through innovative technology and personalized care. Experience the joy of sound with us</p>
            </div>
           
          </div>
          <div className="col-md-6  ">
            <div className="intro_1">
              <h3>"Clearer Hearing Awaits: Book Your Hearing Aid Consultation Today!"</h3>
            </div>
            <div className="row gy-4">
               <div className="col-md-6 my-auto">
                   <Image src={intro_side} className="img-fluid"/>
               </div>
               <div className="col-md-6 my-auto">
                   <div className="text-center">
                     <button className="btn btn-warning p-2"><Link href={"#"} className=" text-decoration-none text-black"> Book a Free Consultation</Link></button>
                   </div>
               </div>
            </div>
              {/* <div className="intro_div text-center" data-aos="zoom-in">
                <Image src={introimg} width={250} height={100}  className="img-fluid intro_img"/>
              </div> */}
          </div>
        </div>
         </div>
       
      </section>
      <Spacing/>
      <section id="products" className="">
         <div className="container">
         <div className="mb-md-4">
         <h2 className="text-center">Our Products </h2>
         <p className="fw-normal">"Your Trusted Partner in Hearing Wellness. As an authorized retailer, we provide top-tier hearing aid services backed by brand expertise. Our skilled professionals offer tailored fittings, maintenance, and genuine accessories, ensuring your journey to improved hearing is seamless and successful. "</p>
         </div>
         <div className="row gy-3 mt-4"  data-aos="zoom-in">
            <div className="col-md-4 text-center  " >
              <div className="text-center border border-2 rounded">
               <div className="zoom">
               <Image src={pro1} width={300}  height={300} className="img-fluid zoomin "/>
               </div>
              <h5 className="my-2">BTE Ear-aid</h5>
              </div>
              
            </div>
            <div className="col-md-4 text-center">
              <div className="text-center border border-2 rounded mt-3 mt-md-0  ">
               <div className="zoom">
               <Image src={pro2} width={300}  height={300}className="img-fluid zoomin"/>
               </div>
              <h5 className="my-2">Ric Ear-aid</h5>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className=" border border-2 rounded mt-3 mt-md-0">
               <div className="zoom">
                  <Image src={pro3} width={300}  height={300} className="img-fluid zoomin"/>
               </div>
                 <h5 className="my-2">Custom Ear-aid</h5>
              </div>
            </div>
            </div>
            <div className="row mt-md-2 mt-3 gy-3" data-aos="zoom-in">
            <div className="col-md-4 text-center">
              <div className=" border border-2 rounded ">
               <div className="zoom">
               <Image src={pro4} width={300}  height={300} className="img-fluid zoomin"/>
               </div>
               <h5 className="my-2">Custom Ear-aid</h5>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className=" border border-2 rounded mt-3 mt-md-0">
               <div className="zoom">
                 <Image src={pro1} width={300}  height={300} className="img-fluid zoomin"/>
               </div>
                
                 <h5 className="my-2">Custom Ear-aid</h5>
              </div>
             
            </div>
            <div className="col-md-4 text-center">
              <div className=" border border-2 rounded mt-3 mt-md-0">
               <div className="zoom">
                  <Image src={pro1} width={300}  height={300} className="img-fluid zoomin"/>
               </div>
                 <h5  className="my-2">Custom Ear-aid</h5>
              </div>
            </div>
            </div>
         </div>
        
         
      </section>
      <Spacing/>
      {/* <section id="why_choose_us" className=" py-5 bg_color ">
         <div className="container py-5 ">
         <h2 className="py-3 text-center">Why choose us</h2> 
        <div className="row gy-3 px-4"  data-aos="zoom-in-left">
           <div className="col-md-4 ">
            <div className="text-center">
               <Image src={svg1} className="my-3"/>
               <h6>Free Comprehensive
                <br />
                Hearing Test</h6>
            </div>
           </div>
           <div className="col-md-4">
            <div className="text-center">
               <Image src={svg2} className="my-3"/>
                <h6>
                Free 2-Days take-home
                <br />
                 hearing aid trial
                </h6>
            </div>
           </div>
           <div className="col-md-4">
            <div className="text-center">
               <Image src={svg3} className="my-3"/>
               <h6>
               Same-day hearing
               <br />
                   assesment results
               </h6>
            </div>
           </div>
           <div className="text-center">
           <button className="btn btn-warning p-2 mt-3  ">Book an appointment</button>
           </div>
          
        </div> 
         </div>
      </section> */}
      <section id="offers" className="py-5 bg_color">
         <div className="container">
            <h2 className="text-center">Take the First Step Today & Get Exicting Offers</h2>
            <div className="row gy-4  mt-3 ">
             <div className="col-md-3">
               <div className="">
                  <Image src={choose_1} width={200} height={200} className="img-fluid" />
               </div>
               <div>
                  <h5 className="mt-3">Initial Consultation</h5>
                  <p>Our audiologist discuss your hearing needs and goals in a personalized consultation</p>
               </div>
             </div>
             <div className="col-md-3">
               <div className="">
                  <Image src={choose_2} width={200} height={200} className="img-fluid" />
               </div>
               <div>
                  <h5 className="mt-3">Hearing Evaluation</h5>
                  <p>Comprehensive tests are valuvated to assess your hearing for precise aid customization</p>
               </div>
             </div>
             <div className="col-md-3">
               <div className="">
                  <Image src={choose_3} width={200} height={200} className="img-fluid" />
               </div>
               <div>
                  <h5 className="mt-3"> Hearing Aid Selection</h5>
                  <p>Choose optimal aid based on lifestyle, comfort, and hearing needs. </p>
               </div>
             </div>
             <div className="col-md-3">
               <div className="">
                  <Image src={choose_4} width={200} height={200} className="img-fluid" />
               </div>
               <div>
                  <h5 className="mt-3"> Hearing Aid Selection</h5>
                  <p>Certifications, awards, and satisfied clients showcase our trusted hearing solutions. </p>
               </div>
             </div>
         </div>
         </div>
       
      </section>
      <Spacing/>
      <section id="service" className="">
         <div className="container">
         <h2 className="text-center mb-2">Our Services</h2>
          <div className="row gy-3 mar px-4 " >
        
        <div className="col-md-4 text-center d-flex justify-content-center  " data-aos="flip-up">
           <div className="text-center p-4   image_border">
            <h5 className="pt-4">Pure Tone Audiometry</h5>
            <p  className="fw-medium">Pure Tone Audiometry Test – often referred to as PTA is a behavioral test that measures hearing sensitivity. This test mainly helps in indicating the Pure Tone Thresholds (PTTs)</p>
           <div  className=" image_1  ">
           <Image src={ser1}/>
           </div>
           
           </div>
        </div>
        <div className="col-md-4 text-center d-flex justify-content-center mar_col  "  data-aos="flip-up">
           <div className="text-center p-4  image_border">
            <h5 className="pt-4">Impedance Audiometry</h5>
            <p  className="fw-medium">Impedance audiometry test is a vital test to analyze the middle ear condition. Primary use: Tympanic membrane and middle ear status are determined through this test.</p>
           <div  className=" image_1  ">
           <Image src={ser2}/>
           </div>
           
           </div>
        </div>
        <div className="col-md-4 text-center d-flex justify-content-center mar_col  "  data-aos="flip-up">
           <div className="text-center p-4   image_border">
            <h5 className="pt-4">Hearing Aid Trial & Fitting</h5>
            <p  className="fw-medium">Hearing aid fitting consists of a selection phase. Once hearing aid trial is completed, the selected hearing aid will be tuned and adjusted as per the customers need.</p>
           <div  className=" image_1  ">
           <Image src={ser3}/>
           </div>
           </div>
          </div>
        
       
          </div>
          <div className="row row_2 gy-3  ">
           <div className="col-md-4 text-center d-flex justify-content-center mar_col1  " data-aos="flip-up" >
            <div className="text-center p-4   image_border">
            <h5 className="pt-4">Hearing Aid Repair Service</h5>
            <p  className="fw-medium">Hearing aids are basically electronic device that requires regular service and maintenance. If your hearing aid isn’t working properly, kindly do not delay to service it.</p>
           <div  className=" image_1  ">
           <Image src={ser4}/>
           </div>
           </div>
        </div>
        <div className="col-md-4 text-center d-flex justify-content-center  mar_col " data-aos="flip-up">
            <div className="text-center p-4   image_border">
            <h5 className="pt-4">Tinnitus Treatment</h5>
            <p  className="fw-medium">For an effective Tinnitus Retraining Therapy session it fetches around 1hr for completion. The patient has to undergo this treatment for a prescribed duration of months.</p>
           <div  className=" image_1  ">
           <Image src={ser6}/>
           </div>
           </div>
        </div>
        <div className="col-md-4 text-center d-flex justify-content-center mar_col  " data-aos="flip-up">
            <div className="text-center p-4   image_border">
            <h5 className="pt-4">Hearing Aid Accessories</h5>
            <p className="fw-medium">Hearing aid batteries from PowerOne, & ReSound. Brand specific Hearing aid wireless accessories such as TV streamer, Phone Clip, Micro Phone & Remote control</p>
           <div  className=" image_1  ">
           <Image src={ser6}/>
           </div>
           </div>
        </div>
          </div>
          <div className="text-center mt-5"> 
          <button className="btn btn-warning p-3 fw-medium  "><Link href="/services/puretoneaudio" className=" text-decoration-none text-black">View Services</Link></button>
          </div>
         </div>
      </section>
      <Spacing/>
      <section id="brands" className=" ">
         <div className="container">
         <h2 className="text-center mb-4">Most Reccommended Brands</h2>
         <OwlCarousel className="owl-theme"{...options}>
        
           <div className='item'>
              <Link className="text-decoration-none text-black" href="/HearingBrands/signa"> <Image src={signa}  width={300} height={250} className=""/></Link>
           </div>
           <div className='item'>
            <Link className="text-decoration-none text-black" href="/HearingBrands/widex">
                 <Image src={widex}  width={300} height={250} className=""/>   
            </Link>
           </div>
           <div className='item'>
            <Link  className="text-decoration-none text-black" href="/HearingBrands/phonak">
              <Image src={phonak}  width={300} height={250} className=""/>
            </Link>
               
           </div>
           <div className='item'>
            <Link className="text-decoration-none text-black" href="/HearingBrands/resound">
            <Image src={resound}  width={300} height={250} className=""/>
            </Link>
             
           </div>
           <div className='item'>
              <Link className="text-decoration-none text-black" href="#">
                  <Image src={rexton}  width={300} height={250} className=""/>
              </Link>
             
           </div>
           <div className='item'>
             <Link className="text-decoration-none text-black" href="#">
             <Image src={oticon}  width={300} height={250} className=""/>
             </Link> 
           </div>
           <div className='item'>
               <Image src={unitron}  width={300} height={250} className=""/>
           </div>
           <div className='item'>
               <Image src={starkey}  width={400} height={250} className=""/>
           </div>
     </OwlCarousel>
        {/* <div className="row gy-3 text-center mt-3 "  data-aos="fade-left">
            <div className="col-md-3">
               <div>
                <Image src={brand1} className="img-fluid shadow p-2 mb-5 bg-body rounded "/>
               </div>
            </div>
            <div className="col-md-3">
               <div>
                <Image src={brand2} className="img-fluid shadow p-2 mb-5 bg-body rounded"/>
               </div>
            </div>
            <div className="col-md-3">
               <div>
                <Image src={brand3} className="img-fluid shadow p-2 mb-5 bg-body rounded"/>
               </div>
            </div>
            <div className="col-md-3">
               <div>
                <Image src={brand4} className="img-fluid shadow p-2 mb-5 bg-body rounded"/>
               </div>
            </div>
        </div>
        <div className="row gy-3 text-center " data-aos="fade-right"> 
            <div className="col-md-3">
               <div>
                <Image src={brand5} className="img-fluid shadow p-2 mb-3 bg-body rounded"/>
               </div>
            </div>
            <div className="col-md-3">
               <div>
                <Image src={brand6} className="img-fluid shadow p-2 mb-3 bg-body rounded"/>
               </div>
            </div>
            <div className="col-md-3">
               <div>
                <Image src={brand7} className="img-fluid shadow p-2 mb-3 bg-body rounded"/>
               </div>
            </div>
            <div className="col-md-3">
               <div>
                <Image src={brand8} className="img-fluid shadow p-2 mb-3 bg-body rounded"/>
               </div>
            </div>
        </div> */}
         </div>
       
      </section>
      <Spacing/>
      <section id="intro_1">
       di
      </section>
    </>
  );
};

export default about;
