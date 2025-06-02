
import Logo from '../assets/Logo.png';

import facebook from '../assets/facebook.png';
import linkedIn from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png'

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <div className='footer d-flex align-items-center justify-content-center'>
            <div className='container-sm row py-4 align-items-center justify-content-evenly '>
                <div className='col-12  col-md-6 col-lg-4  py-4 px-5 text-center'>
                    <img className="" src={Logo} alt='Logo' width={130} height={100} />
                    <p className='footerDescription py-3 text-start'>We will devote our attention to your case, without delay, and prepare documents, filings, and discoveries tailored to your matter.</p>
                </div>
                <div className='col-12  col-md-6 col-lg-4  px-5 py-4 text-center text-md-start'>
                    <h4 className='linkHead'>Links</h4>
                    <ul className='m-0 p-0'>
                        <li className='footerLinks'><Link to='/'>Home</Link></li>
                        <li className='footerLinks'><Link to='/aboutUs'>About</Link></li>
                        <li className='footerLinks'><Link to='/practiceAreas'>Practice Areas</Link></li>
                        <li className='footerLinks'><Link to='/caseResults'>Case results</Link></li>
                        <li className='footerLinks'><Link to='/contactUs'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className=' col-12  col-md-6 col-lg-4  px-5 py-4 text-center text-md-start '>
                    <div >

                        <h4 className='linkHead'>Reach Us</h4>
                        <p>Call or Text : <span className='contact'><br></br>(+91) 99521-04194<br></br>(+91) 96777-45440<br></br>(+91) 98425-92171<br></br>(+91) 83002-15996</span></p>
                        <p >Email : <span className='contact'>goodmanlawfirm@gmail.com</span></p>
                    </div>
                </div>

                <div className=' col-12  col-md-6 col-lg-4  px-5 py-4 text-center text-md-start '>

                    <div>

                        <h4 className='linkHead pt-3'>Connect With Us</h4>
                        <ul className='m-0 p-0 d-flex align-items-center justify-content-center justify-content-sm-center  justify-content-xs-center justify-content-md-start'>
                            <li className='socialLinks'><a href='https://www.facebook.com/profile.php?id=61575228118962' target='_blank'><img src={facebook} width={30} alt='facebook'/></a></li>
                            <li className='socialLinks px-2'><a href='https://www.linkedin.com/in/goodmanlawfirm-law-firm-33004a360'  target='_blank'><img src={linkedIn} width={30} alt='linkedin'/></a></li>
                            <li className='socialLinks px-2'><a href='https://x.com/goodmanlawfirm'  target='_blank'><img src={twitter} width={30} alt='twitter'/></a></li>
                            <li className='socialLinks px-2'><a href='https://www.instagram.com/goodmanlawfirm'  target='_blank'><img src={instagram} width={30} alt='instagram'/></a></li>
                            <li className='socialLinks pt-4 ps-2'><a href='#'  target='_blank'><img src={youtube} width={40} alt='youtube'/></a></li>
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