import React from 'react'
import familyLaw1 from '../assets/familylaw1.jpg'

import PracticeAreasTab from './practiceAreasTab'

const CriminalDefenceLaw = () => {
  return (
    <>
        <PracticeAreasTab activeTab={4}/>
         <div className='container-sm family py-4'>
                    <h2 className='fw-bold text-center'>Criminal Defence Law</h2>
        
                    <div className='my-5'>
                        <div className='row py-3 justify-content-between align-items-center'>
                            <div className='col-md-6 py-3'>
                                <h4 className='fw-bold'>Chicago Family Law Attorneys Assisting Clients in Drafting Prenuptial Agreements</h4>
                                <p>A prenuptial agreement, also known as a premarital agreement, can help marrying couples determine the division of property and assets if a divorce occurs. These are particularly common if one or both spouses have significant assets, or expect to acquire such assets, such as through inheritance. Contrary to some beliefs, a prenuptial agreement does not mean the marriage is doomed or that one or both spouses aren’t fully committed. Rather, it gives both parties peace of mind because they know what to expect if the marriage is dissolved, and they know their assets and family will remain protected.</p>
                            </div>
                            <div className='col-md-6 py-3 d-flex justify-content-center'>
                                <img className='img-fluid' src={familyLaw1} width={450} />
                            </div>
                        </div>
                        <div className=' py-3'>
                            <h4 className='fw-bold'>What is a Prenuptial Agreement?</h4>
                            <p>Put simply, a prenuptial agreement is a binding and enforceable contract that two potential spouses enter into and sign in anticipation of their upcoming marriage. A prenuptial agreement will usually spell out in detail what division of assets and property the parties agree to in the event one of the parties files for divorce. A prenuptial agreement can also specify whether one party will receive spousal support (also called alimony) from the other and, if so, in what amount and under what circumstances.</p>
                        </div>
                        <div className=' py-3'>
                            <h4 className='fw-bold'>Is Any Prenuptial Agreement Enforceable?</h4>
                            <p>While parties are free to include whatever (legal) conditions they wish, a premarital agreement must generally:</p>
                            <ul>
                                <li>Involve both parties making a full and fair disclosure of their separate assets and liabilities prior to the agreement being signed;</li>
                                <li>Afford each spouse the opportunity to consult with and retain the services of a separate attorney, if the spouse chooses to do so; and</li>
                                <li>Not be presented to the other spouse on the eve of marriage but rather with enough time for the spouse to review and fully consider the terms of the agreement.</li>
                            </ul>
                            <p>A prenuptial agreement that fails to meet these three basic requirements is in danger of being disregarded and set aside by a divorce court if the agreement is challenged in a divorce proceeding. Having legal representation during the drafting and signing of a prenuptial agreement can help insulate the agreement from such attacks.</p>
                        </div>
                        <div className=' py-3'>
                            <h4 className='fw-bold'>Do I Need an Attorney to Represent Me?</h4>
                            <p>Whether you’re interested in drafting a prenuptial agreement or your spouse has presented you with one, an experienced attorney can help you understand and protect your rights. A lawyer with knowledge of family law can look for any potential issues and help ensure that your prenuptial agreement contains the necessary language and requirements to protect your assets appropriately. While most prenuptial agreements stand up in court, it’s not uncommon for ex-spouses to challenge them, and drafting your prenup with the help of a local divorce attorney can help you prepare for and safeguard against potential legal disputes during the divorce. </p>
                            <p>Arami Law is committed to providing well-informed legal counsel to clients wishing to protect their assets through a prenuptial agreement as well as partners asked to sign a prenuptial agreement by their significant others.</p>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default CriminalDefenceLaw