import '@/styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import AOS from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
         duration: 1500,
         once: false,
       })
 }, [])
  return(

    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
    {/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link> */}
    </Head>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    {/* <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> */}
    
    <Component {...pageProps} />
    </>
  )
   
}
