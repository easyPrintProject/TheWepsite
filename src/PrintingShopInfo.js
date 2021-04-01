import React, { useState } from "react";
import {MDBIcon } from 'mdb-react-ui-kit';
  import { Link } from "react-router-dom";
import './PrintingShopInfo.css';
import { Button, Modal, Form } from 'react-bootstrap';



function PrintingShopInfo() {
   const [prenterName, setprenterName] = React.useState("");
  const [isCourseMaterial, setisCourseMaterial ] = React.useState(true);
  const [isService, setisService] = React.useState(true);
  const [commrecialName, setcommrecialName] =  React.useState("");
  const [city, setcity] =  React.useState("");
  const [PrintingShopEmail, setPrintingShopEmail] =  React.useState("");
  const [commrecialNumber, setcommrecialNumber] =  React.useState("");
  
    return (
          <div>
    <div className="header">
      الانضمام كمقدم خدمة
      </div>
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

    <button style={{backgroundColor:"green", marginRight:10, marginLeft:10}} type="button" class="btn btn  btn-lg btn-floating" disabled>
    <MDBIcon className='ms-1 ' icon='check' size='lg' color="white" />
    </button>
    </div>
      <div className="image">
      </div>
      <div className="form">

        <div className="form-group">
          <label htmlFor="Name"> اسم المطبعة</label>
          <input className="form-control" type="text" name="Name" onChange={(e) => setprenterName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="Phone"  > الرقم التجاري</label>
          <input className="form-control" type="text" name="Phone"  onChange={(e) => setcommrecialNumber(e.target.value)}  />
        </div>
        <div className="form-group">
          <label htmlFor="Phone"  >الاسم التجاري</label>
          <input className="form-control" type="text" name="Phone"  onChange={(e) => setcommrecialName(e.target.value)}  />
        </div>
        <div className="form-group">
          <label htmlFor="Email" > البريد الإلكتروني الخاص بالمطبعة</label>
          <input className="form-control" type="email" name="Eamil"  onChange={(e) => setPrintingShopEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="City" >  المدينة</label>
          <input className="form-control" type="text" name="City" onChange={(e) => setcity(e.target.value)} />
        </div> 
        <div className="form-group">
          <label >هل ترغب بتقديم خدمات الطباعة للزبائن ؟</label>
          <input type="checkbox" name="checkbox"
            onChange={(e) => setisService(e.target.value)}  />
        </div>
        <div className="form-group">
          <label > هل ترغب بتقديم منتجات مطبوعة جاهزة ؟ </label>
          <input type="checkbox"  onChange={(e) => setisCourseMaterial(e.target.value)}/>
        </div>
        
      </div>
    </div>
    <div className="footer">
      <Link to="./AdressInfo">
      <button type="button" className="btn" style={{marginBottom:99, fontSize:15}} >
        التالي
      </button></Link>
    </div>
  </div>   
    )
}

export default PrintingShopInfo
