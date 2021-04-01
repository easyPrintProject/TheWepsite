import React, {useState, useEffect, useContext} from 'react'
import './register.css'
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import {Context} from "./components/Store"

function Login() {

  const history = useHistory();
  const [state, dispatch] = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({Email:"", UserName:"", PhoneNumber:"",  EmailConf:false, errorMassage:"", Id:"", Token:""});
  const[info, setInfo] = useState({Email:"omar@gmail.com", PasswordHash:"raghad221"});


   useEffect(() => {
     if (user == null || user.Email == ""  ) {
      dispatch({type: 'SET_USER', payload: null});
     } else {
        //  history.push("/PrintShopProfile");
        console.log("state");
        console.log(state);
        history.push("/PrintShopProfile");
     }
   }, [user]) //will only run when then app component loads
  
  const Login = async () => {
    axios.post("https://localhost:44399/api/PrintingShopLogin", {Email:email, PasswordHash:password})
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
        });
    }).catch(error => {
      console.log(error.response)
  });
  }

    return (
        <div>
        <div className="header">تسجيل دخول مقدم الخدمة</div>
        <div className="content">
          <div className="image">
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="CoName"> البريد الإلكتروني </label>
              <input className="form-control" type="text" name="Email" 
               onChange={(e) => setEmail(e.target.value)}/>
            </div>
           
            <div className="form-group">
              <label htmlFor="password"> كلمة السر </label>
              <input className="form-control" type="password" name="password"
                 onChange={(e) => setPassword(e.target.value)}/>
            </div>
        
          </div>
        </div>
        <div className="footer">
          
          <button type="button" className="btn" style={{fontSize: 17}} onClick={Login}>
             تسجيل الدخول
          </button>
        </div>
      </div>   
    )
    }
export default Login
