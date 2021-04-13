import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';
import {MDBIcon } from 'mdb-react-ui-kit';


 function Cuponspage() {
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
  
  return (  <div className="form">

  
    <h1> اضافة كوبون جديد</h1>
  
    <div style={{ backgroundImage: "url(/tag.png)" ,width:500,height:500}}>

</div>
    <input type="text" name="Name" style={{marginTop:50,width:87,height:50}} />
 

    <h1 htmlFor="Phone" > رقم جوال العميل</h1>
    <input type="text" name="Phone"  />


    <h1 htmlFor="Email" >البريد الإلكتروني</h1>
    <input type="email" name="Eamil" />
  
  
{/* 12 */}
<div className="footer">
      <button type="button" className="btn" onClick={handleShow}>
        أرسل
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> تهانينا </Modal.Title>
        </Modal.Header>
        <Modal.Body>تمت أضافة الكوبون </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            تم
          </Button>
        </Modal.Footer>
      </Modal>
         </div>
         </div>
  );
}
export default Cuponspage