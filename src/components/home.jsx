import React from 'react'

import Quote from './quote'
import whyus1 from '../assets/whyUs1.jpg'
import whyus2 from '../assets/whyUs2.jpg'

import smart from '../assets/smart.png'
import depend from '../assets/depend.png'
import trust from '../assets/trust.png'
import experience from '../assets/experience.png'
import consult from '../assets/consult.png'


const Home = () => {
  return (
    <>
      <div className='homeBackground'>
        <div className='redGradient row m-0'>
          <div className='hero ms-md-5 col-md-8 text-start '>
            <div className='heroContent'>
              <h1 className=''>Your Trusted Legal Advisors, <br></br>Every Step of the Way</h1>
              <p className=''>At Goodman Law Firm, we provide experienced, compassionate, and results-driven legal counsel. Whether   you're navigating a complex legal matter or seeking expert advice, our dedicated attorneys are here to protect your rights and fight for the best possible outcome.</p>

              <h3 className='pt-3'><i class="fas fa-solid fa-phone px-2 "></i> Contact Us Today for a Free Consultation. </h3>
  
            </div>
          </div>
          <div className='hero col-4'></div>
        </div>
      </div>
      <Quote  quote={"The law is reason, free from passion."} author={"Aristotle"} />
      <div className='whyUs'>
        <div className='container-sm  my-5'>
              <h2 className='fw-bold text-center'>Why Goodman Law Firm​</h2>

              <div className='row py-4 align-items-center justify-content-center'>
                <div className='col-12 col-md-5 py-2 align-self-center order-md-first'>
                    <img className='img-fluid' width={500} src={whyus1} />
                </div>
                <div className='col-12 col-md-5 py-4 px-5 order-first '>
                  <div className='py-2'>
                    <h4>Experience</h4>
                    <p>I have been practicing law for over 25 years.</p>
                  </div>
                  <div className='py-2 '>
                    <h4>Compassion</h4>
                    <p>I believe strongly in providing personal service and in giving my personal attention to my clients’ cases.</p>
                  </div>
                    
                  
                </div>
              </div>
              <div className='row py-4 align-items-center justify-content-center'>
                <div className='col-12 col-md-5 py-2 align-self-center order-sm-last'>
                    <img className='img-fluid' width={500} src={whyus2} />
                </div>
                <div className='col-12 col-md-5 py-4 px-5 order-md-first'>
                  <div className='py-2'>
                    <h4>Integrity</h4>
                    <p>I believe that the privilege of practicing law carries with it an obligation to serve the profession and community.</p>
                  </div>
                  <div className='py-2'>
                    <h4>Trust</h4>
                    <p>We have over two decades of significant experience in our respective areas of law.</p>
                  </div>
                    
                  
                </div>
              </div>
        </div>
      </div>
      <div className='ourDetails py-5'>
        <div className='container-sm'>
          <div className='row px-5 justify-content-center '>

            <div className='col-md-6 py-4 text-center d-flex align-items-center justify-content-center'> 
              <img alt='smart' src={smart} width={30} height={30}/> 
              <h5 className='px-3'>Smart Legal Solutions</h5>
            </div>
            <div className='col-md-6 py-4 text-center d-flex align-items-center justify-content-center'> 
              <img alt='depend'  src={smart} width={30} height={30}/> 
              <h5 className='px-3'>Dependable Advocacy</h5>
            </div>
            <div className='col-md-6 py-4 text-center d-flex align-items-center justify-content-center'> 
              <img alt='trust'  src={smart} width={30} height={30}/> 
              <h5 className='px-3'>Trusted Legal Team</h5>
            </div>
            <div className='col-md-6 py-4 text-center d-flex align-items-center justify-content-center'> 
              <img alt='experience'  src={smart} width={30} height={30}/> 
              <h5 className='px-3'>25 Years Experience</h5>
            </div> 
            <div className='col-md-6 py-4 text-center d-flex align-items-center justify-content-center'> 
              <img alt='consult'  src={smart} width={30} height={30}/> 
              <h5 className='px-3'>Free Initial Consultation</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home