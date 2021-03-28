import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return ( <div className="base-container">   
  <div className="main-footer">
    
  
        <div className="row">
       
          <div className="col">
            
            <h2 className="list-unstyled" style={{marginRight:20,marginTop:33}}>
            <Link to="./About" style={{ color: '#FFF' }}>
            <h4>مين ايزي برنت؟</h4>
            </Link>
    
            </h2>
          </div>
      
          {/* Column3 */}
          <div className="col" style={{marginRight:20,marginTop:33}}>
                <ui className="list-unstyled">
              <Link to="./Branchprinter" style={{ color: '#FFF' }}> 
              <li style={{fontSize:23,marginTop:-10}}>أفرع برنتلي</li>
           </Link>
           </ui>
           
            <ui style={{ color: '#FFF',fontSize:20 }}> 
              
منصة الطباعة السهلة الإلكترونية
طالبات جامهة طيبة - قسم نظم معلومات
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p>
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;