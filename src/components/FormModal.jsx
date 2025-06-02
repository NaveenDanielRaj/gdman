// FormModal.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { showToast, Toast } from './Toast';

const FormModal = ({ onSubmit }) => {

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
            setTimeout(()=>{
                reset()
                onSubmit()
            },2000)
          }).catch((e)=>{
            showToast('Something went wrong!', 'error')
          })
        }catch(e){
            showToast('Something went wrong!', 'error')
        }
      };

  return (
    <div className="modal show d-block" tabIndex="-1">
        <Toast />
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content popUp">
                <div className=" align-items-center justify-content-around">
                <div className="modal-header">
                <h5 className="modal-title ps-4">Please Fill the Form</h5>
                </div>
                <div className="modal-body mx-4">
                    <div className="col-12">
                        <form className="pb-5" onSubmit={handleSubmit(onFormSubmit)}>
                        
                            <div className="py-1">
                                <label htmlFor="Name">Name <span>(required)</span></label>

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

                        
                            <div className="py-1">
                                <label htmlFor="Email">Email <span>(required)</span></label>
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
                        

                            
                            <div className="py-1">
                                <label htmlFor="Phone">Mobile Number <span>(required)</span></label>
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
                        

                            
                            <div className="py-1">
                                <label htmlFor="Message">How Can We Help? <span>(required)</span></label>
                                <p className="py-1 notes">Please do not include confidential or sensitive information in your message. In the event that we are representing a party with opposing interests to your own, we may have a duty to disclose any information you provide to our client.</p>
                                <textarea
                                    className="input rounded-2"
                                    id="Message"
                                    {...register('Message', { required: 'Message is required' })}
                                ></textarea>
                                <div className="py-1">
                                    {errors.Message && <span className="error">*{errors.Message.message}</span>}
                                </div>
                            </div>
                    
                            <div className="pt-2">
                            <button className="btn submitButton rounded-5 px-5 float-end" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>  
                </div>
            </div>
        </div>
    </div>
  );
};

export default FormModal;
