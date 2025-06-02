import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import family from '../assets/family.jpg'
import divorce from '../assets/divorce.webp'
import probate from '../assets/probate.jpeg'
import criminal from '../assets/criminal.jpg'
import traffic from '../assets/traffic.webp'
import insurance from '../assets/insurance.png'

const PracticeAreas = () => {

  const {pathname} = useLocation();

  useEffect(()=>{
    window.scrollTo({top : 0 , behavior : "smooth"})
  },[pathname])

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
                  <div className="card-body text-center py-4">
                    <h4 className="card-title fw-bold">Family Law</h4>
                    <a href="practiceAreas/find/best-family-lawyers-in-salem">Learn More <i className="fa fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              {/* <div className="col-12 col-md-5 py-3">
                <div className="card">
                  <img src={divorce} className="card-img-top" alt="divorce"  height={300} />
                  <div className="card-body text-center py-4">
                    <h4 className="card-title fw-bold">Divorce Law</h4>
                    <a href="/practiceAreas/find/best-divorce-lawyers-in-salem">Learn More <i className="fa fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div> */}
              <div className="col-12 col-md-5 py-3">
                <div className="card">
                  <img src={probate} className="card-img-top" alt="probate"  height={300} />
                  <div className="card-body text-center py-4">
                    <h4 className="card-title fw-bold">Probate Law</h4>
                    <a href="/practiceAreas/find/best-probate-lawyers-in-salem">Learn More <i className="fa fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 py-3">
                <div className="card">
                  <img src={criminal} className="card-img-top" alt="criminal"  height={300}/>
                  <div className="card-body text-center py-4">
                    <h4 className="card-title fw-bold">Criminal Defense Law</h4>
                    <a href="/practiceAreas/find/best-criminal-defense-lawyers-in-salem">Learn More <i className="fa fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 py-3">
                <div className="card">
                  <img src={traffic} className="card-img-top" alt="traffic"  height={300}/>
                  <div className="card-body text-center py-4">
                    <h4 className="card-title fw-bold">Traffic Defense Law</h4>
                    <a href="/practiceAreas/find/best-traffic-defense-lawyers-in-salem">Learn More <i className="fa fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 py-3">
                <div className="card">
                  <img src={insurance} className="card-img-top" alt="insurance"  height={300} />
                  <div className="card-body text-center py-4">
                    <h4 className="card-title fw-bold">Insurance Law</h4>
                    <a href="/practiceAreas/find/best-insurance-lawyers-in-salem">Learn More <i className="fa fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
          </div>
        </div>


    </>
  )
}

export default PracticeAreas