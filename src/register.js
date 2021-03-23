import React, { useState } from "react";
import './register.css'
import { MDBBtn, MDBContainer, MDBTooltip, MDBIcon, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
import {Link } from "react-router-dom";

import {
  MDBIcon } from 'mdb-react-ui-kit';

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

function Register() {
  const [fullName, setFullName] = React.useState("");
  const [city, setCity ] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] =  React.useState("");
  const [phoneNumber, setPhoneNumber] =  React.useState("");
  const [commercialName, setCommercialName] =  React.useState("");
  const [user, setUser] =  React.useState({Email:"", UserName:"", PhoneNumber:"",  EmailConf:false, errorMassage:"", Id:"", Token:""});
  const [errorMassage, setErrorMassage] =  React.useState("");
  
    return (
          <div>
    <div className="header">الانضمام كمقدم خدمة</div>
    <h2 className="sub-header">خاص بشركات ومؤسسات الطباعة والنسخ والتصوير</h2>
    <h5 className="sub-header2">معلومات مالك المطبعة</h5>

    <div className="content">
    <div className="steps-bar" >
    <button style={{backgroundColor:"gray", marginRight:10, marginLeft:10}} type="button" class="btn btn  btn-lg btn-floating" disabled>
    <MDBIcon className='ms-1 ' icon='check' size='lg' color="white" />
    </button>
    <MDBIcon className='ms-1 ' icon='arrow-left' size='lg' color="gray" />

    <button style={{backgroundColor:"gray", marginRight:10, marginLeft:10}} type="button" class="btn btn  btn-lg btn-floating" disabled>
    <MDBIcon className='ms-1 ' icon='check' size='lg' color="white" />
    </button>
    <MDBIcon className='ms-1 ' icon='arrow-left' size='lg' color="gray" />

    <button style={{backgroundColor:"gray", marginRight:10, marginLeft:10}} type="button" class="btn btn  btn-lg btn-floating" disabled>
    <MDBIcon className='ms-1 ' icon='check' size='lg' color="white" />
    </button>
  
    

    </div>
      <div className="image">
      </div>
      <div className="form">

        <div className="form-group">
          <label htmlFor="Name"> الاسم الكامل لمالك المطبعة</label>
          <input type="text" name="Name" onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="Phone" >رقم الجوال</label>
          <input type="text" name="Phone"  onChange={(e) => setPhoneNumber(e.target.value)}  />
        </div>
        <div className="form-group">
          <label htmlFor="Email" >البريد الإلكتروني</label>
          <input type="email" name="Eamil"  onChange={(e) => setEmail(e.target.value)}/>
        </div>
        {/* <div className="form-group">
          <label htmlFor="CoName"> الاسم التجاري</label>
          <input type="text" name="CoName" onChange={(e) => setCommercialName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="City" > المدينة</label>
          <input type="text" name="City" onChange={(e) => setCity(e.target.value)} />
        </div> */}
        <div className="form-group">
          <label htmlFor="password" > كلمة السر </label>
          <input type="password" name="password"
            // onChange = {(event,newValue) => this.setState({password:newValue})}
            onChange={(e) => setPassword(e.target.value)}  />
        </div>
        <div className="form-group">
          <label htmlFor="password"> تأكيد كلمة السر </label>
          <input type="password" name="password" />
        </div>
      </div>
    </div>
    <div className="footer">
      <Link to="./PrintingShopInfo">
      <button type="button" className="btn">
        التالي
      </button></Link>
    </div>


                </form>
            </div>
        </div>
    );

}
export default register;
