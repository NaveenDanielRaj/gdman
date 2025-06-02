import { useEffect, useState } from 'react'
import { Link , useLocation} from 'react-router-dom'
import Logo from '../assets/Logo.png'

const Navbar = () => {

    const [activePage , setActivePage] = useState(1)
    const location = useLocation();

    const handleSetPage = (page)=>{
        setActivePage(page)
    }

    useEffect(()=>{
        let path = (location.pathname === '/') ? 1 :  (location.pathname === '/aboutUs') ? 2 : (location.pathname === '/practiceAreas' ||location.pathname === '/practiceAreas/find/best-family-lawyers-in-salem' || location.pathname === '/practiceAreas/find/best-divorce-lawyers-in-salem' || location.pathname === '/practiceAreas/find/best-probate-lawyers-in-salem' || location.pathname === '/practiceAreas/find/best-criminal-defense-lawyers-in-salem' || location.pathname === '/practiceAreas/find/best-traffic-defense-lawyers-in-salem' || location.pathname === '/practiceAreas/find/best-insurance-lawyers-in-salem') ? 3 :  (location.pathname === '/caseResults') ? 4 :  (location.pathname === '/contactUs') ? 5 : 1
        setActivePage(path)
    },[location.pathname])

  return (
    <>
        <div className='m-0 p-0 border-bottom border-dark border-1'>
            <nav className=" navbar navbar-expand-lg bg-white w-100 px-2 px-lg-5 border-2 border-dark">
                <div className="container-fluid container-fluid align-items-center d-block d-lg-flex px-lg-5  ">
                    <div className='d-flex  justify-content-between align-items-center' >
                        <div>
                            <a className="navbar-brand" href="/">
                                <img src={Logo} alt='Logo' height={65} width={90}></img>
                            </a>
                        </div>
                        <div className=''>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                    <div>
                       
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                                <li className="nav-item" onClick={()=> handleSetPage(1)}>
                                    <Link className={`nav-link ${ activePage === 1 ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item" onClick={()=> handleSetPage(2)}>
                                    <Link className={`nav-link ${ activePage === 2 ? 'active' : ''}`} to="/aboutUs">About</Link>
                                </li>
                                <li className="nav-item" onClick={()=> handleSetPage(3)}>
                                    <Link className={`nav-link ${ activePage === 3 ? 'active' : ''}`} to="/practiceAreas">Practice Areas</Link>
                                </li>
                                <li className="nav-item" onClick={()=> handleSetPage(4)}>
                                    <Link className={`nav-link ${ activePage === 4 ? 'active' : ''}`} to="/caseResults">Case Results</Link>
                                </li>
                                <li className="nav-item" onClick={()=> handleSetPage(5)}>
                                    <Link className={`nav-link ${ activePage === 5 ? 'active' : ''}`} to="/contactUs">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar