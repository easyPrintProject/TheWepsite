import React, {useState, useEffect} from 'react'
import './register.css'
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./components/stateProvidor";

function Login() {

  const history = useHistory();
  // const [{ }, dispatch] = useStateValue("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({Email:"", FullName:"", PhoneNumber:"",  EmailConf:false, errorMassage:"", Id:"", Token:""});


  // useEffect(() => {
        
  //   if (user == null || user == ""  ) {
  //       dispatch({
  //           type: 'SET_USER',
  //           user: null
  //       })
  //   } else {
  //       console.log(user);
  //       history.push("/");
  //   }
  // }, [user]) //will only run when then app component loads
  
  const Login = async () => {
    try {
      fetch('https://localhost:44399/api/PrintingShopLogin', {
       method: 'POST',
       headers: {
       Accept: 'application/json',
        'Content-Type': 'application/json'
            },
      body: JSON.stringify({
       Email:"Ahmed@gmail.com",
       PasswordHash: "raghad221"
       })
     }).then((response) => response.json())
     .then((response) => {
       console.log(response.data);
     setUser({
      Email: response.data.email,
      PhoneNumber: response.data.phoneNumber,
      FullName:response.data.fullName, 
      EmailConf:response.data.emailConfiremd,
      errorMassage:response.data.errorMessage,
      Id:response.data.id,
      Token:response.data.token,
              });
     })
     .catch((error) => {
      console.error(error);
    });
     
    } catch (error) {
      console.log('حدث خطأ! ', error)
    }
    history.push("./EditPrintingServices")
  }

    return (
        <div>
        <div className="header">تسجيل دخول مقدم الخدمة</div>
        <div className="content">
          <div className="image">
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="CoName">: الأيميل </label>
              <input type="text" name="Email" 
               onChange={(e) => setEmail(e.target.value)}/>
            </div>
           
            <div className="form-group">
              <label htmlFor="password">: كلمة السر </label>
              <input type="password" name="password"
                 onChange={(e) => setPassword(e.target.value)}/>
            </div>
        
          </div>
        </div>
        <div className="footer">
          
          <button type="button" className="btn" onClick={Login}>
             تسجيل الدخول
          </button>
        </div>
      </div>   
    )
    }
export default Login
