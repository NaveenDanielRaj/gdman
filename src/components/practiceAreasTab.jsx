import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const PracticeAreasTab = ({activeTab}) => {
    const navigate = useNavigate();

    const [activePill, setActivePill] = useState(activeTab);

     // Handle pill click
    const handlePillClick = (pillIndex) => {
        setActivePill(pillIndex);

        let navigatePage = (pillIndex == 1) ? "/practiceAreas/family-law" : (pillIndex == 2) ? "/practiceAreas/divorce-law" :  (pillIndex == 3) ? "/practiceAreas/probate-law" : (pillIndex == 4) ? "/practiceAreas/criminal-defence-law" :  (pillIndex == 5) ? "/practiceAreas/traffic-defence-law" :   (pillIndex == 6) ? "/practiceAreas/insurance-law" : "/practiceAreas"
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
                <li className="nav-item practiceAreaItems" role="presentation">
                <p
                    className={`nav-link ${activePill === 2 ? 'active practiceAreasIndivideal' : 'notPracticeAreasIndivideal'}`}
                    onClick={() => handlePillClick(2)}
                >
                   Divorce Law
                </p>
                </li>
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