import React, { useState } from "react";
import {MDBIcon } from 'mdb-react-ui-kit';
  import { Link } from "react-router-dom";
  import { Button, Modal } from 'react-bootstrap';

  import './adressInfo.css';

function AdressInfo() {
   //form states 
    const [city, setCity] = React.useState("");
    const [country, setCountry] =  React.useState("");
    const [neighborhood, setNeighborhood] =  React.useState("");
    const [street, setStreet] =  React.useState("");
    const [adressLine, setAdressLine] =  React.useState();
    const [postcode, setPostcode] =  React.useState("");

    //modat states 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

      return (
            <div>
      <div className="header">الانضمام كمقدم خدمة</div>
      <h2 className="sub-header">خاص بشركات ومؤسسات الطباعة والنسخ والتصوير</h2>
      <h5 className="sub-header2">عنوان المطبعة</h5>
  
      <div className="content">
      <div className="steps-bar" >
      
      <button style={{backgroundColor:"gray", marginRight:10, marginLeft:10}} type="button" class="btn btn  btn-lg btn-floating" disabled>
      <MDBIcon className='ms-1 ' icon='check' size='lg' color="white" />
      </button>
      <MDBIcon className='ms-1 ' icon='arrow-left' size='lg' color="gray" />
  
      <button style={{backgroundColor:"green", marginRight:10, marginLeft:10}} type="button" class="btn btn  btn-lg btn-floating" disabled>
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
            <label htmlFor="Name"> : الدولة </label>
            <input type="text" name="Name" onChange={(e) => setCountry(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="Phone"  >: المدينة</label>
            <input type="text" name="Phone"  onChange={(e) => setCity(e.target.value)}  />
          </div>
          <div className="form-group">
            <label htmlFor="Phone"  >:  الحي</label>
            <input type="text" name="Phone"  onChange={(e) => setNeighborhood(e.target.value)}  />
          </div>
          <div className="form-group">
            <label htmlFor="Email" >: الشارع</label>
            <input type="email" name="Eamil"  onChange={(e) => setStreet(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="City" > : وصف لمعلم قريب</label>
            <input type="text" name="City" onChange={(e) => setAdressLine(e.target.value)} />
          </div> 
          <div className="form-group">
            <label htmlFor="password" >: صندوق بريد</label>
            <input type="password" name="password"
              onChange={(e) => setPostcode(e.target.value)}  />
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

export default AdressInfo
