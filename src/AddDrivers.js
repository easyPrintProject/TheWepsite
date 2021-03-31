import React, { useState } from "react";
import './addDrivers.css';
import { Button, Modal } from 'react-bootstrap';

import {
  MDBIcon } from 'mdb-react-ui-kit';
  import { Link } from "react-router-dom";



function AddDrivers() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fullName, setFullName] = React.useState("");
  const [city, setCity ] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] =  React.useState("");
  const [phoneNumber, setPhoneNumber] =  React.useState("");
  const [commercialName, setCommercialName] =  React.useState("");
  const [user, setUser] =  React.useState({Email:"", UserName:"", PhoneNumber:"",  EmailConf:false, errorMassage:"", Id:"", Token:""});
  const [errorMassage, setErrorMassage] =  React.useState("");

    return (
        <div>   <div   className='p-5 text-center bg-image'
      style={{ backgroundImage: "url('https://image.freepik.com/vetores-gratis/homem-dirigindo-uma-motocicleta-sobre-um-mapa-de-gps-em-um-telefone-inteligente-servico-de-entrega_211621-33.jpg')", height: 400,width:500,marginRight:"37%"}}
     >
     
      </div>
      
       <h1 className="header"> أضافة سائق</h1>
         <h2 className="sub-header">خاص بشركات ومؤسسات الطباعة والنسخ والتصوير</h2>
  

    <div className="content">
 


      
      <div className="form">

        <div className="form-group">
          <label htmlFor="Name"> الاسم الكامل  </label>
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
      <button type="button" className="btn" onClick={handleShow}>
        التالي
      </button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>! تهانينا </Modal.Title>
        </Modal.Header>
        <Modal.Body>تمت عمليت التسجيل بنجاح, سيتم مراجعة معلوماتك وتفعيل حسابك خلال 24 ساعة </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            تم
          </Button>
        </Modal.Footer>
      </Modal>
      </div>  
      </div>  
    )
}


export default AddDrivers

