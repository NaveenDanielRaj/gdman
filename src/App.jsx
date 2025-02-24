import React, { useState , Suspense} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = React.lazy(()=>import('./components/navbar'))

const Home =  React.lazy(()=>import('./components/home'))
const About =  React.lazy(()=>import('./components/about'))
const Contact =  React.lazy(()=>import('./components/contact'))

function App() {

  return (
    <>
        <Router>
          <Suspense fallback={<div>Loading</div>}>
            <Navbar />
            <Routes>
              <Route path="/gdman" element={<Home />} />
              <Route path="/gdman/aboutUs" element={<About />} />
              <Route path="/gdman/contactUs" element={<Contact />} />
            </Routes>
          </Suspense>
        </Router>
    </>
  )
}

export default App
