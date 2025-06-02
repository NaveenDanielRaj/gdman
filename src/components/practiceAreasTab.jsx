import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const PracticeAreasTab = ({activeTab}) => {
    const navigate = useNavigate();

    const [activePill, setActivePill] = useState(activeTab);

     // Handle pill click
    const handlePillClick = (pillIndex) => {
        setActivePill(pillIndex);

        let navigatePage = (pillIndex == 1) ? "/practiceAreas/find/best-family-lawyers-in-salem" : (pillIndex == 2) ? "/practiceAreas/find/best-divorce-lawyers-in-salem" :  (pillIndex == 3) ? "/practiceAreas/find/best-probate-lawyers-in-salem" : (pillIndex == 4) ? "/practiceAreas/find/best-criminal-defense-lawyers-in-salem" :  (pillIndex == 5) ? "/practiceAreas/find/best-traffic-defense-lawyers-in-salem" :   (pillIndex == 6) ? "/practiceAreas/find/best-insurance-lawyers-in-salem" : "/practiceAreas"
        navigate(navigatePage)
        
    };

  return (
    <>
        <div className="container-sm py-4 ">
            {/* Pills Navigation */}
            <ul className="nav nav-pills d-flex align-items-center  justify-content-center justify-content-xxl-between" id="myPills" role="tablist">
                <li className="nav-item practiceAreaItems" role="presentation">
                <p
                    className={`nav-link ${activePill === 1 ? 'active practiceAreasIndivideal' : 'notPracticeAreasIndivideal'}`}
                    onClick={() => handlePillClick(1)}
                >
                    Family Law
                </p>
                </li>
                {/* <li className="nav-item practiceAreaItems" role="presentation">
                <p
                    className={`nav-link ${activePill === 2 ? 'active practiceAreasIndivideal' : 'notPracticeAreasIndivideal'}`}
                    onClick={() => handlePillClick(2)}
                >
                   Divorce Law
                </p>
                </li> */}
                <li className="nav-item practiceAreaItems" role="presentation">
                <p
                    className={`nav-link ${activePill === 3 ? 'active practiceAreasIndivideal' : 'notPracticeAreasIndivideal'}`}
                    onClick={() => handlePillClick(3)}
                >
                    Probate Law
                </p>
                </li>
                <li className="nav-item practiceAreaItems" role="presentation">
                <p
                    className={`nav-link ${activePill === 4 ? 'active practiceAreasIndivideal' : 'notPracticeAreasIndivideal'}`}
                    onClick={() => handlePillClick(4)}
                >
                   Criminal Defense Law
                </p>
                </li>
                <li className="nav-item practiceAreaItems" role="presentation">
                <p
                    className={`nav-link ${activePill === 5 ? 'active practiceAreasIndivideal' : 'notPracticeAreasIndivideal'}`}
                    onClick={() => handlePillClick(5)}
                >
                   Traffic Defense Law
                </p>
                </li>
                <li className="nav-item practiceAreaItems" role="presentation">
                <p
                    className={`nav-link ${activePill === 6 ? 'active practiceAreasIndivideal' : 'notPracticeAreasIndivideal'}`}
                    onClick={() => handlePillClick(6)}
                >
                    Insurance Law
                </p>
                </li>
            </ul>

            <hr></hr>
    </div>
    </>
  )
}

export default PracticeAreasTab