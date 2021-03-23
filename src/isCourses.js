import React from 'react'
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
import { MDBBtn, MDBContainer, MDBTooltip, MDBIcon, MDBCol, MDBRow } from "mdb-react-ui-kit";
import './register.css'
import { MDBCheckbox } from 'mdb-react-ui-kit';
import {Link } from "react-router-dom";


function isCourses() {

    //handleCheckBox = (checked) => {
      //  if(checked){


        //}
        //else{

            
        //}
     //}
    return (
        <div>
             <div >
 <MDBProgress className='step'>
        <MDBProgressBar striped animated width='66' valuemin={0} valuemax={100} />
      </MDBProgress>
         </div>

         <h4 className='header2'>هل توفر المكتبة ملازم دراسية؟</h4>

<div className='checkbox' >  
         <MDBCheckbox name='inlineCheck' id='inlineCheckbox1' value='option1' label='نعم' inline />
         <MDBCheckbox name='inlineCheck' id='inlineCheckbox2' value='option2' label='لا' inline />
</div> 


<h4 className='header2'>هل توفر المكتبة خدمة الطباعة؟</h4>

<div className='checkbox' >  
         <MDBCheckbox name='inlineCheck' id='inlineCheckbox1' value='option1' label='نعم' inline />
         <MDBCheckbox name='inlineCheck' id='inlineCheckbox2' value='option2' label='لا' inline />
</div> 

          <div className="footer">
          <Link to="/address">
      <button type="button" className="btn" color="black">
المتابعة       </button></Link>
    </div>
        </div>
    )
}

export default isCourses
