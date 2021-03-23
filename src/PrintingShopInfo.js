import React, { useState } from "react";
import {MDBIcon } from 'mdb-react-ui-kit';
  import { Link } from "react-router-dom";
import './PrintingShopInfo.css';


function PrintingShopInfo() {
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
    <h5 className="sub-header2">معلومات المطبعة</h5>

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
    <MDBIcon className='ms-1 ' icon='arrow-left' size='lg' color="gray" />

    <button style={{backgroundColor:"gray", marginRight:10, marginLeft:10}} type="button" class="btn btn  btn-lg btn-floating" disabled>
    <MDBIcon className='ms-1 ' icon='check' size='lg' color="white" />
    </button>
    <MDBIcon className='ms-1 ' icon='arrow-left' size='lg' color="gray" />

    <button style={{backgroundColor:"green", marginRight:10, marginLeft:10}} type="button" class="btn btn  btn-lg btn-floating" disabled>
    <MDBIcon className='ms-1 ' icon='check' size='lg' color="white" />
    </button>
  
    

    </div>
      <div className="image">
      </div>
      <div className="form">

        <div className="form-group">
          <label htmlFor="Name"> : اسم المطبعة</label>
          <input type="text" name="Name" onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="Phone"  >: الرقم التجاري</label>
          <input type="text" name="Phone"  onChange={(e) => setPhoneNumber(e.target.value)}  />
        </div>
        <div className="form-group">
          <label htmlFor="Phone"  >: الاسم التجاري</label>
          <input type="text" name="Phone"  onChange={(e) => setPhoneNumber(e.target.value)}  />
        </div>
        <div className="form-group">
          <label htmlFor="Email" >: البريد الإلكتروني الخاص بالمطبعة</label>
          <input type="email" name="Eamil"  onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="City" > : المدينة</label>
          <input type="text" name="City" onChange={(e) => setCity(e.target.value)} />
        </div> 
        <div className="form-group">
          <label htmlFor="password" >هل ترغب بتقديم خدمات الطباعة للزبائن ؟</label>
          <input type="password" name="password"
            onChange={(e) => setPassword(e.target.value)}  />
        </div>
        <div className="form-group">
          <label htmlFor="password"> هل ترغب بتقديم منتجات مطبوعة جاهزة ؟ </label>
          <input type="password" name="password" />
        </div>
      </div>
    </div>
    <div className="footer">
      <Link to="./AdressInfo">
      <button type="button" className="btn">
        التالي
      </button></Link>
    </div>
  </div>   
    )
}

export default PrintingShopInfo
