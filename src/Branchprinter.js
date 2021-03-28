import React from 'react'
import { Link } from "react-router-dom";


function Branchprinter() {
    return (
        <div className="base-container" >
                 <div
      className='p-5 text-center bg-image'
      style={{ backgroundImage: "url('https://image.freepik.com/free-vector/delivery-man-with-face-mask-delivering-order-motorcycle_154993-160.jpg')", height: 400,width:400,justifyItems:'center' }}>
       </div> 
            <div className="header">

          <h1 style={{marginTop:11}}>أفرع الإستلام</h1>
     
         
              <h2 style={{marginTop:"10%"}} > 
              الطباعة السهلة توفر طريقتان لتسهل عليكم إستلام مطبوعاتكم بما يرضيكم وذلك عن طريق إما بتوصيل ملفاتكم لموقع التوصيل المناسب لكم والذي يتم تحديده خلال مرحلة الطلب، أو عن طريق الإستلام من أحد أفرع الإستلام والتي يتوجب عليكم إختيار أحداً منها خلال مرحلة الطلب
              </h2>
    
           

             
              <h2    style={{marginTop:"4%"}}> 
              الطباعة السهلة  توفر طريقتان لتسهل عليكم إستلام مطبوعاتكم بما يرضيكم وذلك عن طريق إما بتوصيل ملفاتكم لموقع التوصيل المناسب لكم والذي يتم تحديده خلال مرحلة الطلب، أو عن طريق الإستلام من أحد أفرع الإستلام والتي يتوجب عليكم إختيار أحداً منها خلال مرحلة الطلب
              </h2>
       </div> 
       <div style={{marginTop:"4%"}}>
       <table class="table">
  <thead style={{fontSize:20}}>
    <tr >
      <th scope="col" >المدينه  </th>
      <th scope="col">مواعيد العمل</th>

    </tr>
    <tr>
      <th scope="col"> المدينة المنوره  </th>
      <th scope="col"> من الساعة 4 مساءً حتى الساعة 11 مساءً </th>

    </tr>
  </thead>
  </table>
 
       </div>
       
              </div> 
           
    
    )
}

export default Branchprinter
