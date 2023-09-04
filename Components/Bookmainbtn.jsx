import Link from 'next/link'
import React from 'react'

const Bookmainbtn = () => {
  return (
    <div id="bookmain">
    <Link className='btn btn-warning p-2 px-4 bookbtn ' href='/contact' >Book an appointment</Link>
  </div>
  )
}

export default Bookmainbtn
