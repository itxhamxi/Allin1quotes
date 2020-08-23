import React from 'react'



function Contactus() {
    
    return (
        <div className="contact-wrapper">
        <div className="container-fluid ">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="form-container">
                        <div className="contact-banner">
                            <h1>Contact Us</h1>
                            <p>We would love to hear from you</p>
                        </div>
                        <form className="contact-form">
                          <div className="row">
                              <div className="col-md-4">
                          <label>Full Name</label>
                          </div>
                          <div className="col-md-8">
                          <input onclick="inputclick()"  placeholder="Enter Full Name" type="text"></input>
                          </div>
                         
                         </div>
                         <div className="row">
                              <div className="col-md-4">
                          <label>Email</label>
                          </div>
                          <div className="col-md-8">
                          <input onclick="inputclick()"  placeholder="Enter Email" type="Email"></input>
                          </div>
                          
                          
                          </div>
                          <div className="row">
                              <div className="col-md-4">
                          <label>phone number</label>
                          </div>
                          <div className="col-md-8">
                          <input onclick="inputclick()"  placeholder="Enter Phone number" type="number"></input>
                          </div>
                         
                          </div>
                          <div className="row">
                              <div className="col-md-4">
                          <label>Message</label>
                          </div>
                          <div className="col-md-8">
                          <textarea  onclick="inputclick()" placeholder="Enter Message"></textarea>
                          </div>
                          
                          </div>
                          <div className="row">
                              <div className="col-md-3"></div>
                              <div className="col-md-6">
                                  <button className="sub-btn">Submit</button>
                              </div>
                              <div className="col-md-3"></div>
                          </div>

                        </form>

                    </div>
                </div>
                <div className="col-md-3"></div>

            </div>

        </div>
        </div>
    )
}

export default Contactus
