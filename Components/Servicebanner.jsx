import React from 'react'
import bannerimg from '../public/imagesservice.jpg'

const servicebanner = () => {
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

export default servicebanner
