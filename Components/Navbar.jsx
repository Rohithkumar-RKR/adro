import Link from "next/link";
import React, { useState } from "react";
import logo from "../public/images/Adro-logo-1.png";
import Image from "next/image";


const Navbar = () => {
 
 
   

 
  return (
    <>
      <nav class="navbar navbar-expand-lg " id="navbar">
        <div class="container">
          <Link class="navbar-brand" href="/">
            {/* <Image src={logo} width={150} height={100} className="" /> */}
            <h2>ADRO</h2>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-md-4 mx-2">
                <Link
                  class={` nav-link active  fw-medium`} 
                  aria-current="page"
                  href="/"
                  
                >
                  Home
                </Link>
              </li>
              <li class="nav-item mx-md-4 mx-2">
                <Link class="nav-link fw-medium" href="/about"  >
                  About us
                </Link>
              </li>
              <li class="nav-item dropdown mx-md-4 mx-2">
                <Link
                  class="nav-link dropdown-toggle fw-medium"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hearing Aids
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link
                      class="dropdown-item "
                      href="/brands/signia"
                    >
                      Signia Hearing Aids
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item "
                      href="/brands/widex"
                    >
                      Widex Hearing Aids
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item "
                      href="/brands/phonak"
                   
                    >
                      Phonak Hearing Aids
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item "
                      href="/brands/resound"
                    >
                      Resound Hearing Aids
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item "
                      href="/brands/audioservice"
                    >
                      Audio Service Hearing Aids
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item "
                      href="/brands/oticon"
                    >
                      Oticon Hearing Aid
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item"
                      href="/brands/unitron"
                    >
                      Unitron Hearing Aid
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item "
                      href="/brands/interton"
                    >
                      Interton Hearing Aid
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown mx-md-4 mx-2 fw-medium">
                <Link
                  class="nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link
                      class="dropdown-item "
                      href="/services/puretoneaudio"
                    >
                      Pure Tone Audiometry
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item "
                      href="/services/impedenceaudiometry"
                    >
                      Impedance Audiometry
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item "
                      href="/services/hearingaidtrail"
                    >
                      Hearing Aid Trial and Fitting
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item "
                      href='/services/hearingaidrepair'
                    >
                      Hearing Aid Repair and Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item "
                      href="/services/tinnitustreatment"
                    >
                      Tinnitus Treatment
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item"
                      href="/services/hearingaidaccessories"
                    >
                      Hearing Aid Accessories
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li class="nav-item  mx-md-2">
          <Link class="nav-link fw-medium" href="#">Pricing</Link>
        </li> */}
              <li class="nav-item  mx-md-4 mx-2">
                <Link class="nav-link fw-medium" href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
