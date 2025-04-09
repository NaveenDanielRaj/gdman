import family from '../assets/family.jpg'
import divorce from '../assets/divorce.webp'
import probate from '../assets/probate.jpeg'
import criminal from '../assets/criminal.jpg'
import traffic from '../assets/traffic.webp'
import insurance from '../assets/insurance.png'

const PracticeAreas = () => {
  return (
    <>
        <div className='practiceAreasBanner'>
          <div className="overlay">
            <h2>Practice Areas</h2>
          </div>
        </div>

        <div className="container-sm practiceAreas py-5">
          <h2 className="text-center">Practices</h2>
          <p>Our practice provides comprehensive legal services in all areas and aspects of Indian law, with particular focus on the following areas:</p>

          <div className="row py-2 align-items-center justify-content-around">
              <div className="col-12 col-md-5 py-3">
                <div className="card">
                  <img src={family} className="card-img-top" alt="family" height={300} />
                  <div className="card-body cardBody text-center py-4">
                    <div>
                      <h4 className="card-title fw-bold">Family Law & Divorce Cases</h4>
                      <p className='fs-6'>Navigating family law matters can be challenging, but we offer dedicated support for divorce, child custody, alimony, and related issues.</p>
                      <a href="/practiceAreas/family-law">Learn More <i className="fa fa-solid fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 py-3">
                <div className="card">
                  <img src={divorce} className="card-img-top" alt="divorce"  height={300} />
                  <div className="card-body cardBody text-center py-4">
                    <div>
                      <h4 className="card-title fw-bold">Criminal Defense</h4>
                      <p className='fs-6'>When facing criminal charges, having a strong defense team is crucial. We fight aggressively to protect your rights and achieve the best possible outcome for your case.</p>
                      <a href="/practiceAreas/divorce-law">Learn More <i className="fa fa-solid fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 py-3">
                <div className="card">
                  <img src={probate} className="card-img-top" alt="probate"  height={300} />
                  <div className="card-body cardBody text-center py-4">
                    <div>
                      <h4 className="card-title fw-bold">Civil Litigation</h4>
                      <p className='fs-6'>From contract disputes to property conflicts, our civil lawyers provide strategic solutions to resolve disputes effectively and protect your legal interests.</p>
                      <a href="/practiceAreas/probate-law">Learn More <i className="fa fa-solid fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 py-3">
                <div className="card">
                  <img src={criminal} className="card-img-top" alt="criminal"  height={300}/>
                  <div className="card-body cardBody text-center py-4">
                    <div>
                      <h4 className="card-title fw-bold">Cheque Bounce & Financial Disputes</h4>
                      <p className='fs-6'>If you are dealing with a cheque bounce case or financial disagreement, our team will take decisive action to safeguard your financial rights and ensure timely legal resolutions.</p>
                      <a href="/practiceAreas/criminal-defence-law">Learn More <i className="fa fa-solid fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 py-3">
                <div className="card">
                  <img src={traffic} className="card-img-top" alt="traffic"  height={300}/>
                  <div className="card-body cardBody text-center py-4">
                    <div>
                      <h4 className="card-title fw-bold">Probate & Estate Planning</h4>
                      <p className='fs-6'>We assist in will execution, estate planning, and inheritance matters, offering clear guidance to protect your assets and secure your legacy.</p>
                      <a href="/practiceAreas/traffic-defence-law">Learn More <i className="fa fa-solid fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 py-3">
                <div className="card">
                  <img src={insurance} className="card-img-top" alt="insurance"  height={300} />
                  <div className="card-body cardBody text-center py-4">
                    <div>
                      <h4 className="card-title fw-bold">Traffic Offenses & Insurance Claims</h4>
                      <p className='fs-6'>We provide legal representation for traffic violations and insurance disputes, ensuring you receive fair treatment and just compensation.</p>
                      <a href="/practiceAreas/insurance-law">Learn More <i className="fa fa-solid fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>


    </>
  )
}

export default PracticeAreas