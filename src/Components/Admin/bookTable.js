import React from 'react'
import './bookTable.css'

export default function BookTable() {
        return (

                <>
                        <section className='mb-5 mt-5'>
  <div className="container-fluid">
    <div className="row  justify-content-center align-items-center ">
      <div className="col-xl-8 ">
        <div className="card rounded-3 text-black">
          <div className="row ">
            <div className="col-lg-12">
              <div className="card-body p-md-5 mx-md-4">
                <div className="text-center">
                   <img src="../../../../../images/cd5.png" alt="logo"
                    style={{ width: 185 }}
                  />
                </div>
                <form>
                  
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control"
                    />
                    <label className="form-label" >
                      Your Name
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="date"
                      id="form2Example22"
                      className="form-control"
                    />
                    <label className="form-label" >
                      Choose Date
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="time"
                      id="form2Example22"
                      className="form-control"
                    />
                    <label className="form-label" >
                      Choose Time
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="number"
                      id="form2Example22"
                      className="form-control"
                    />
                    <label className="form-label" >
                      Number of People
                    </label>
                  </div>
                
                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <button type="button" className="btn btn-outline-danger" onClick={() => alert("Your table has been booked")}>Book Now </button>
                  </div>
                </form>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



                </>
        )
}
