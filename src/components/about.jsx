
import aboutUs1 from '../assets/aboutUs1.jpg'
import aboutUs2 from '../assets/aboutUs2.jpg'
import male from '../assets/male.jpg'
import female from '../assets/female.png'

import Quote from './quote'

const About = () => {
  return (
    <>
      <div className='aboutUsBanner'>
        <div className="overlay">
          <div>
            <h2>About Us</h2>
          </div>
        </div>
      </div>

      <div className='container-sm aboutUs py-5'>
          <h2>Welcome to GoodMan Law Firm – Your Trusted Legal Advocates </h2>
          <div className='row justify-content-around align-items-center my-5'>
              <div className='col-md-6'>
                <p><span className='brand'>GoodMan Law Firm</span> is a leading law firm in Tamil nadu, where we bring years of legal expertise to every case, refining our approach to ensure we are fully prepared for any legal development. Our firm upholds the highest standards of professionalism, integrity, and clear communication, ensuring our clients receive exceptional legal representation. </p>
              </div>
              <div className='col-md-5 d-flex justify-content-center'>
                  <img className='img-fluid' src={aboutUs1} width={350} />
              </div>
          </div>
          <div className='py-3'>
            <h3>Why Choose Goodman Law Firm? </h3>
            
            <div className="row m-0 py-4 justify-content-around">
              <div className="col-lg-5 my-4 p-4 mx-2 card card-1">
                <h3 className="card__title">Experienced Legal Team</h3>
                <p className="card__apply">
                   We are the advocates with 10+ years of  experience in various practice areas, we provide skilled representation tailored to your needs
                </p>
              </div>
              <div className=" col-lg-5 my-4 mx-2 p-4 card card-2">
                <h3 className="card__title">Client-Centered Approach</h3>
                <p className="card__apply">
                 We handle the legal complexities so you can focus on what truly matters in your life.
                </p>
              </div>
              <div className=" col-lg-5 my-4 mx-2  p-4 card card-3">
                <h3 className="card__title">Persistent & Proactive</h3>
                <p className="card__apply">
                   Our firm diligently works to resolve your case as swiftly and effectively as possible.
                </p>
              </div>
              <div className="col-lg-5 my-4 mx-2  p-4 card card-4">
                <h3 className="card__title">Transparent & Honest Communication </h3>
                <p className="card__apply">
                    We keep you informed at every step, ensuring clarity and confidence in the legal process.
                </p>
              </div>
            </div>
          </div>

          <div className='py-3'>
            <p>Our years of experience, honed our legal process so that we are best prepared for any case developments. Our firm’s commitment to professionalism, civility, and open and honest communication allows us to provide our clients with the highest level of professional service.</p>
          </div>

          <div className='row justify-content-between align-items-center'>
              <div className='col-md-5 py-3 d-flex justify-content-center'>
                  <img className='img-fluid' src={aboutUs2} width={350} />
              </div>
              <div className='col-md-5 py-3'>
                <p>Our law office will persistently yet speedily handle your case. While we can’t control the speed of the court’s agenda, we will work to move your case along as fast as could be expected under the circumstances. We offer prepared guidance on the issues that emerge in disintegration activities. We will regard your desires and forcefully yet empathetically work to propel your inclinations while keeping up elevated expectations of legitimate, proficient, and moral honesty.</p>
              </div>
          </div>

          <div className='py-3'>
           <p>We will devote our attention to your case, without delay, prepare documents, filings, and discovery tailored to your matter. We will keep you apprised of court dates and important deadlines in connection with your case and will be in contact regarding documents that you will need to read, authorize, and execute before we file them with the court.</p>
          </div>

          <div className='py-3'>
             <p>We go above and beyond for their clientele, bringing new meaning to the attorney-client relationship. We will fight tirelessly to achieve the best result possible in your case.</p>
          </div>
      </div>

      <Quote  quote={"The law is not always right, but the law is always the law."} author={"Justice William O. Douglas"} />

      <div className='ourTeam'>
        <div className='container-sm py-5'>
         <h2 className='fw-bold text-center py-5'>Our Team</h2>
         <div className='row align-items-center justify-content-around'>
            <div className='col-md-5'>
              <img className='img-fluid' src={male} /> 
            </div>
            <div className='col-md-5 py-4'>
                <h2 className='memberName'>Mr. A. Santhosh Kumar, B.A., LL.B.</h2>
                <h3 className='role'>Senior Attorney</h3>
                <h5 className='experience'>14 Years of Experience</h5>
                <div className='line my-3'></div>
                <p>A. Santhosh Kumar specializes in <span className='fw-bold'> family law, criminal defense, civil litigation, and financial disputes</span> with over 14 years of extensive legal experience. His deep understanding of legal complexities allows him to craft strategic solutions for clients while ensuring justice is served.</p>
            </div>
         </div>
         <hr className='border border-1 border-danger-subtle my-5'></hr>
         <div className='row align-items-center justify-content-around'>
            <div className='col-md-5'>
              <img className='img-fluid' src={male} /> 
            </div>
            <div className='col-md-5 py-4'>
                <h2 className='memberName'>  Mr. S. Ezhilmaran, B.A., LL.B.</h2>
                <h3 className='role'>Legal Associate</h3>
                <h5 className='experience'>4 Years of Experience</h5>
                <div className='line my-3'></div>
                <p>S. Ezhilmaran brings four years of hands-on experience in <span className='fw-bold'>all the mentioned practice areas</span> . He is dedicated to guiding clients through legal challenges with precision and a client-first approach. His expertise in handling legal documentation and court procedures ensures efficient case resolutions while maintaining a high standard of service.</p>
            </div>
         </div>
         <hr className='border border-1 border-danger-subtle my-5'></hr>
         <div className='row align-items-center justify-content-around'>
            <div className='col-md-5'>
              <img className='img-fluid' src={male} /> 
            </div>
            <div className='col-md-5 py-4'>
                <h2 className='memberName'>  Mr. M. Kevin Jackson, B.A., LL.B.</h2>
                <h3 className='role'>Junior Advocate</h3>
                <h5 className='experience'>2 Years of Experience</h5>
                <div className='line my-3'></div>
                <p>M. Kevin Jackson is an emerging legal professional with expertise in all the mentioned practice areas. He is passionate about upholding justice, he is committed to providing proactive legal support and advocacy.</p>
            </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default About;