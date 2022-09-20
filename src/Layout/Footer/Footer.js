import React from 'react'
import './Footer.css'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <>
       <div className='footerContainer'>
        <div className="small-container">
            {/* <h2 className="footerTitle">LOGO</h2> */}
            <div className="row">
                <div className="subFooter">
                    <p><u>Address</u></p>
                    <p>Street: 101/b, Srinath Lane, C R Avenue. City: Kolkata.</p>
                </div>
                <div className="subFooter">
                    <u><p>Opening hours</p></u>
                    <p>Mon-Fri: 11am - 10pm
                    <p>Sat-Sun: 11am - 12pm</p></p>
                </div>
                <div className="subFooter">
                    <u><p>Contact</p></u>
                    <p><LocalPhoneIcon className='icon'/>9111223311
                    <p><EmailIcon className='icon'/>crispydelight@gmail.com</p></p>
                </div>
                <div className="subFooter">
                    <u><p>Follow</p></u>
                    <FacebookSharpIcon className='icon'/>
                    <TwitterIcon className='icon'/>
                    <LinkedInIcon className='icon'/>
                    <PinterestIcon className='icon'/>
                    <InstagramIcon className='icon'/>
                </div>
            </div>
        </div>

        </div>
        <div className="lowerFooter">
           <p>© 2022 CrispyDelight. All Right Reserved.</p>
        </div>

    </>
  )
}
