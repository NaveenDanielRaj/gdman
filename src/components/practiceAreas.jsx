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
          <p>Our practice provides comprehensive legal services in all areas and aspects of Serbian business law, with particular focus on the following areas:</p>

          <div className="row py-2 align-items-center justify-content-around">
              <div className="col-12 col-md-5 py-3">
                <div className="card">
                  <img src={family} class="card-img-top" alt="family" height={300} />
                  <div class="card-body text-center py-4">
                    <h4 class="card-title fw-bold">Family Law</h4>
                    <a href="/practiceAreas/family-law">Learn More <i class="fa fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 py-3">
                <div className="card">
                  <img src={divorce} class="card-img-top" alt="divorce"  height={300} />
                  <div class="card-body text-center py-4">
                    <h4 class="card-title fw-bold">Divorce Law</h4>
                    <a href="/practiceAreas/divorce-law">Learn More <i class="fa fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 py-3">
                <div className="card">
                  <img src={probate} class="card-img-top" alt="probate"  height={300} />
                  <div class="card-body text-center py-4">
                    <h4 class="card-title fw-bold">Probate Law</h4>
                    <a href="/practiceAreas/probate-law">Learn More <i class="fa fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 py-3">
                <div className="card">
                  <img src={criminal} class="card-img-top" alt="criminal"  height={300}/>
                  <div class="card-body text-center py-4">
                    <h4 class="card-title fw-bold">Criminal Defense Law</h4>
                    <a href="/practiceAreas/criminal-defence-law">Learn More <i class="fa fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 py-3">
                <div className="card">
                  <img src={traffic} class="card-img-top" alt="traffic"  height={300}/>
                  <div class="card-body text-center py-4">
                    <h4 class="card-title fw-bold">Traffic Defense Law</h4>
                    <a href="/practiceAreas/traffic-defence-law">Learn More <i class="fa fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 py-3">
                <div className="card">
                  <img src={insurance} class="card-img-top" alt="insurance"  height={300} />
                  <div class="card-body text-center py-4">
                    <h4 class="card-title fw-bold">Insurance Law</h4>
                    <a href="/practiceAreas/insurance-law">Learn More <i class="fa fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
          </div>
        </div>


    </>
  )
}

export default PracticeAreas