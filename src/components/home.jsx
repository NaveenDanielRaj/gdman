import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Quote from './quote'
import whyus1 from '../assets/whyUs1.jpg'
import whyus2 from '../assets/whyUs2.jpg'

import smart from '../assets/smart.png'
import depend from '../assets/depend.png'
import trust from '../assets/trust.png'
import experience from '../assets/experience.png'
import consult from '../assets/consult.png'


import { Helmet } from 'react-helmet';

const Home = () => {

  const {pathname} = useLocation();

  useEffect(()=>{
    window.scrollTo({top : 0 , behavior : "smooth"})
  },[pathname])
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
      <Quote  quote={"The concept of justice is inextricably linked to the principles of liberty, equality, and fraternity — the triune pillars of any democratic legal order."} author={"Dr.B.R.Ambedkar"} />
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
          <h2 className='fw-bold text-center'> District Courts We Serve</h2>
          <div className=' row d-flex m-0 p-0 align-items-center justify-content-between py-5'>
            <div className=' col-12  col-md-6 col-lg-6 d-flex align-items-center justify-content-center px-4 pb-5 my-4'>
              <div className='card rounded-4 text-center cardDetail p-3'>
                <img  src={"https://im.hunt.in/cg/City-Guide/barass.jpg"} height={200} className="card-img-top rounded-3" alt="client" />
                <div className="card-body">
                  <h5 className="card-title">Salem</h5>
                  <p className="card-text">Combined Court Building, Yercaud Main Rd, Gurukkal Colony, Hasthampatti, Salem, Tamil Nadu 636007</p>
                </div>
              </div>
            </div>
            <div className=' col-12  col-md-6 col-lg-6 d-flex align-items-center justify-content-center px-4 pb-5 my-4'>
              <div className='card rounded-4 text-center cardDetail p-3'>
                <img  src={"https://apnlive.com/wp-content/uploads/2023/03/Coimbatore-court-acid-attack.jpg"} height={200} className="card-img-top rounded-3" alt="client" />
                <div className="card-body">
                  <h5 className="card-title">Coimbatore</h5>
                  <p className="card-text">XXXC+X5R, Bhasiyam Layout, Behind Pazhamudir Nilayam, Arts College Rd Combined Court Complex, Gopalapuram, Coimbatore, Tamil Nadu 641018</p>
                </div>
              </div>
            </div>
            <div className=' col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center px-4 pb-5 my-4'>
              <div className='card rounded-4 text-center cardDetail p-3'>
                <img  src={"https://cdnbbsr.s3waas.gov.in/s3ec022ef248c04979d6b3a7b283ec3dc3/uploads/2023/04/2023041333.jpg"} height={200} className="card-img-top rounded-3" alt="client" />
                <div className="card-body">
                  <h5 className="card-title">Puducherry</h5>
                  <p className="card-text">WRH9+7G6, NH-45A, Orleanpet, Puducherry, 605005</p>
                </div>
              </div>
            </div>
            <div className=' col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center px-4 pb-5 my-4'>
              <div className='card rounded-4 text-center cardDetail p-3'>
                <img  src={"https://wd-image.webdunia.com/image-conversion/process-aws.php?url=https://nonprod-media.webdunia.com/public_html/_media/ta/img/article/2024-07/16/full/1721121820-9399.jpg&w=&h=&outtype=webp"} height={200} className="card-img-top rounded-3" alt="client" />
                <div className="card-body">
                  <h5 className="card-title">Villupuram</h5>
                  <p className="card-text">WFJM+Q56, Moovendar Nagar, Viluppuram, Tamil Nadu 605602</p>
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


        <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25558874'  width='100%' height='1000'></iframe>
        </div>
      </div>
    </>
  )
}

export default Home