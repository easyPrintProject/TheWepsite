import React from 'react'
import { Link } from "react-router-dom";


function Branchprinter() {
    return (
        <div className="base-container" >
                 <div
      className='p-5 text-center bg-image'
      style={{ backgroundImage: "url('https://c.top4top.io/p_1917g06141.png')", height: 400,width:400,justifyItems:'center' }}>
       </div> 
            <div className="header">

          <h1 style={{marginTop:-10}}> مواعيد العمل</h1>
     
    
           

       </div> 
       <div style={{marginTop:"4%"}}>
       <table class="table">
  <thead style={{fontSize:20}}>
    <tr >
      <th scope="col" style={{ fontFamily: 'Tajawal' }} >اسم المكتبة  </th>
      <th scope="col" style={{ fontFamily: 'Tajawal' }}>مواعيد العمل</th>

    </tr>
    <tr>
      <th scope="col" style={{ fontFamily: 'Tajawal' }} > المعالي  </th>
      <th scope="col" style={{ fontFamily: 'Tajawal' }}> من الساعة 4 مساءً حتى الساعة 11 مساءً </th>

    </tr>
  </thead>
  </table>
 
       </div>
       
              </div> 
           
    
    )
}

export default Branchprinter
