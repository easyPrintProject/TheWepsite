import React, { useState } from "react";
import './addDrivers.css';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import {Context} from "./components/Store"

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


  const Register = async () => {
    axios.post("https://apieasyprint20210215153907.azurewebsites.net/api/DriverRegister",
     {Email:email,FullName:fullName, PasswordHash:password,PhoneNumber:phoneNumber, PrintrtId:"a40756b0-a9a9-4079-8495-d44e45b05f5b" })
    .then(response => {
      console.log(response)
      }).catch(error => {
        console.log(error.response)
    });
  }




    return (
        <div>   <div   className='p-5 text-center bg-image'
      style={{ backgroundImage: "url('https://image.freepik.com/vetores-gratis/homem-dirigindo-uma-motocicleta-sobre-um-mapa-de-gps-em-um-telefone-inteligente-servico-de-entrega_211621-33.jpg')", height: 400,width:500,marginRight:"33%"}}
     >
      </div>
       <h1 className="header"> إضافة سائق</h1>
       <h2 className="sub-header">  سيتم ربط السائق تلقائيا بجميع طلبات المكتبة  </h2>
     <div className="content">
 
      <div className="form">
        <div className="form-group">
          <label htmlFor="Name"> الاسم الكامل  </label>
          <input className="form-control" type="text" name="Name" onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="Phone" >رقم الجوال</label>
          <input className="form-control" type="text" name="Phone"  onChange={(e) => setPhoneNumber(e.target.value)}  />
        </div>
        <div className="form-group">
          <label htmlFor="Email" >البريد الإلكتروني</label>
          <input className="form-control" type="email" name="Eamil"  onChange={(e) => setEmail(e.target.value)}/>
        </div>
       
        <div className="form-group">
          <label htmlFor="password" > كلمة السر </label>
          <input className="form-control" type="password" name="password"
            // onChange = {(event,newValue) => this.setState({password:newValue})}
            onChange={(e) => setPassword(e.target.value)}  />
        </div>
        <div className="form-group">
          <label htmlFor="password"> تأكيد كلمة السر </label>
          <input className="form-control" type="password" name="password" />
        </div>
      </div>
    </div>
    <div className="footer">
      <button type="button" className="btn" style={{fontSize:17}} onClick={handleShow, Register}>
        تسجيل
      </button>
    <Modal show={show} onHide={handleClose}  className='test'> 
        <Modal.Header closeButton>
          <Modal.Title>تهانينا! </Modal.Title>
        </Modal.Header>
        <Modal.Body> تمت اضافة السائق بنجاح   </Modal.Body>
        <Modal.Footer>
          <Link to="/PrintShopProfile"><Button variant="success" onClick={handleClose}>
            تم
          </Button></Link>
        </Modal.Footer>
      </Modal>
      </div>  
      </div>  
    )
}


export default AddDrivers

