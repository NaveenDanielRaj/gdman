import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useForm } from "react-hook-form";
import formImage from '../assets/contactForm.png'
import { showToast, Toast } from './Toast';

const Contact = () => {

  const {pathname} = useLocation();

  useEffect(()=>{
    window.scrollTo({top : 0 , behavior : "smooth"})
  },[pathname])


  const { register, handleSubmit,formState : {errors} ,reset } = useForm();


  const onFormSubmit = data => {
    try{
      fetch("https://script.google.com/macros/s/AKfycbySoM86UIT5tvaX1G_CeQA9ELcKoPNKXyMhQERM3TdMRWSWr06YC-22Lwt3JJz27FG7Tw/exec",{
        method: 'POST',
        mode: 'no-cors', // Must be no-cors to bypass CORS issue with Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res)=>{
        showToast('Form Submitted successfully!', 'success')
        reset()
      }).catch((e)=>{
        showToast('Something went wrong!', 'error')
      })
    }catch(e){
      showToast('Something went wrong!', 'error')
    }
  };


  return (
    <>
            <Toast />
      <div className="contactUsBanner">
        <div className="overlay">
          <h2>Contact Us</h2>
        </div>
      </div>

      <div className="container-sm contactUs py-3">
       

        <div className="py-2 row align-items-center justify-content-between">
          <h2 className="text-center py-4">Main Office</h2>
            <div className="col-12 col-md-7 order-1">
              {/* <iframe className=" border border-dark border-3" width="100%"  title='googleMap' height="400"  scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=The%20Estate%20Building%20,%208th%20Floor,%20Duckenson%20Road%20Bangalore%20,%20Karnataka%20,%20560042%20,%20India+(Cloud%20Arsitek)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                  {/* <a href="https://www.gps.ie/">gps vehicle tracker</a> */}
              {/* </iframe> */} 

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125042.2704315481!2d78.05589402314111!3d11.653891511459152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ccf52cba0b%3A0xee9989007068ca47!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1745677863812!5m2!1sen!2sin" className=" border border-dark border-3" width="100%"  title='googleMap' height="400"  allowfullscreen="" loading="lazy" scrolling="no"referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 col-md-4 py-3 order-md-1">
                <div className="text-center text-md-start">
                    {/* <h3 className="py-md-2">Reach Us</h3>
                    <p>Call or Text : <span className='contact1'>(123) 123-1234</span></p>
                    <p >Email : <span className='contact1'>goodmanlawfirm@gmail.com</span></p>
                    <br></br>
                    <br></br> */}
                    <h3 className="py-md-2">Visit Us</h3>
                    <p>2/14, Raja Arcade, Sri Ram Nagar, Alagapuram, Salem - 636016.</p>
                </div>
            </div>
           
        </div>

        <hr className='border border-1 border-danger-subtle my-1 mt-5'></hr>

        <div className="py-2 row align-items-center justify-content-between">
            <h2 className="text-center py-4">Branch Office 1</h2>
            <div className="col-12 col-md-7 order-1">
              {/* <iframe className=" border border-dark border-3" width="100%"  title='googleMap' height="400"  scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=The%20Estate%20Building%20,%208th%20Floor,%20Duckenson%20Road%20Bangalore%20,%20Karnataka%20,%20560042%20,%20India+(Cloud%20Arsitek)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                  {/* <a href="https://www.gps.ie/">gps vehicle tracker</a> */}
              {/* </iframe> */}

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250644.76835078944!2d76.80241706882448!3d11.014261489796738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1745678365905!5m2!1sen!2sin" className=" border border-dark border-3" width="100%"  title='googleMap' height="400"  scrolling="no" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 col-md-4 py-3">
                <div className="text-center text-md-start">
                    {/* <h3 className="py-md-2">Reach Us</h3>
                    <p>Call or Text : <span className='contact1'>(123) 123-1234</span></p>
                    <p >Email : <span className='contact1'>goodmanlawfirm@gmail.com</span></p>
                    <br></br>
                    <br></br> */}
                    <h3 className="py-md-2">Visit Us</h3>
                    <p>210/5, 2<sup>nd</sup> Floor, The Avenue Building, TV Samy Road, East RS Puram, Coimbatore - 641002.</p>
                </div>
            </div>
           
        </div>

        
        <hr className='border border-1 border-danger-subtle my-1 mt-5'></hr>

        <div className="py-2 row align-items-center justify-content-between">
          <h2 className="text-center py-4">Branch Office 2</h2>
            <div className="col-12 col-md-7 order-1">
              {/* <iframe className=" border border-dark border-3" width="100%"  title='googleMap' height="400"  scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=The%20Estate%20Building%20,%208th%20Floor,%20Duckenson%20Road%20Bangalore%20,%20Karnataka%20,%20560042%20,%20India+(Cloud%20Arsitek)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                  {/* <a href="https://www.gps.ie/">gps vehicle tracker</a> */}
              {/* </iframe> */} 

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62456.12456638731!2d79.77199334495246!3d11.939304028688788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab8e49cfcf%3A0xcc6bd326d2f0b04e!2sPuducherry!5e0!3m2!1sen!2sin!4v1745678461415!5m2!1sen!2sin" className=" border border-dark border-3" width="100%"  title='googleMap' height="400"  scrolling="no" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 col-md-4 py-3 order-md-1">
                <div className="text-center text-md-start">
                    {/* <h3 className="py-md-2">Reach Us</h3>
                    <p>Call or Text : <span className='contact1'>(123) 123-1234</span></p>
                    <p >Email : <span className='contact1'>goodmanlawfirm@gmail.com</span></p>
                    <br></br>
                    <br></br> */}
                    <h3 className="py-md-2">Visit Us</h3>
                    <p>No.13 , 2<sup>nd</sup> Cross, Natesan Nagar, West Nellithope, Puducherry - 605005</p>
                </div>
            </div>
           
        </div>

        <hr className='border border-1 border-danger-subtle my-1 mt-5'></hr>

        <div className="py-2 row align-items-center justify-content-between">
            <h2 className="text-center py-4">Branch Office 3</h2>
            <div className="col-12 col-md-7 order-1">
              {/* <iframe className=" border border-dark border-3" width="100%"  title='googleMap' height="400"  scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=The%20Estate%20Building%20,%208th%20Floor,%20Duckenson%20Road%20Bangalore%20,%20Karnataka%20,%20560042%20,%20India+(Cloud%20Arsitek)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                  {/* <a href="https://www.gps.ie/">gps vehicle tracker</a> */}
              {/* </iframe> */}

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62457.40268395378!2d79.45830849492907!3d11.933757631718624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5356c0727b6b77%3A0x2c8815a4b312e5f3!2sViluppuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1747416260469!5m2!1sen!2sin" className=" border border-dark border-3" width="100%"  title='googleMap' height="400"  scrolling="no" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 col-md-4 py-3">
                <div className="text-center text-md-start">
                    {/* <h3 className="py-md-2">Reach Us</h3>
                    <p>Call or Text : <span className='contact1'>(123) 123-1234</span></p>
                    <p >Email : <span className='contact1'>goodmanlawfirm@gmail.com</span></p>
                    <br></br>
                    <br></br> */}
                    <h3 className="py-md-2">Visit Us</h3>
                    <p>No 56, Guber Plazza, Opposite Collectrate, Thiruchi Main Road, Villupuram.</p>
                </div>
            </div>
           
        </div>

        <hr className='border border-1 border-danger-subtle my-1 mt-5'></hr>

        <div className="contactForm rounded-5 my-3 p-5">
            <h3 className="fw-bold text-center">Schedule A Free Consultation Today</h3>
            <p className="fw-bold text-center">Need legal representation? Fill out our contact form with some information about your case or concern. We will respond to any inquiry as soon as possible.
            </p>

            <div className="contactForm1 row align-items-center justify-content-around">
              <div className="col-12 col-md-6">
                <form className="w-100 row" onSubmit={handleSubmit(onFormSubmit)}>
                  <div className=" col-12">
                    <div className="py-2">
                      <label htmlFor="Name">Name <span>(required)</span></label>
                    </div>
                    <div className="py-2">
                      <input
                        className="input rounded-2"
                        id="Name"
                        type="text"
                        {...register('Name', { required: 'Name is required' })}
                      />
                    </div>
                    <div className="py-1">
                      {errors.Name && <span className="error">*{errors.Name.message}</span>}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="py-2">
                      <label htmlFor="Email">Email <span>(required)</span></label>

                    </div>
                    <div className="py-2">
                      <input
                      className="input rounded-2"
                        id="Email"
                        type="email"
                        {...register('Email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                      />
                    </div>
                    <div className="py-1">
                      {errors.Email && <span className="error">*{errors.Email.message}</span>}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="py-2">
                      <label htmlFor="Phone">Mobile Number <span>(required)</span></label>
                    </div>
                    <div className="py-2">
                      <input
                      className="input rounded-2"
                        id="Phone"
                        type="text"
                        {...register('Phone', {
                          required: 'Mobile number is required',
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Mobile number must be 10 digits',
                          },
                        })}
                      />
                    </div>
                    <div className="py-1">
                      {errors.Phone && <span className="error">*{errors.Phone.message}</span>}
                    </div>
                  </div>

                  <div className="col-12">
                  <div className="py-2">
                    <label htmlFor="Message">How Can We Help? <span>(required)</span></label>
                    <p className="py-1 w-100 lead">Please do not include confidential or sensitive information in your message. In the event that we are representing a party with opposing interests to your own, we may have a duty to disclose any information you provide to our client.</p>
                  </div>
                  <div className="">
                    <textarea
                      className="input rounded-2"
                      id="Message"
                      {...register('Message', { required: 'Message is required' })}
                    ></textarea>
                  </div>
                  <div className="py-1">
                    {errors.Message && <span className="error">*{errors.Message.message}</span>}
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