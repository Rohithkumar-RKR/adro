import React from 'react'

const Bookbtn = () => {
  return (
  <>
  {/* <div id='book'>
     <button className='btn btn-warning p-2 btn_book'>Book an appointment</button>
  </div> */}
<div id="book">
<button type="button" class="btn btn-warning btn_book" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header border-0 bg_color">
        <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">Book a free hearing aid trial</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bg_color">
        <div>
        <form>
  <div class="mb-3">
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name'/>
  </div>
  <div class="mb-3">
    <input type="tel" class="form-control" id="exampleInputPassword1" placeholder='Phone no'/>
  </div>
  <div class="mb-3">
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder='Email'/>
  </div>
  <div className=''>
     <button type="submit" class="btn btn-warning my-2">Schedule an appointment</button>
  </div>
 
</form>
 </div>
</div>
     
    </div>
  </div>
</div>
</div>

   
  
  </>
  )
}

export default Bookbtn
