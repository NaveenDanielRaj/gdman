import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const CaseResults = () => {

  const {pathname} = useLocation();

  useEffect(()=>{
    window.scrollTo({top : 0 , behavior : "smooth"})
  },[pathname])

  
  return (
    <>
      <div className="container-sm">
        <div className="ag-format-container">
          <div className="ag-courses_box d-block">
            <div className="ag-courses_item">
              <div  className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  Case 1 Heading
                </div>
                  <div className="case_description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid exercitationem quidem, aliquam laudantium fugit maxime tempora fugiat ut at nemo ratione id perferendis repellat autem excepturi voluptates cum temporibus?</p>
                  </div>

                <div className="ag-courses-item_date-box">
                  Registered Date :
                  <span className="ag-courses-item_date">
                    04.11.2022
                  </span>
                </div>

                <div className="readMore">
                    <p>Read More <i className="px-2 fa fa-solid fa-circle-arrow-right"></i></p>
                </div>
              </div>
            </div>

            <div className="ag-courses_item">
              <div  className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  Case 2 Heading
                </div>
                  <div className="case_description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid exercitationem quidem, aliquam laudantium fugit maxime tempora fugiat ut at nemo ratione id perferendis repellat autem excepturi voluptates cum temporibus?</p>
                  </div>

                <div className="ag-courses-item_date-box">
                  Registered Date :
                  <span className="ag-courses-item_date">
                    04.11.2022
                  </span>
                </div>
                <div className="readMore">
                    <p>Read More <i className="px-2 fa fa-solid fa-circle-arrow-right"></i></p>
                </div>
              </div>
            </div>

            <div className="ag-courses_item">
              <div className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  Case 3 Heading
                </div>
                  <div className="case_description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid exercitationem quidem, aliquam laudantium fugit maxime tempora fugiat ut at nemo ratione id perferendis repellat autem excepturi voluptates cum temporibus?</p>
                  </div>

                <div className="ag-courses-item_date-box">
                  Registered Date :
                  <span className="ag-courses-item_date">
                    04.11.2022
                  </span>
                </div>
                <div className="readMore">
                    <p>Read More <i className="px-2 fa fa-solid fa-circle-arrow-right"></i></p>
                </div>
                
              </div>
            </div>

            <div className="ag-courses_item">
              <div  className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  Case 4 Heading
                </div>
                  <div className="case_description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid exercitationem quidem, aliquam laudantium fugit maxime tempora fugiat ut at nemo ratione id perferendis repellat autem excepturi voluptates cum temporibus?</p>
                  </div>

                <div className="ag-courses-item_date-box">
                  Registered Date :
                  <span className="ag-courses-item_date">
                    04.11.2022
                  </span>
                </div>
                <div className="readMore">
                    <p>Read More <i className="px-2 fa fa-solid fa-circle-arrow-right"></i></p>
                </div>
              </div>
            </div>

            <div className="ag-courses_item">
              <div className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  Case 5 Heading
                </div>
                  <div className="case_description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid exercitationem quidem, aliquam laudantium fugit maxime tempora fugiat ut at nemo ratione id perferendis repellat autem excepturi voluptates cum temporibus?</p>
                  </div>

                <div className="ag-courses-item_date-box">
                  Registered Date :
                  <span className="ag-courses-item_date">
                    04.11.2022
                  </span>
                </div>
                <div className="readMore">
                    <p>Read More <i className="px-2 fa fa-solid fa-circle-arrow-right"></i></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseResults