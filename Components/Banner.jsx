import React from 'react'
import bannerimg from '../public/images/service.jpg'
import Image from 'next/image'

const Banner = () => {
  return (
    
       <>
    <section id="banner_service">
      <div className='container-fluid p-0'>
         <Image src={bannerimg} className="img-fluid"/>
      </div>
    </section>
    </>
   
  )
}

export default Banner
