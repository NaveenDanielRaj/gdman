
import { useForm } from "react-hook-form";
import formImage from '../assets/contactForm.png'

const Contact = () => {

  const { register, handleSubmit,formState : {errors} ,reset } = useForm();


  const onFormSubmit = data => console.log(data);


  return (
    <>
      <div className="contactUsBanner">
        <div className="overlay">
          <h2>Contact Us</h2>
        </div>
      </div>

      <div className="container-sm contactUs py-3">
       

        <div className="py-2 row align-items-center justify-content-between">
          <h2 className="text-center py-4">Main Office</h2>
            <div className="col-12 col-md-7 order-1">
              <iframe className=" border border-dark border-3" width="100%"  title='googleMap' height="400"  scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=The%20Estate%20Building%20,%208th%20Floor,%20Duckenson%20Road%20Bangalore%20,%20Karnataka%20,%20560042%20,%20India+(Cloud%20Arsitek)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                  {/* <a href="https://www.gps.ie/">gps vehicle tracker</a> */}
              </iframe>
            </div>
            <div className="col-12 col-md-4 py-3 order-md-1">
                <div className="text-center text-md-start">
                    <h3 className="py-md-2">Reach Us</h3>
                    <p>Call or Text : <span className='contact1'>(123) 123-1234</span></p>
                    <p >Email : <span className='contact1'>goodmanlawfirm@gmail.com</span></p>
                    <br></br>
                    <br></br>
                    <h3 className="py-md-2">Visit Us</h3>
                    <p>165 Burnside St 2nd Floor Cranston, RI 02910</p>
                </div>
            </div>
           
        </div>

        <hr className='border border-1 border-danger-subtle my-1 mt-5'></hr>

        <div className="py-2 row align-items-center justify-content-between">
            <h2 className="text-center py-4">Branch Office 1</h2>
            <div className="col-12 col-md-7 order-1">
              <iframe className=" border border-dark border-3" width="100%"  title='googleMap' height="400"  scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=The%20Estate%20Building%20,%208th%20Floor,%20Duckenson%20Road%20Bangalore%20,%20Karnataka%20,%20560042%20,%20India+(Cloud%20Arsitek)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                  {/* <a href="https://www.gps.ie/">gps vehicle tracker</a> */}
              </iframe>
            </div>
            <div className="col-12 col-md-4 py-3">
                <div className="text-center text-md-start">
                    <h3 className="py-md-2">Reach Us</h3>
                    <p>Call or Text : <span className='contact1'>(123) 123-1234</span></p>
                    <p >Email : <span className='contact1'>goodmanlawfirm@gmail.com</span></p>
                    <br></br>
                    <br></br>
                    <h3 className="py-md-2">Visit Us</h3>
                    <p>165 Burnside St 2nd Floor Cranston, RI 02910</p>
                </div>
            </div>
           
        </div>

        
        <hr className='border border-1 border-danger-subtle my-1 mt-5'></hr>

        <div className="py-2 row align-items-center justify-content-between">
          <h2 className="text-center py-4">Branch Office 2</h2>
            <div className="col-12 col-md-7 order-1">
              <iframe className=" border border-dark border-3" width="100%"  title='googleMap' height="400"  scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=The%20Estate%20Building%20,%208th%20Floor,%20Duckenson%20Road%20Bangalore%20,%20Karnataka%20,%20560042%20,%20India+(Cloud%20Arsitek)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                  {/* <a href="https://www.gps.ie/">gps vehicle tracker</a> */}
              </iframe>
            </div>
            <div className="col-12 col-md-4 py-3 order-md-1">
                <div className="text-center text-md-start">
                    <h3 className="py-md-2">Reach Us</h3>
                    <p>Call or Text : <span className='contact1'>(123) 123-1234</span></p>
                    <p >Email : <span className='contact1'>goodmanlawfirm@gmail.com</span></p>
                    <br></br>
                    <br></br>
                    <h3 className="py-md-2">Visit Us</h3>
                    <p>165 Burnside St 2nd Floor Cranston, RI 02910</p>
                </div>
            </div>
           
        </div>

        <hr className='border border-1 border-danger-subtle my-1 mt-5'></hr>

        <div className="contactForm rounded-5 my-3 p-5">
            <h3 className="fw-bold text-center">Schedule A Free Consultation Today</h3>
            <p className="fw-bold text-center">Need legal representation? Fill out our contact form with some information about your case or concern. We will respond to any inquiry as soon as possible.
            </p>

            <div className="contactForm1 row align-items-center justify-content-center">
              <div className="col-12 col-md-6">
                <form className="w-100 row" onSubmit={handleSubmit(onFormSubmit)}>
                  <div className=" col-12">
                    <div className="py-2">
                      <label htmlFor="name">Name <span>(required)</span></label>
                    </div>
                    <div className="py-2">
                      <input
                        className="input rounded-2 w-100"
                        id="name"
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                      />
                    </div>
                    <div className="py-1">
                      {errors.name && <span className="error">*{errors.name.message}</span>}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="py-2">
                      <label htmlFor="email">Email <span>(required)</span></label>

                    </div>
                    <div className="py-2">
                      <input
                      className="input rounded-2 w-100"
                        id="email"
                        type="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                      />
                    </div>
                    <div className="py-1">
                      {errors.email && <span className="error">*{errors.email.message}</span>}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="py-2">
                      <label htmlFor="mobile">Mobile Number <span>(required)</span></label>
                    </div>
                    <div className="py-2">
                      <input
                      className="input rounded-2 w-100"
                        id="mobile"
                        type="text"
                        {...register('mobile', {
                          required: 'Mobile number is required',
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Mobile number must be 10 digits',
                          },
                        })}
                      />
                    </div>
                    <div className="py-1">
                      {errors.mobile && <span className="error">*{errors.mobile.message}</span>}
                    </div>
                  </div>

                  <div className="col-12">
                  <div className="py-2">
                    <label htmlFor="message">How Can We Help? <span>(required)</span></label>
                    <p className="py-1 w-75 lead">Please do not include confidential or sensitive information in your message. In the event that we are representing a party with opposing interests to your own, we may have a duty to disclose any information you provide to our client.</p>
                  </div>
                  <div className="">
                    <textarea
                      className="input rounded-2 w-100 "
                      id="message"
                      {...register('message', { required: 'Message is required' })}
                    ></textarea>
                  </div>
                  <div className="py-1">
                    {errors.message && <span className="error">*{errors.message.message}</span>}
                  </div>
                  </div>

                  <div className="pt-3">
                    <button className="btn submitButton rounded-5 px-5 float-center" type="submit">Submit</button>
                  </div>
                </form>
              </div>
              <div className="col-12 col-md-4 d-none d-lg-block">
                    <img width={500} className="img-fluid" src={formImage}/>
              </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default Contact