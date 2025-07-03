import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import aboutUs1 from '../assets/aboutUs1.jpg'
import male from '../assets/male.jpg'
import client from '../assets/lawyer-client.jpg'
import mohamed from '../assets/mohammed.jpg'


import Quote from './quote'

const About = () => {

  const {pathname} = useLocation();

  useEffect(()=>{
    window.scrollTo({top : 0 , behavior : "smooth"})
  },[pathname])

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
                <h3 className="card__title fw-bold">Over a Decade of Trusted Legal Service
                </h3>
                <p className="card__apply">
                At Goodman Law Firm, we believe that strong relationships are the foundation of effective legal representation. For more than 10 years, we have proudly served individuals, families, and businesses with a clear mission: to offer personalized, compassionate, and results-driven legal services that truly make a difference.
                <br></br>
                <br></br>
                Our journey began with a simple goal — to be more than just legal advisors. We wanted to be trusted partners, guiding clients through some of the most challenging moments of their lives with expertise, honesty, and genuine care. Today, with multiple branches and a team of dedicated professionals, we are proud to have built a firm that reflects these founding values.

                </p>
              </div>
              <div className=" col-lg-5 my-4 mx-2 p-4 card card-2">
                <h3 className="card__title fw-bold">Experience You Can Trust</h3>
                <p className="card__apply">
                With over a decade of real-world experience, our attorneys have developed a deep understanding of the legal system, successfully representing clients across a wide range of cases — from family law and personal injury to business law and civil litigation.Each case is different, and so is every client. That’s why we don't believe in "one-size-fits-all" solutions. At Goodman Law Firm, we tailor our strategies to meet your specific goals, ensuring that every step we take is aligned with your best interests.

              <br></br>
              <br></br>
              Our legal team stays up to date on the latest developments in the law, combining traditional practices with innovative approaches to achieve the best possible outcomes. Whether negotiating a settlement, drafting critical legal documents, or representing you in court, our experience will work for you — and your future.

                </p>
              </div>
              <div className=" col-lg-5 my-4 mx-2  p-4 card card-3">
                <h3 className="card__title fw-bold">Accessible Legal Services Through Multiple Branches
                </h3>
                <p className="card__apply">
                One of the ways we stay connected with the communities we serve is through our multiple office locations. No matter where you are, there’s likely a Goodman Law Firm branch close by, offering the same level of care, professionalism, and dedication that defines us.
                <br></br>
                <br></br>

                Each branch is staffed with knowledgeable attorneys and friendly support teams ready to assist you. We make it convenient for you to schedule consultations, meet your lawyer face-to-face, and feel confident knowing your legal team is never far away.

                <br></br>
                <br></br>

                Our growing presence is a reflection of the trust our clients place in us — and the results we continue to deliver.

                </p>
              </div>
              <div className="col-lg-5 my-4 mx-2  p-4 card card-4">
                <h3 className="card__title fw-bold">A Personalized Approach to Every Client
                </h3>
                <p className="card__apply">
                At Goodman Law Firm, we understand that facing a legal issue can be overwhelming. That's why we prioritize open communication, respect, and empathy from the first meeting to the final resolution.
                We take the time to listen to your story, answer your questions, and explain your options in a clear, straightforward manner. No complicated legal jargon — just honest conversations and sound advice you can count on.
                <br></br>
                <br></br>
                We are committed to making the legal process as smooth and stress-free as possible, giving you peace of mind during uncertain times. With us, you’ll always know where your case stands, what to expect next, and that you have a strong advocate in your corner.

                </p>
              </div>
            </div>
          </div>
        </div>
          <Quote  quote={"Law is the greatest disinfectant of corruption, injustice, and inequality."} author={"Dr.B.R.Ambedkar"} />
        <div className='container-sm aboutUs py-5'>

        <div className='py-3'>
            <h4 className='fw-bold pb-3 text-center'>Our Promise to You            </h4>
            <p className='text-start'>When you choose Goodman Law Firm, you’re choosing a firm that truly cares about your future.<br></br><br></br>Here’s what you can expect from us:
            </p>
            <div className='row py-3'>

              <div className='col-12'>
                <div className='d-flex alig-items-center'>
                                <i className="fa fa-solid fa-scale-balanced px-2 fs-4"></i>
                <p><span className='fw-bold fs-5'>Experience that matters : </span> Over 10 years of winning results and courtroom success.
                </p>
                </div>
              </div>

              <div className='col-12'>
                <div className='d-flex alig-items-center'>
                                <i className="fa fa-solid fa-scale-balanced px-2 fs-4"></i>
                <p><span className='fw-bold fs-5'>Personalized attention : </span> Tailored strategies for your unique situation.
                </p>
                </div>
              </div>

              <div className='col-12'>
                <div className='d-flex alig-items-center'>
                                <i className="fa fa-solid fa-scale-balanced px-2 fs-4"></i>
                <p><span className='fw-bold fs-5'>Accessibility : </span> Multiple offices for your convenience and peace of mind.
                </p>
                </div>
              </div>

              <div className='col-12'>
                <div className='d-flex alig-items-center'>
                                <i className="fa fa-solid fa-scale-balanced px-2 fs-4"></i>
                <p><span className='fw-bold fs-5'>Compassionate service: </span>  Genuine care for you and your family.
                </p>
                </div>
              </div>

              <div className='col-12'>
                <div className='d-flex alig-items-center'>
                <i className="fa fa-solid fa-scale-balanced px-2 fs-4"></i>
                <p><span className='fw-bold fs-5'>Transparent communication </span>   No surprises — just clear, honest guidance.
                </p>
                </div>
              </div>

              <div className='col-12'>
                <div className='d-flex alig-items-center'>
                <i className="fa fa-solid fa-scale-balanced px-2 fs-4"></i>
                <p><span className='fw-bold fs-5'>Relentless advocacy: </span> A team that fights hard for your rights and goals.
                </p>
                </div>
              </div>

            </div>
          </div>

          <div className='py-3'>
            <h4 className='fw-bold pb-3 text-center'>Join the Goodman Law Firm Family</h4>

            <div className='row justify-content-around align-items-center my-5'>
              <div className='col-md-5 pb-4 d-flex justify-content-center'>
                  <img className='img-fluid' src={client} width={450} />
              </div>
              <div className='col-md-6'>
                <p>Choosing the right law firm can make all the difference. At Goodman Law Firm, we are honored by the trust our clients place in us and are driven every day to exceed expectations.
                  <br></br>
                  <br></br>
                  If you're looking for legal representation that treats you like a person — not just a case — we invite you to experience the Goodman difference.
                  <br></br>
                  <br></br>
                  Reach out to one of our conveniently located offices today. We’re ready to listen, ready to help, and ready to stand by your side.
                </p>
              </div>
          </div>

          </div>

          <div className='py-3'>
            <h4 className='fw-bold pb-3 text-center'>Our Areas of Expertise</h4>

            <div className='row py-3'>

              <div className='col-12'>
                <div className='d-flex alig-items-center'>
                <i className="fa fa-solid fa-star px-2 fs-5"></i>
                <h4> Family Law & Divorce Cases</h4>
                </div>
                
                <p className='px-5'>Navigating family law matters can be challenging, but we offer dedicated support for divorce, child custody, alimony, and related issues.</p>

              </div>

              <div className='col-12'>
                <div className='d-flex alig-items-center'>
                  <i className="fa fa-solid fa-star px-2 fs-5"></i>
                  <h4> Criminal Defense</h4>
                </div>
                <p className='px-5'>When facing criminal charges, having a strong defense team is crucial. We fight aggressively to protect your rights and achieve the best possible outcome for your case.</p>

              </div>

              <div className='col-12'>

                <div className='d-flex alig-items-center'>
                  <i className="fa fa-solid fa-star px-2 fs-5"></i>
                  <h4> Civil Litigation</h4>
                </div>
                <p className='px-5'>From contract disputes to property conflicts, our civil lawyers provide strategic solutions to resolve disputes effectively and protect your legal interests.</p>

              </div>

              <div className='col-12'>
                <div className='d-flex alig-items-center'>
                  <i className="fa fa-solid fa-star px-2 fs-5"></i>
                  <h4> Cheque Bounce & Financial Disputes</h4>
                </div>
                <p className='px-5'>If you are dealing with a cheque bounce case or financial disagreement, our team will take decisive action to safeguard your financial rights and ensure timely legal resolutions.</p>

              </div>

              <div className='col-12'>
                <div className='d-flex alig-items-center'>
                  <i className="fa fa-solid fa-star px-2 fs-5"></i>
                  <h4>  Probate & Estate Planning</h4>
                </div>
               
                <p className='px-5'>We assist in will execution, estate planning, and inheritance matters, offering clear guidance to protect your assets and secure your legacy.</p>

              </div>

              <div className='col-12'>
                <div className='d-flex alig-items-center'>
                  <i className="fa fa-solid fa-star px-2 fs-5"></i>
                  <h4>   Traffic Offenses & Insurance Claims</h4>
                </div>
                <p className='px-5'>We provide legal representation for traffic violations and insurance disputes, ensuring you receive fair treatment and just compensation.</p>

              </div>

              <div className='col-12'>
                <div className='d-flex alig-items-center'>
                  <i className="fa fa-solid fa-star px-2 fs-5"></i>
                  <h4>  Dedicated Legal Support, Every Step of the Way</h4>
                </div>
               
                <p className='px-5'>We take on the legal burden, allowing you to focus on what’s most important. Our firm works relentlessly to secure the best possible outcome, whether through negotiation or litigation. We maintain consistent communication, ensuring you are informed about court dates, deadlines, and necessary documents.</p>

              </div>

            </div>
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
         <hr className='border border-1 border-danger-subtle my-5'></hr>
         <div className='row align-items-center justify-content-around'>
            <div className='col-md-5'>
              <img className='img-fluid' src={mohamed}  alt='Mohamed Sikkanthar'/> 
            </div>
            <div className='col-md-5 py-4'>
                <h2 className='memberName'>Mr. M. Mohamed Sikkanthar, M.Com., B.Ed., LL.B.</h2>
                <h3 className='role'>Senior Attorney</h3>
                <h5 className='experience'>13 Years of Experience</h5>
                <div className='line my-3'></div>
                 <p>M. Mohamed Sikkanthar brings Thirteen years of hands-on experience in <span className='fw-bold'>all the mentioned practice areas</span> . He is dedicated to guiding clients through legal challenges with precision and a client-first approach. His expertise in handling legal documentation and court procedures ensures efficient case resolutions while maintaining a high standard of service.</p>
            </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default About;
