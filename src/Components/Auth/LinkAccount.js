import React from 'react';
import {Link} from 'react-router-dom';
import './LinkAccount.css'

export default function LinkAccount() {
  return (
    <>
  <div className="linkDiv">
  <center>
    <p id="linkHeading">Sign in or create an account</p>
     <Link to='/login'><button className='linkBtn'>Login</button></Link>
    </center>
  </div>
    </>
  )
}
