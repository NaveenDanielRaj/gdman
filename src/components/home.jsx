

import Quote from './quote'
import whyus1 from '../assets/whyUs1.jpg'
import whyus2 from '../assets/whyUs2.jpg'

import smart from '../assets/smart.png'
import depend from '../assets/depend.png'
import trust from '../assets/trust.png'
import experience from '../assets/experience.png'
import consult from '../assets/consult.png'

import hotel from '../assets/hotel.jpg'

import quotes from '../assets/quotes.png'
import user from '../assets/user.webp'

import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>best lawyers near me| Goodman Law Firm</title>
        <meta name="description" content=" Looking for best lawyers near you! Contact 9677745440 to Protect Your rights and freedom in salem" />
        <meta name="keywords" content="best family lawyers near me, top divorce lawyers near me, best divorce lawyers in salem, top family lawyers in salem, probate lawyers near me, probate lawyers in salem, criminal defense attorney near me, top criminal defense lawyers in salem, driving offence lawyers in salem, criminal traffic lawyers near me, criminal traffic lawyer in salem, insurance claim lawyer near me, insurance lawyers in salem." />
      </Helmet>
      <div className='homeBackground'>
        <div className='redGradient row m-0 py-3 align-items-center justify-content-start'>
          <div className='hero col-1'></div>
          <div className='hero col-md-7 text-start '>
            <div className='heroContent'>
              <h1 className=''>Your Trusted Legal Advisors, <br></br>Every Step of the Way</h1>
              <p className=''>At Goodman Law Firm, we're here to guide you through legal challenges with experience, care, and a commitment to results. You just need honest advice, or you're dealing with a complicated case, our team of dedicated attorneys is ready to stand by your side, protect your rights, and help you move forward with confidence.</p>  
            </div>
          </div>
          <div className='hero col-1'></div>
        </div>
      </div>
      <Quote  quote={"The law is reason, free from passion."} author={"Aristotle"} />
      <div className='whyUs'>
        <div className='container-sm  my-5'>
              <h2 className='fw-bold text-center'>Why Goodman Law Firm</h2>

              <div className='row py-4 align-items-center justify-content-center'>
                <div className='col-12 col-md-5 py-2 align-self-center order-md-first'>
                    <img className='img-fluid' width={500} src={whyus1} />
                </div>
                <div className='col-12 col-md-5 py-4 px-4 order-first '>
                  <div className='py-2'>
                    <h4>Experience You Can Count On</h4>
                    <p>We bring deep knowledge and proven results to every case with over 14 years of legal practice.</p>
                  </div>
                  <div className='py-2 '>
                    <h4>Compassionate Representation</h4>
                    <p>We treat every client with respect, empathy, and the personal attention they deserve.</p>
                  </div>
                    
                  
                </div>
              </div>
              <div className='row py-4 align-items-center justify-content-center'>
                <div className='col-12 col-md-5 py-2 align-self-center order-sm-last'>
                    <img className='img-fluid' width={500} src={whyus2} />
                </div>
                <div className='col-12 col-md-5 py-4 px-4 order-md-first'>
                  <div className='py-2'>
                    <h4>Integrity at the Core</h4>
                    <p>We believe in doing what's right — for our clients, our profession, and our community.</p>
                  </div>
                  <div className='py-2'>
                    <h4>A Legacy of Trust</h4>
                    <p>For more than two decades, clients have trusted us to handle their most important legal matters with care and confidence.</p>
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
              <img alt='depend'  src={depend} width={30} height={30}/> 
              <h5 className='px-3'>Dependable Advocacy</h5>
            </div>
            <div className='col-md-6 py-4 text-center d-flex align-items-center justify-content-center'> 
              <img alt='trust'  src={trust} width={30} height={30}/> 
              <h5 className='px-3'>Trusted Legal Team</h5>
            </div>
            <div className='col-md-6 py-4 text-center d-flex align-items-center justify-content-center'> 
              <img alt='experience'  src={experience} width={30} height={30}/> 
              <h5 className='px-3'>14 Years Experience</h5>
            </div> 
            <div className='col-md-6 py-4 text-center d-flex align-items-center justify-content-center'> 
              <img alt='consult'  src={consult} width={30} height={30}/> 
              <h5 className='px-3'>Free Initial Consultation</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='ourClients py-5'>
        <div className='container-sm'>
          <h2 className='fw-bold text-center'>Our Trustable Clients</h2>
          <div className=' row d-flex m-0 p-0 align-items-center justify-content-between py-5'>
            <div className=' col-12  col-md-6 col-lg-4 d-flex align-items-center justify-content-center px-4 my-4'>
              <div className='card rounded-4 text-center cardDetail p-3'>
                <img  src={hotel} className="card-img-top rounded-3" alt="client" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Sample address  for hotel 5,<br></br> Los Angels ,<br></br> USA</p>
                </div>
              </div>
            </div>
            <div className=' col-12  col-md-6 col-lg-4 d-flex align-items-center justify-content-center px-4 my-4'>
              <div className='card rounded-4 text-center cardDetail p-3'>
                <img  src={hotel} className="card-img-top rounded-3" alt="client" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Sample address  for hotel 5,<br></br> Los Angels ,<br></br> USA</p>
                </div>
              </div>
            </div>
            <div className=' col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center px-4 my-4'>
              <div className='card rounded-4 text-center cardDetail p-3'>
                <img  src={hotel} className="card-img-top rounded-3" alt="client" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Sample address  for hotel 5,<br></br> Los Angels ,<br></br> USA</p>
                </div>
              </div>
            </div>
            <div className=' col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center px-4 my-4'>
              <div className='card rounded-4 text-center cardDetail p-3'>
                <img  src={hotel} className="card-img-top rounded-3" alt="client" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Sample address  for hotel 5,<br></br> Los Angels ,<br></br> USA</p>
                </div>
              </div>
            </div>
            <div className=' col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center px-4 my-4'>
              <div className='card rounded-4 text-center cardDetail p-3'>
                <img  src={hotel} className="card-img-top rounded-3" alt="client" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Sample address  for hotel 5,<br></br> Los Angels ,<br></br> USA</p>
                </div>
              </div>
            </div>
            <div className=' col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center px-4 my-4'>
              <div className='card rounded-4 text-center cardDetail p-3'>
                <img  src={hotel} className="card-img-top rounded-3" alt="client" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Sample address  for hotel 5,<br></br> Los Angels ,<br></br> USA</p>
                </div>
              </div>
            </div>
            <div className=' col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center px-4 my-4'>
              <div className='card rounded-4 text-center cardDetail p-3'>
                <img  src={hotel} className="card-img-top rounded-3" alt="client" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Sample address  for hotel 5,<br></br> Los Angels ,<br></br> USA</p>
                </div>
              </div>
            </div>
            <div className=' col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center px-4 my-4'>
              <div className='card rounded-4 text-center cardDetail p-3'>
                <img  src={hotel} className="card-img-top rounded-3" alt="client" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Sample address  for hotel 5,<br></br> Los Angels ,<br></br> USA</p>
                </div>
              </div>
            </div>
            <div className=' col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center px-4 my-4'>
              <div className='card rounded-4 text-center cardDetail p-3'>
                <img  src={hotel} className="card-img-top rounded-3" alt="client" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Sample address  for hotel 5,<br></br> Los Angels ,<br></br> USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Quote  quote={"The law is not only a profession,but a privilege to serve society and uphold justice."} author={"Nelson Mandela"} />
      <div className='testimonials py-5'>
        <div className='container-sm'>
          <h2 className='fw-bold text-center'>What Our Clients' Say</h2>


          <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active d-none" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" className="d-none"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" className="d-none"></button>
            </div>
            <div className="  carousel-inner my-5">
              <div className=" carousel-item active" data-bs-interval="10000">
                <div className='review d-md-flex  d-block align-items-start justify-content-center text-center'>
                    <img src={quotes} width={70} className='img-fluid' alt='quotes'/>
                    <img src={user} width={110} height={100}  className='img-fluid rounded-circle py-4' alt='user'/>
                    <div className=' py-4 px-3 text-start'>
                        <h3>J. Robert</h3>
                        <h6>USA</h6>
                        <p>⭐⭐⭐⭐<br></br>I was really nervous about my case, but David made me feel at ease. His team was responsive, and I felt confident the entire time. We won the case, and I’m so grateful for his help.</p>
                    </div>
                </div>
                
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className='review d-md-flex d-block align-items-start justify-content-center text-center'>
                      <img src={quotes} width={70} className='img-fluid' alt='quotes'/>
                      <img src={user} width={110} height={100}  className='img-fluid rounded-circle py-4' alt='user'/>
                      <div className=' py-4 px-3 text-start'>
                          <h3>J. Robert</h3>
                          <h6>USA</h6>
                          <p>⭐⭐⭐<br></br>I was really nervous about my case, but David made me feel at ease. His team was responsive, and I felt confident the entire time. We won the case, and I’m so grateful for his help.</p>
                      </div>
                  </div>
                
              </div>
              <div className="carousel-item"  data-bs-interval="3000">
                <div className='review d-md-flex  d-block align-items-start justify-content-center text-center'>
                      <img src={quotes} width={70} className='img-fluid' alt='quotes'/>
                      <img src={user} width={110} height={100}  className='img-fluid rounded-circle py-4' alt='user'/>
                      <div className=' py-4 px-3 text-start'>
                          <h3>J. Robert</h3>
                          <h6>USA</h6>
                          <p>⭐⭐⭐⭐⭐<br></br>I was really nervous about my case, but David made me feel at ease. His team was responsive, and I felt confident the entire time. We won the case, and I’m so grateful for his help.</p>
                      </div>
                  </div>
                
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home