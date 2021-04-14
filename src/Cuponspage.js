import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';
import {MDBIcon } from 'mdb-react-ui-kit';
import axios from 'axios';
import {  useHistory } from "react-router-dom";



 function Cuponspage() {
  const history = useHistory();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [email, setEmail] = React.useState("");
    const [copon, setCopon] =  React.useState("");

    
  const Addcopon = async () => {
    axios.post("https://apieasyprint20210215153907.azurewebsites.net/api/PromotionCode/",
     {privatePromotionCodeString:copon ,CustomerId:"FD1C7247-77C6-4E41-9CE9-D57F5E021F19",  printingShopId:"a40756b0-a9a9-4079-8495-d44e45b05f5b" })
    .then(response => {
      console.log(response)
      history.push("/PrintShopProfile")
      }).catch(error => {
        console.log(error.response)
    });
  }
  
  return (  <div className="form">

  
    <h1> اضافة كوبون جديد</h1>
  
    <div style={{ backgroundImage: "url(/tag.png)" ,width:500,height:500}}>

   </div>
    <h1 htmlFor="Email" >نص كوبون التخفيض </h1>
    <input type="text" name="Name" style={{marginTop:50,width:87,height:50}} onChange={(e) => setCopon(e.target.value)}/>

    <h1 htmlFor="Email" >البريد الإلكتروني</h1>
    <input type="email" name="Eamil" onChange={(e) => setEmail(e.target.value)}/>
  
   <div className="footer">
      <button type="button" className="btn" onClick={Addcopon}>
        تم
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> تهانينا </Modal.Title>
        </Modal.Header>
        <Modal.Body>تمت أضافة الكوبون </Modal.Body>
        <Modal.Footer>
         <Link to="/PrintShopProfile"> <Button variant="success" onClick={handleClose}>
            تم
          </Button></Link> 
        </Modal.Footer>
      </Modal>
         </div>
         </div>
  );
}
export default Cuponspage