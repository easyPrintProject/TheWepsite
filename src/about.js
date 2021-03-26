import React from 'react'
import { Link } from "react-router-dom";
import './About.css';
import { MDBIcon } from 'mdb-react-ui-kit';
 import { footer, Modal,section } from 'react-bootstrap';

function About() {
    return (
  <div>
      
            <div className="base-container">
          <h1 className="h1"> مين ايزي برنت؟</h1>
     
          <div>
              <h2  className="h2"> 
              برنتلي هي منصة الكترونية مخصصة عشان تقدملك خدمات الطباعة بشتى أنواع الورق    </h2>
       <h2 className="h2-2"> وأحجامها، بأسعار منافسة 
           
              .و توفير خدمة التوصيل لين مكانك
              وُجدت برنتلي عشان تحل مشكلة الزحمة عند المكتبات، و ضياع الوقت في انتظار الطباعة، ومشكلة الحبر والأسعار العالية.
           </h2>
       
       
  </div>  
      
         <div className="icon">
          <button style={{backgroundColor:"#f9e190", marginRight:800,margin:-30, height:80,width:80}} type="button" class="btn btn  btn-lg btn-floating" >
    <MDBIcon className='ms-1 ' icon='check' size='lg' color="white"   />
    </button>

          </div>
          <div>
<h2 className="h2-3">
جودة عالية</h2>
<h4 className="h4">اهتمامنا في طباعة الملفات بجودة عالية وذلك بإستخدام أفضل الطابعات والأدوات المكتبية.</h4>
      </div>  
         

    <div className="icon2">
          <button style={{backgroundColor:"#f9e190", marginRight:100,margin:-30, height:80,width:80}} type="button" class="btn btn  btn-lg btn-floating" >
    <MDBIcon className='ms-1 ' icon='check' size='lg' color="white"   />
    </button>
    </div> 
    <div>
<h2 className="h2-4">
سعر منافس
</h2>
<h4 className="h4-2">نحرص على أن نتميز بسعر منافس يناسب جميع الفئات من الطلاب والشركات والجهات الآخرى</h4>
      </div>   




    <div className="icon3">
          <button style={{backgroundColor:"#f9e190", marginRight:800,margin:-30,height:80,width:80}} type="button" class="btn btn  btn-lg btn-floating" >
    <MDBIcon className='ms-1 ' icon='check' size='lg' color="white"   />
    </button>
    </div>
    <div>
<h2 className="h2-5">
خدمتكم
</h2>
<h4 className="h4-3">نحرص على خدمتكم واستلام طلباتكم طوال الوقت من خلال موقعنا الإلكتروني</h4>
      </div>  
      </div>
    

        </div>


     
       
    )
}

export default About
