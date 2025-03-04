
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <>
        <nav className=" navbar navbar-expand-md bg-white w-100 px-5 ">
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
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/aboutUs">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/practiceAreas">Practice Areas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/caseResults">Case Results</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contactUs">Contact Us</a>
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