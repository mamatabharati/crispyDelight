import React from 'react'
import AboutUs from './AboutUs'
import Gallery from './Gallery'
import './Homepage.css'
// import Serve from './Serve'
import WeServe from './WeServe'

export default function Homepage() {
    return (
        <>

            <div className='imgSection'>

                <img src="https://images.unsplash.com/photo-1522448746354-da4936934201?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    className="img-responsive homepageImg" alt="Responsive "
                />

                {/* homepage main text */}


                <div className="textOnImage">
                    <p>Meals & Memories are made here.....</p>
                </div>

            </div>

            {/* we serve section */}

            <WeServe/>

            {/* about us section */}

            <AboutUs />

            <Gallery/>

           
        </>
    )
}
