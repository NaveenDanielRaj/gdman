import React from 'react';
import Logo from '../assets/Logo.png';

import facebook from '../assets/facebook.png';
import linkedIn from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png'

const Footer = () => {
  return (
    <>
        <div className='footer d-flex align-items-center justify-content-center'>
            <div className='container-sm row py-4 align-items-center justify-content-evenly '>
                <div className='col-12  col-md-6 col-lg-4  py-4 px-5 text-center'>
                    <img className="" src={Logo} alt='Logo' width={100} height={100} />
                    <p className='footerDescription py-3 text-start'>We will devote our attention to your case, without delay, and prepare documents, filings, and discoveries tailored to your matter.</p>
                </div>
                <div className='col-12  col-md-6 col-lg-4  px-5 py-4 text-center text-md-start'>
                    <h4 className='linkHead'>Links</h4>
                    <ul className='m-0 p-0'>
                        <li className='footerLinks'><a href='/'>Home</a></li>
                        <li className='footerLinks'><a href='/gdman/aboutUs'>About</a></li>
                        <li className='footerLinks'><a href='/gdman/practiceAreas'>Practice Areas</a></li>
                        <li className='footerLinks'><a href='/gdman/caseResults'>Case results</a></li>
                        <li className='footerLinks'><a href='/gdman/contactUs'>Contect Us</a></li>
                    </ul>
                </div>
                <div className=' col-12  col-md-6 col-lg-4  px-5 py-4 text-center text-md-start '>
                    <div >

                        <h4 className='linkHead'>Reach Us</h4>
                        <p>Call or Text : <span className='contact'>(123) 123-1234</span> </p>
                        <p >Email : <span className='contact'>goodmanlawfir@gmail.com</span></p>
                    </div>

                    <div>

                        <h4 className='linkHead pt-3'>Connect With Us</h4>
                        <ul className='m-0 p-0 d-flex align-items-center justify-content-center justify-content-sm-center  justify-content-xs-center justify-content-md-start'>
                            <li className='socialLinks'><a href='#'><img src={facebook} width={30} alt='facebook'/></a></li>
                            <li className='socialLinks px-2'><a href='#'><img src={linkedIn} width={30} alt='linkedin'/></a></li>
                            <li className='socialLinks px-2'><a href='#'><img src={twitter} width={30} alt='twitter'/></a></li>
                            <li className='socialLinks px-2'><a href='#'><img src={instagram} width={30} alt='instagram'/></a></li>
                            <li className='socialLinks pt-4 ps-2'><a href='#'><img src={youtube} width={40} alt='youtube'/></a></li>
                        </ul>
                    </div>

                </div>


            </div>

            
        </div>
        <div className='footer d-flex align-items-center justify-content-center'>
            <div className='container-sm   '>
               
                <hr className='border-2 border-white'></hr>

                <div className='d-lg-flex d-md-block align-items-center justify-content-between text-sm-center'>
                    <div className='copyrights pb-3'>
                        © Copyright 2025 Goodman Law Firm. All Rights Reserved.
                    </div>

                    <div className='pb-3'>
                        <ul className='d-flex commonLinks align-items-center justify-content-center'>
                            <li className='pe-2'>Sitemap</li> 
                            |
                            <li className='px-2'>Privacy Policy</li>
                            |
                            <li className='ps-2'>Disclaimer</li>
                        </ul>
                    </div>
                    
                </div>
            </div>

            
        </div>
    </>
  )
}

export default Footer