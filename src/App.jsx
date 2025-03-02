import React, { useState , Suspense} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = React.lazy(()=>import('./components/navbar'))

const Home =  React.lazy(()=>import('./components/home'))
const About =  React.lazy(()=>import('./components/about'))
const Contact =  React.lazy(()=>import('./components/contact'))
const PracticeAreas = React.lazy(()=>import('./components/practiceAreas'))
const CaseResults = React.lazy(()=>import('./components/caseResults'))
const Footer = React.lazy(()=>import('./components/footer'))

function App() {

  return (
    <>
        <Router>
          <Suspense fallback={<div>Loading</div>}>
            <Navbar />
            <Routes>
              <Route path="/gdman" element={<Home />} />
              <Route path="/gdman/aboutUs" element={<About />} />
              <Route path="/gdman/practiceAreas" element={<PracticeAreas />} />
              <Route path="/gdman/caseResults" element={<CaseResults />} />
              <Route path="/gdman/contactUs" element={<Contact />} />
            </Routes>
            <Footer />
          </Suspense>
        </Router>
    </>
  )
}

export default App
