import React from 'react'
import './Homepage.css'

export default function AboutUs() {
  return (
   
    <>
        <div className="container-fluid aboutUsDiv">
        <div className="row text_Div">
          <div className="col-sm-3 col-md-6 ">
            <h1 id='aboutHeading'>About Us</h1>
            <p>We, Crispy Delight at CR Avenue in Kolkata, West Bengal, are one of the best
            Indian restaurant in the city. We look to ignite your senses through the aroma, presentation and flavor of any & 
            every dish whipped up in our kitchen. We seek to serve all our guest
            with perfect dining experience. We ensure that every ingredient that is tossed in 
            your dish is fine and every delicacy cooked is served with perfection.</p>
          </div>
          <div className="col-sm-9 col-md-6 ">
            <img src="../../../../../images/abt.png"
              alt='about'
              className="img-responsive imageDiv"
            />
          </div>   
      </div>
    </div> 
    </>
  )
}
