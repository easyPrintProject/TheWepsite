import React, { useState } from "react";
import './register.css';

import {
  MDBIcon } from 'mdb-react-ui-kit';
  import { Link } from "react-router-dom";


function features() {
    return (
        <div><h1 className="header"> أضافة سائق</h1>
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
  </div>  
    )
}

export default features
