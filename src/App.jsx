import React, { Suspense} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Navbar = React.lazy(()=>import('./components/navbar'))

const Home =  React.lazy(()=>import('./components/home'))
const About =  React.lazy(()=>import('./components/about'))
const Contact =  React.lazy(()=>import('./components/contact'))
const PracticeAreas = React.lazy(()=>import('./components/practiceAreas'))
const CaseResults = React.lazy(()=>import('./components/caseResults'))
const Footer = React.lazy(()=>import('./components/footer'))
const FamilyLaw = React.lazy(()=>import('./components/familyLaw'))
const DivorceLaw = React.lazy(()=>import('./components/divorce'))
const ProbateLaw = React.lazy(()=>import('./components/probate'))
const CriminalDefenceLaw = React.lazy(()=>import('./components/criminalDefence'))
const TrafficDefenceLaw = React.lazy(()=>import('./components/trafficDefence'))
const InsuranceLaw = React.lazy(()=>import('./components/insurance'))

import Loading from './components/loading'

function App() {

  return (
    <>
        <Router>
          <Suspense fallback={<Loading />}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutUs" element={<About />} />
              <Route path="/practiceAreas" element={<PracticeAreas />} />
              <Route path="/practiceAreas/family-law" element={<FamilyLaw />}/>
              <Route path="/practiceAreas/divorce-law" element={<DivorceLaw />}/>
              <Route path="/practiceAreas/probate-law" element={<ProbateLaw />}/>
              <Route path="/practiceAreas/criminal-defence-law" element={<CriminalDefenceLaw />}/>
              <Route path="/practiceAreas/traffic-defence-law" element={<TrafficDefenceLaw />}/>
              <Route path="/practiceAreas/insurance-law" element={<InsuranceLaw />}/>
              <Route path="/caseResults" element={<CaseResults />} />
              <Route path="/contactUs" element={<Contact />} />
            </Routes>
            <Footer />
          </Suspense>
        </Router>
    </>
  )
}

export default App
