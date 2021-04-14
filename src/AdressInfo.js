import React, { useState,useContext } from "react";
import {MDBIcon } from 'mdb-react-ui-kit';
  import { Button, Modal } from 'react-bootstrap';
  import {  useHistory } from "react-router-dom";
  import axios from 'axios';
  import {Context} from "./components/Store"
  
  
  import './adressInfo.css';

function AdressInfo() {
  const api = axios.create({
    baseURL: 'https://apieasyprint20210215153907.azurewebsites.net/api/PrintingShopRigester',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
    },
});

const history = useHistory();
  //form states 
  const [city, setCity] = React.useState("");
  const [country, setCountry] =  React.useState("");
  const [neighborhood, setNeighborhood] =  React.useState("");
  const [street, setStreet] =  React.useState("");
  const [adressLine, setAdressLine] =  React.useState();
  const [postcode, setPostcode] =  React.useState("");
  const [Address, setAddress] =  React.useState();

  //modat states 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//const [ownerId] = useState(state.Id);
const [state, dispatch] = useContext(Context);
 


  const AdressInfo = async () => {
    axios.post("https://apieasyprint20210215153907.azurewebsites.net/api/Address/", {
      userId:state.user.data.id,
      city:city, 
      neighborhood:neighborhood,
      street:street,
      adressLine:adressLine,
      postcode:postcode,
      country:country})
    .then(response => {
       if (response==true){
        alert("تم التسجيل") 
       }
      }).catch(error => {
        console.log(error.response)
    });

  }

 

      return (
            <div>
      <div className="header">      الانضمام كمقدم خدمة  </div>
      <h2 className="sub-header">خاص بشركات ومؤسسات الطباعة والنسخ والتصوير</h2>
      <h5 className="sub-header2">عنوان المطبعة</h5>
  
      <div className="content">
      <div className="steps-bar" >
      
      <button style={{backgroundColor:"green", marginRight:10, marginLeft:10}} type="button" class="btn btn  btn-lg btn-floating" disabled>
      <MDBIcon className='ms-1 ' icon='check' size='lg' color="white" />
      </button>
      <MDBIcon className='ms-1 ' icon='arrow-left' size='lg' color="gray" />
  
      <button style={{backgroundColor:"green", marginRight:10, marginLeft:10}} type="button" class="btn btn  btn-lg btn-floating" disabled>
      <MDBIcon className='ms-1 ' icon='check' size='lg' color="white" />
      </button>
      <MDBIcon className='ms-1 ' icon='arrow-left' size='lg' color="gray" />
  
      <button style={{backgroundColor:"grey", marginRight:10, marginLeft:10}} type="button" class="btn btn  btn-lg btn-floating" disabled>
      <MDBIcon className='ms-1 ' icon='check' size='lg' color="white" />
      </button>
  
      </div>
        <div className="image">
        </div>
        <div className="form">
  
          <div className="form-group">
            <label htmlFor="Name">  الدولة </label>
            <input className="form-control" type="text" name="Name" onChange={(e) => setCountry(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="Phone"  > المدينة </label>
            <input className="form-control" type="text" name="Phone"  onChange={(e) => setCity(e.target.value)}  />
          </div>
          <div className="form-group">
            <label htmlFor="Phone"  >  الحي </label>
            <input className="form-control" type="text" name="Phone"  onChange={(e) => setNeighborhood(e.target.value)}  />
          </div>
          <div className="form-group">
            <label htmlFor="Email" > الشارع </label>
            <input className="form-control" type="text" name="Eamil"  onChange={(e) => setStreet(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="City" >  وصف لمعلم قريب  </label>
            <input className="form-control" type="text" name="City" onChange={(e) => setAdressLine(e.target.value)} />
          </div> 
          <div className="form-group">
            <label htmlFor="password" > صندوق بريد </label>
            <input  className="form-control" type="text" name="password"
              onChange={(e) => setPostcode(e.target.value)}  />
          </div>
        </div>
      </div>
      <div className="footer">
      <button type="button" className="btn" style={{marginBottom:99, fontSize:15}} onClick={AdressInfo ,handleShow}>
        التالي
      </button>

      <Modal show={show} onHide={handleClose} className='test'>
        <Modal.Header closeButton>
          <Modal.Title> تهانينا! </Modal.Title>
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
