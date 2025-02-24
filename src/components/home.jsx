import React from 'react'

const Home = () => {
  return (
    <>
      <div className='homeBackground'>
        <div className='redGradient row'>
          <div className='hero ms-md-5 col-md-8 text-start '>
            <div className='heroContent'>
              <h1 className=''>Your Trusted Legal Advisors, <br></br>Every Step of the Way</h1>
              <p className=''>At Goodman Law Firm, we provide experienced, compassionate,
  and results-driven legal counsel. Whether you're navigating a
  complex legal matter or seeking expert advice, our dedicated 
  attorneys are here to protect your rights and fight for the best
  possible outcome.</p>

              <h3 className='pt-3'><i class="fas fa-solid fa-phone px-2 "></i> Contact Us Today for a Free Consultation. </h3>
  
            </div>
          </div>
          <div className='hero col-4'></div>
        </div>
      </div>
    </>
  )
}

export default Home