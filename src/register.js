import React from 'react'
import './register.css'
import { MDBBtn, MDBContainer, MDBTooltip, MDBIcon, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
import {Link } from "react-router-dom";


function register() {


    return (


        <div >
             <div >
 <MDBProgress className='step'>
        <MDBProgressBar striped animated width='33' valuemin={0} valuemax={100} />
      </MDBProgress>
         </div>
            <div>
                <h1 className='header'> الانضمام كمقدم خدمة</h1>
                <h2 className='sub-header'>خاص بشركات ومؤسسات الطباعة والنسخ والتصوير
    </h2></div>
   
            <div className="content">
                <form 
                >

                    <div >
                    <MDBRow>
                        <MDBCol size="6"> <label>
                            رقم التواصل
              </label>
                            <input
                                type="phone"
                                className="form-control"
                                required
                            />
                        </MDBCol>

                        <MDBCol size="6" > <label>
                            الاسم
              </label>
                            <input
                                type="text"
                                className="form-control"
                                required
                            /></MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="6"> <label>
                            البريد الإلكتروني              </label>
                            <input
                                type="email"
                                className="form-control"
                                required
                            />
                        </MDBCol>

                        <MDBCol size="6"> <label>
                            الاسم التجاري
              </label>
                            <input
                                type="text"
                                className="form-control"
                                required
                            /></MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="6"> <label>
                            كلمة السر              </label>
                            <input
                                type="password"
                                className="form-control"
                                required
                                //onChange = {(event,newValue) => this.setState({password:newValue})}  
                            />
                        </MDBCol>

                        <MDBCol size="6"> <label>
                            المدينة              </label>
                            <input
                                type="text"
                                className="form-control"
                                required
                            /></MDBCol>
                    </MDBRow></div>
                    <div className="footer">
                    <Link to="/isCourses">
      <button type="button" className="btn" color="black">
        إرسال طلب
      </button></Link>
    </div>


                </form>
            </div>
        </div>
    );

}
export default register;