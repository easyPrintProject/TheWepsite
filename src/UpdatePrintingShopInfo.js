import React, { useState } from "react";
import {MDBIcon } from 'mdb-react-ui-kit';
  import { Link } from "react-router-dom";
import './UpdatePrintingShopInfo.css';
import { Button, Modal, Form } from 'react-bootstrap';



function UpdatePrintingShopInfo() {
   const [prenterName, setprenterName] = React.useState("");
  const [commrecialName, setcommrecialName] =  React.useState("");
  const [PrintingShopEmail, setPrintingShopEmail] =  React.useState("");
  const [commrecialNumber, setcommrecialNumber] =  React.useState("");
  const [country, setCountry] =  React.useState("");
  const [neighborhood, setNeighborhood] =  React.useState("");
  const [street, setStreet] =  React.useState("");
  const [adressLine, setAdressLine] =  React.useState();
  const [postcode, setPostcode] =  React.useState("");
  const [city, setCity] = React.useState("");

  //modat states 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
          <div style={{marginBottom:111}}>
    <h5 className="sub-header2">تحديث معلومات المطبعة</h5>

    <div className="content">
 
      <div className="image">
      </div>
      <div className="form">

        <div className="form-group">
          <label htmlFor="Name">  اسم المطبعة :</label>
          <input className="form-control" type="text" name="Name" onChange={(e) => setprenterName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="Phone"  > الرقم التجاري :</label>
          <input className="form-control" type="text" name="Phone"  onChange={(e) => setcommrecialNumber(e.target.value)}  />
        </div>
        <div className="form-group">
          <label htmlFor="Phone"  > الاسم التجاري :</label>
          <input className="form-control" type="text" name="Phone"  onChange={(e) => setcommrecialName(e.target.value)}  />
        </div>
        <div className="form-group">
          <label htmlFor="Email" > البريد الإلكتروني الخاص بالمطبعة :</label>
          <input className="form-control" type="email" name="Eamil"  onChange={(e) => setPrintingShopEmail(e.target.value)}/>
        </div>
  
   
        <div className="form-group">
            <label htmlFor="Name">  الدولة :</label>
            <input className="form-control" type="text" name="Name" onChange={(e) => setCountry(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="Phone"  > المدينة :</label>
            <input className="form-control" type="text" name="Phone"  onChange={(e) => setCity(e.target.value)}  />
          </div>
          <div className="form-group">
            <label htmlFor="Phone"  >  الحي :</label>
            <input className="form-control" type="text" name="Phone"  onChange={(e) => setNeighborhood(e.target.value)}  />
          </div>
          <div className="form-group">
            <label htmlFor="Email" > الشارع :</label>
            <input  className="form-control" type="email" name="Eamil"  onChange={(e) => setStreet(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="City" >  وصف لمعلم قريب : </label>
            <input className="form-control" type="text" name="City" onChange={(e) => setAdressLine(e.target.value)} />
          </div> 
          <div className="form-group">
            <label htmlFor="password" > صندوق بريد :</label>
            <input className="form-control" type="password" name="password"
              onChange={(e) => setPostcode(e.target.value)}  />
          </div>
         
   
      </div>
    </div>
    <div className="footer">
      <Link to="./AdressInfo">
      <button type="button" className="btn" style={{fontSize:17}}>
        تحديث
      </button></Link>
    </div>
  </div>   
    )
}

export default UpdatePrintingShopInfo
