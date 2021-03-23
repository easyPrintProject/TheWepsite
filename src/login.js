import React from 'react'
import './register.css'
import { MDBBtn, MDBContainer, MDBTooltip, MDBIcon, MDBCol, MDBRow } from "mdb-react-ui-kit";
import {Link } from "react-router-dom";


function login() {
    return (
      <div>
          <h1 className='header'> تسجيل دخول مقدم خدمة</h1>
      <div className="content">
          <form>
              <MDBRow>
                  <MDBCol size="6"> <label>
                      رقم التواصل
        </label>
                      <input
                          type="number"
                          className="form-control"
                          required
                      />
                  </MDBCol>

                  <MDBCol size="6" > <label>
                      الاسم
        </label>
                      <input
                          type="text"
                          className="form-control"
                          required
                      /></MDBCol>
              </MDBRow>
              
        <div className="footer">
        <Link to="/dashboard">
          <button type="button" className="btn">
             تسجيل الدخول
          </button>
          </Link>
          </div>
</form>
</div>
</div>

    );
    }
export default login
