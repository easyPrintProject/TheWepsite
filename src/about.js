import React from 'react'
import { Link } from "react-router-dom";
import './About.css';
import { MDBIcon } from 'mdb-react-ui-kit';
 import { footer, Modal,section } from 'react-bootstrap';

function About() {
    return (
  <div>
   <div className="base-container">
   <div
      className='p-5 text-center bg-image'
      style={{ backgroundColor:"#ebebeb", width:"100%",height: 600 }}
    >
          <h1 className="h1"> مين ايزي برنت؟</h1>
     
        
              <h2  className="h2-2"> 
              ايزي برنت هي منصة الكترونية مخصصة عشان تقدملك خدمات الطباعة بشتى أنواع الورق    
     وأحجامها، بأسعار منافسة وتوفير خدمة التوصيل لين مكانك ونحل جميع المشاكل اللي ممكن تواجهكم مثل الزحمة عند المكتبات وضياع الوقت ومشاكل الحبر والأسعار العالية
           </h2>
         
       

</div>
           <div
      className='p-5 text-center bg-image'
      style={{ backgroundImage: "url('https://k.top4top.io/p_1917xmmai1.png')", height: 500 ,width:500,marginLeft:822,marginTop:200}}
    ></div>
      









         <div className="contanet">
      
         <div className="icon">
              
          <button style={{backgroundColor:"#717d67", height:80,width:80}} type="button" class="btn btn  btn-lg btn-floating" >
    <MDBIcon className='ms-1 ' icon='check' size='lg' color="white"   />
    </button>

          
        <div className="texticon">
<h2 >جودة عالية</h2></div>
<div>
<h4 className="texticon0">نهتم في طباعة الملفات بجودة عالية وذلك بإستخدام أفضل الطابعات والأدوات المكتبية.</h4>
</div>  </div>  
 








<div>
    <div className="icon1">
          <button style={{backgroundColor:"#717d67",  height:80,width:80}} type="button" class="btn btn  btn-lg btn-floating" >
    <MDBIcon className='ms-1 ' icon='check' size='lg' color="white"   />
    </button>
    

    <div className="texticon1">
<h2 >سعر منافس</h2>
</div>
<div>
<h4 className="texticon1-0"> نتميز بسعر منافس يناسب جميع الفئات من الطلاب والشركات والجهات الآخرى</h4>
      </div>  </div>  









    <div className="icon2">
          <button style={{backgroundColor:"#717d67", height:80,width:80}} type="button" class="btn btn  btn-lg btn-floating" >
    <MDBIcon className='ms-1 ' icon='check' size='lg' color="white"   />
    </button>
   
    <div className="texticon2">
<h2 >
خدمتكم
</h2> 
</div>
<div>
<h4 className="texticon2-0">نحرص على خدمتكم واستلام طلباتكم طوال الوقت من خلال موقعنا الإلكتروني</h4>
      </div>   </div>
      </div> 
      </div> 
      </div>
      </div>


     
       
    )
}

export default About
