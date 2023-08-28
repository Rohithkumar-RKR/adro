import React from 'react'
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


import Image from 'next/image';


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
            loop:false
        }
    }
  };
const sample = () => {
  return (
    <>
       < div className='container' id='carosel'>
      <OwlCarousel className="owl-theme"{...options}>
        
           <div className='item'>
               <Image src={signa}  width={300} height={250} className=""/>
           </div>
           <div className='item'>
               <Image src={widex}  width={300} height={250} className=""/>
           </div>
           <div className='item'>
               <Image src={phonak}  width={300} height={250} className=""/>
           </div>
           <div className='item'>
               <Image src={resound}  width={300} height={250} className=""/>
           </div>
           <div className='item'>
               <Image src={rexton}  width={300} height={250} className=""/>
           </div>
           <div className='item'>
               <Image src={oticon}  width={300} height={250} className=""/>
           </div>
           <div className='item'>
               <Image src={unitron}  width={300} height={250} className=""/>
           </div>
           <div className='item'>
               <Image src={signa}  width={300} height={250} className=""/>
           </div>
     </OwlCarousel>
    </div>
    <section id="autotype">
       <div className='container contains '>
           <h2 className='text'>Typing in css</h2>
       </div>
    </section>
    </>
    
  )
}

export default sample
