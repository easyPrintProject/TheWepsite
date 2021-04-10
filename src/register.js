import React, { useState } from "react";
import './register.css';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import {Context} from "./components/Store"


import {
  MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";



function Register() {
  const api = axios.create({
    baseURL: 'https://apieasyprint20210215153907.azurewebsites.net/api/PrintingShopRigester',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
    },
});

const history = useHistory();
const [state, dispatch] = useContext(Context);
  const [fullName, setFullName] = useState("");
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [commercialName, setCommercialName] = useState("");
  const [user, setUser] = useState({ Email: "", FullName: "", PhoneNumber: "", EmailConf: false, errorMassage: "", Id: "", Token: "" });
  const [errorMassage, setErrorMassage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  const [isValid2, setIsValid2] = useState(false);
  const [message2, setMessage2] = useState('');
  const [isValid3, setIsValid3] = useState(false);
  const [message3, setMessage3] = useState('');

  const emailPattren = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailPattren.test(email)) {
      setIsValid(true);
      setMessage('');

    } else {
      setIsValid(false);
      setMessage('الرجاء كتابة بريد إلكتروني صحيح');
    }
  };


  const phonePattren = /^((?:[+?0?0?966]+)(?:\s?\d{2})(?:\s?\d{7}))$/;

  const phoneValid = (event) => {
    const phoneNumber = event.target.value;
    if (phonePattren.test(phoneNumber)) {
      setIsValid2(true);
      setMessage2('');

    } else {
      setIsValid2(false);
      setMessage2('الرجاء كتابة الرقم بشكل صحيح')
    }
  }


  const PassConfirmation = (event) => {
    const ConfirmPassword = event.target.value;

    if (password == ConfirmPassword) {
      setIsValid3(true);
  setMessage3('');

} else {
  setIsValid3(false);
  setMessage3("كلمة السر لاتتطابق");

}


  }

  const Register = async () => {
    axios.post("https://apieasyprint20210215153907.azurewebsites.net/api/PrintingShopRigester", {Email:email, PasswordHash:password,FullName:fullName,PhoneNumber:phoneNumber})
    .then(response => {
      dispatch({type: 'SET_USER', payload: response.data});
      setUser({
        Email: response.data.email,
        PhoneNumber: response.data.phoneNumber,
        UserName:response.data.userName, 
        EmailConf:response.data.emailConfiremd,
        errorMassage:response.data.errorMessage,
        Id:response.data.id,
        Token:response.data.token,
      })
      history.push("./PrintingShopInfo")
       if (response==true){
        alert("اضغط التالي لاكمال التسجيل") 
       }
      }).catch(error => {
        console.log(error.response)
    });

  }


  return (
    <div style={{ marginBottom: 111 }}>
      <div className="header">التسجيل كمزود خدمة</div>
      <h2 className="sub-header">خاص بشركات ومؤسسات الطباعة والنسخ والتصوير</h2>
      <h5 className="sub-header2">معلومات مالك المطبعة</h5>

      <div className="content">
        <div className="steps-bar" >
          <button style={{ backgroundColor: "gray", marginRight: 10, marginLeft: 10 }} type="button" class="btn btn  btn-lg btn-floating" disabled>
            <MDBIcon className='ms-1 ' icon='check' size='lg' color="white" />
          </button>
          <MDBIcon className='ms-1 ' icon='arrow-left' size='lg' color="gray" />

          <button style={{ backgroundColor: "gray", marginRight: 10, marginLeft: 10 }} type="button" class="btn btn  btn-lg btn-floating" disabled>
            <MDBIcon className='ms-1 ' icon='check' size='lg' color="white" />
          </button>
          <MDBIcon className='ms-1 ' icon='arrow-left' size='lg' color="gray" />

          <button style={{ backgroundColor: "gray", marginRغight: 10, marginLeft: 10 }} type="button" class="btn btn  btn-lg btn-floating" disabled>
            <MDBIcon className='ms-1 ' icon='check' size='lg' color="white" />
          </button>



        </div>
        <div className="image">
        </div>
        <div className="form">

          <div className="form-group">
            <label htmlFor="Name"> الاسم الكامل لمالك المطبعة</label>
            <input className="form-control" type="text" name="Name" onChange={(e) => setFullName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="Phone" >رقم الجوال</label>
            <input className="form-control" type="text" name="Phone"
              onInput={(e) => setPhoneNumber(e.target.value)}
              onChange={phoneValid}
            />

            <div className={`message ${isValid2 ? 'success' : 'error'}`}>
              {message2}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Email" >البريد الإلكتروني</label>
            <input className="form-control" type="email" name="Eamil"
              onInput={(e) => setEmail(e.target.value)}
              onChange={validateEmail}
            />
            <div className={`message ${isValid ? 'success' : 'error'}`}>
              {message}
            </div>
          </div>
          {/* <div className="form-group">
          <label htmlFor="CoName"> الاسم التجاري</label>
          <input type="text" name="CoName" onChange={(e) => setCommercialName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="City" > المدينة</label>
          <input type="text" name="City" onChange={(e) => setCity(e.target.value)} />
        </div> */}
          <div className="form-group">
            <label htmlFor="password" > كلمة السر </label>
            <input className="form-control" type="password" name="password"
              // onChange = {(event,newValue) => this.setState({password:newValue})}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password"> تأكيد كلمة السر </label>
            <input className="form-control" type="password" name="password"
              onInput={(e) => setConfirmPassword(e.target.value)}
              onChange={PassConfirmation }
            />
            <div className={`message ${isValid3 ? 'success' : 'error'}`}>
              {message3}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Link to="./PrintingShopInfo">
          <button type="button" className="btn"  style={{ fontSize: 17 }}onClick={Register}>
            التالي
      </button></Link>
      </div>
    </div>
  )
}


export default Register
