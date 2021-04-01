import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return ( 
  <div className="main-footer">
    
  <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
          <Link to="./About" style={{ color: '#FFF',fontFamily:'Tajawal' }}>
            <h5 className="title" style={{fontSize:18}}>من نحن</h5>
            </Link>
            <Link to="./Branchprinter" style={{ color: '#FFF', fontFamily:'Tajawal' }}> 
              <h5 className="title " style={{fontSize:17}}>مزودي الخدمة لدينا</h5>
           </Link>
            <Link to="./register" style={{ color: '#FFF',fontFamily:'Tajawal' }}>
            <h5 className="title" style={{fontSize:17}}>
              التسجيل كمزود خدمة</h5>
            </Link>

          
          </MDBCol>
          <div className="col" style={{marginRight:20, marginTop: 4}}>
              
           
            <h5 style={{ color: '#FFF',fontSize:17 , fontFamily:'Tajawal', }}> 
              
منصة ايزي برنت الإلكترونية
            </h5>
            <h5 style={{ color: '#FFF',fontSize:17 , fontFamily:'Tajawal',}}>تطوير طالبات جامعة طيبة
</h5>
<h5 style={{ color: '#FFF',fontSize:17 , fontFamily:'Tajawal',}}>قسم نظم معلومات
</h5>

          </div>

        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3" style={{ color: '#FFF'}}>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="home"  style={{ color: 'black'}}> EasyPrint.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default Footer;