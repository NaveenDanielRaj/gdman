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
        let path = (location.pathname === '/') ? 1 :  (location.pathname === '/aboutUs') ? 2 : (location.pathname === '/practiceAreas' ||location.pathname === '/practiceAreas/family-law' || location.pathname === '/practiceAreas/divorce-law' || location.pathname === '/practiceAreas/probate-law' || location.pathname === '/practiceAreas/criminal-defence-law' || location.pathname === '/practiceAreas/traffic-defence-law' || location.pathname === '/practiceAreas/insurance-law') ? 3 :  (location.pathname === '/caseResults') ? 4 :  (location.pathname === '/contactUs') ? 5 : 1
        setActivePage(path)
    },[location.pathname])

  return (
    <>
        <div className='m-0 p-0 border-bottom border-dark border-1'>
            <nav className=" navbar navbar-expand-md bg-white w-100 px-5 border-2 border-dark">
                <div className="container-fluid  d-flex justify-content-between ">
                    <div>
                        <a className="navbar-brand" href="/">
                            <img src={Logo} alt='Logo' height={65} width={90}></img>
                        </a>
                    </div>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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