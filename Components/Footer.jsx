import Link from "next/link";
import React from "react";
import Section from "./Section";

const Footer = () => {
  return (
    <Section className="bg_color">
      <div className="container py-md-3 pt-5 text-white">
        <div className="row gy-3">
          <div className="col-md-3">
            <h4 className="my-4 my-md-0  mb-3 mb-md-4 mx-3 mx-md-0">
             Brands Price List
            </h4>
           <div className="text-white">
           <p className="mb-0 py-1 pb-1 mx-3 mx-md-0">
                <Link href="/brands/signia" className="text-decoration-none text-white ">
                  Signia Hearing Aid Price List
                </Link>
              </p>
           </div>
           <p className="mb-0 py-1 pb-1  mx-3 mx-md-0">
                <Link href="/brands/widex" className="text-decoration-none text-white">
                  Widex Hearing Aid Price List
                </Link>
              </p>
              <p className="mb-0 py-1 pb-1 mx-3 mx-md-0">
                <Link href="/brands/phonak" className="text-decoration-none text-white">
                  Phonak Hearing Aid Price List
                </Link>
              </p>
              <p className="mb-0 py-1 pb-1 mx-3 mx-md-0">
                <Link href="/brands/resound" className="text-decoration-none text-white">
                  Resound Hearing Aid Price List
                </Link>
              </p>
              <p className="mb-0 py-1 pb-1 mx-3 mx-md-0">
                <Link href="/brands/unitron" className="text-decoration-none text-white">
                  Unitron Hearing Aid Price List
                </Link>
              </p>
              <p className="mb-0 py-1 pb-1 mx-3 mx-md-0">
                <Link href="/brands/oticon" className="text-decoration-none text-white">
                  Oticon Hearing Aid Price List
                </Link>
              </p>
              <p className="mb-0 py-1 pb-1 mx-3 mx-md-0">
                <Link href="/brands/interton" className="text-decoration-none text-white">
                  Interton Hearing Aid Price List
                </Link>
              </p>
              <p className="mb-0 py-1 pb-1 mx-3 mx-md-0">
                <Link href="/brands/audioservice" className="text-decoration-none text-white">
                  Audio Service Hearing Aid Price List
                </Link>
              </p>
          </div>
          <div className="col-md-3 ">
            <h4 className="mt-4 my-md-0 mb-3 mb-md-4 mx-3 mx-md-0">
              Our Services
            </h4>
            <div className="fw-normal">
              <p className="mb-0 py-1 pb-1 mx-3 mx-md-0">
                {" "}
                <Link href="/services/puretoneaudio" className="text-decoration-none text-white">
                  Pure Tone Audiometry Test
                </Link>
              </p>
              <p className="mb-0  py-1 pb-1 mx-3 mx-md-0">
                <Link href="/services/impedenceaudiometry" className="text-decoration-none  text-white">
                  Impedance Audiometry Test
                </Link>
              </p>
              <p className="mb-0  py-1 pb-1 mx-3 mx-md-0">
                <Link href="/services/hearingaidtrail" className="text-decoration-none  text-white">
                  Hearing Aid Trial and Fitting
                </Link>
              </p>
              <p className="mb-0  py-1 pb-1 mx-3 mx-md-0">
               
                <Link href="/services/hearingaidrepair" className="text-decoration-none  text-white">
                  Hearing Aid Repair and Service
                </Link>
              </p>
              <p className="mb-0  py-1 pb-1 mx-3 mx-md-0">
               
                <Link href="/services/tinnitustreatment" className="text-decoration-none  text-white">
                  Tinnitus Treatment
                </Link>
              </p>
              <p className="mb-0  py-1 pb-1 mx-3 mx-md-0">
                <Link href="/services/hearingaidaccessories" className="text-decoration-none  text-white">
                  Hearing Aid Accessories
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <h4 className="my-4 my-md-0 mb-3 mb-md-4   mx-3 mx-md-0">
              Quick Links
            </h4>
            <div className="fw-normal">
              <p className="mb-0 py-1 pb-1  mx-3 mx-md-0">
                <Link href="/" className="text-decoration-none text-white ">
                  Home
                </Link>
              </p>
              <p className="mb-0 py-1 pb-1  mx-3 mx-md-0">
                <Link href="/aboutus" className="text-decoration-none  text-white">
                  About us
                </Link>
              </p>
              <p className="mb-0 py-1 pb-1  mx-3 mx-md-0">
                <Link href="services/puretoneaudio" className="text-decoration-none  text-white">
                  Services
                </Link>
              </p>
             
              <p className="mb-0 py-1 pb-1  mx-3 mx-md-0">
                <Link href="/contact" className="text-decoration-none  text-white">
                  Contact Us
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="fw-normal ">
              <h4 className="my-4 my-md-0 mb-3 mb-md-4  mx-3 mx-md-0">
                Contact info
              </h4>
              <p className=" mx-3 mx-md-0 m-0">
                No.940, 1st floor, 9th cross, 24th main road H.S.R Layout,
                Sector 1, Bengaluru, Karnataka, 560102.
              </p>

              <p className="mt-3 mb-0 py-1 pb-1  mx-3 mx-md-0 ">
                <Link href="#" className="text-decoration-none  text-white">
                  +91-98809 15931
                </Link>
              </p>
              <p className="mb-0 py-1 pb-1  mx-3 mx-md-0">
                <Link href="#" className="text-decoration-none  text-white">
                  blr.hsr@adrohearingaid.com
                </Link>
              </p>
              <p className="mb-0 py-1  mx-3 mx-md-0">
                <Link href="#" className="text-decoration-none  text-white">
                  https://www.adrohearingaid.com
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="line mb-4 mt-3"></div>
        <div>
          <h6 className="mt-3 text-center ">
            © Copyright 2023. All Rights Reserved
          </h6>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
