import React from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <>
        <nav class=" navbar navbar-expand-md bg-white w-100 px-5 ">
            <div class="container-fluid  d-flex justify-content-between ">
                <div>
                    <a class="navbar-brand" href="/">
                        <img src={Logo} alt='Logo' height={65} width={90}></img>
                    </a>
                </div>
                <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/gdman/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/gdman/aboutUs">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/gdman/practiceAreas">Practice Areas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/gdman/caseResults">Case Results</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/gdman/contactUs">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar