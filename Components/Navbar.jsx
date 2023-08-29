import Link from 'next/link'
import React from 'react'
import logo from '../public/images/Adro-logo-1.png'
import Image from 'next/image'

const Navbar = () => {
  return (
   <>
   <nav class="navbar navbar-expand-lg " id="navbar">
  <div class="container">
    <Link class="navbar-brand" href="/"><Image src={logo} width={150} height={100} className="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item mx-md-2">
          <Link class="nav-link active fw-medium" aria-current="page" href="/">Home</Link>
        </li>
        <li class="nav-item  mx-md-2">
          <Link class="nav-link fw-medium" href="/about">About us</Link>
        </li>
        <li class="nav-item dropdown mx-md-2">
          <Link class="nav-link dropdown-toggle fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Hearing Aids
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item fw-medium" href="/HearingBrands/signa">Signa Hearing Aids</Link></li>
            <li><Link class="dropdown-item fw-medium" href="/HearingBrands/widex">Widex Hearing Aids</Link></li>
            <li><Link class="dropdown-item fw-medium" href="/HearingBrands/phonak">Phonak Hearing Aids</Link></li>
            <li><Link class="dropdown-item fw-medium" href="/HearingBrands/resound">Resound Hearing Aids</Link></li>
            <li><Link class="dropdown-item fw-medium" href="/HearingBrands/signa">Starkey Hearing Aids</Link></li>
            <li><Link class="dropdown-item fw-medium" href="/HearingBrands/signa">Oticon Hearing Aid</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown mx-md-2">
          <Link class="nav-link dropdown-toggle fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item fw-medium" href="/services/puretoneaudio">Pure Tone Audiometry</Link></li>
            <li><Link class="dropdown-item fw-medium" href="/services/impedenceaudiometry">Impedance Audiometry</Link></li>
            <li><Link class="dropdown-item fw-medium" href="/services/hearingaidtrail">Hearing Aid Trial and Fitting</Link></li>
            <li><Link class="dropdown-item fw-medium" href="/services/hearingaidrepair">Hearing Aid Repair Service</Link></li>
            <li><Link class="dropdown-item fw-medium" href="/services/tinnitustreatment">Tinnitus Treatment</Link></li>
            <li><Link class="dropdown-item fw-medium" href="/services/hearingaidaccessories">Hearing Aid Accessories</Link></li>
          </ul>
        </li>
        {/* <li class="nav-item  mx-md-2">
          <Link class="nav-link fw-medium" href="#">Pricing</Link>
        </li> */}
        <li class="nav-item  mx-md-2">
          <Link class="nav-link fw-medium" href="/contact">Contact Us</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar
