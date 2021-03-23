import React from 'react'
import './register.css'
function login() {
    return (
        <div>
        <div className="header">تسجيل دخول مقدم الخدمة</div>
        <div className="content">
          <div className="image">
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="CoName"> الاسم التجاري</label>
              <input type="text" name="CoName" />
            </div>
           
            <div className="form-group">
              <label htmlFor="password"> كلمة السر </label>
              <input type="password" name="password"
                onChange = {(event,newValue) => this.setState({password:newValue})}  />
            </div>
        
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
             تسجيل الدخول
          </button>
        </div>
      </div>   
    )
    }
export default login
