import React from 'react'
import './register.css'
import { MDBBtn, MDBContainer, MDBTooltip, MDBIcon, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
import {Link } from "react-router-dom";


function address() {


    return (


        <div >
             <div >
 <MDBProgress className='step'>
        <MDBProgressBar striped animated width='100' valuemin={0} valuemax={100} />
      </MDBProgress>
         </div>
            <div>
                <h1 className='header'> عنوان المكتبة</h1>
             
            <div className="content">
                <form 
                >

                    <div >
                    <MDBRow>
                        <MDBCol size="6"> <label>
المدينة              </label>
                            <input
                                type="text"
                                className="form-control"
                                required
                            />
                        </MDBCol>

                        <MDBCol size="6" > <label>
الدولة              </label>
                            <input
                                type="text"
                                className="form-control"
                                required
                            /></MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="6"> <label>
الشارع           </label>
                            <input
                                type="email"
                                className="form-control"
                                required
                            />
                        </MDBCol>

                        <MDBCol size="6"> <label>
الحي              </label>
                            <input
                                type="text"
                                className="form-control"
                                required
                            /></MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol size="6"> <label>
الرمز البريدي              </label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                //onChange = {(event,newValue) => this.setState({password:newValue})}  
                            />
                        </MDBCol>

                        <MDBCol size="6"> <label>
العنوان              </label>
                            <input
                                type="text"
                                className="form-control"
                                required
                            /></MDBCol>
                    </MDBRow></div>
                    <div className="footer">
                    <Link to="/isCourses">
      <button type="button" className="btn" color="black">
المتابعة      </button></Link>
    </div>


                </form>
            </div>
        </div>
        </div>
    );

}
export default address;