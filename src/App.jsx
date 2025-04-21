import React, { Suspense, useEffect} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactGA from "react-ga4";

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

  useEffect(()=>{
    ReactGA.initialize("G-L7ZY7JEBPL");

    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "App.jsx" });
  },[])

  return (
    <>
        <Router>
          <Suspense fallback={<Loading />}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutUs" element={<About />} />
              <Route path="/practiceAreas" element={<PracticeAreas />} />
              <Route path="/practiceAreas/find/best-family-lawyers-in-salem" element={<FamilyLaw />}/>
              <Route path="/practiceAreas/find/best-divorce-lawyers-in-salem" element={<DivorceLaw />}/>
              <Route path="/practiceAreas/find/best-probate-lawyers-in-salem" element={<ProbateLaw />}/>
              <Route path="/practiceAreas/find/best-criminal-defense-lawyers-in-salem" element={<CriminalDefenceLaw />}/>
              <Route path="/practiceAreas/find/best-traffic-defense-lawyers-in-salem" element={<TrafficDefenceLaw />}/>
              <Route path="/practiceAreas/find/best-insurance-lawyers-in-salem" element={<InsuranceLaw />}/>
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
