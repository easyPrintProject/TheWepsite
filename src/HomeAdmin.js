import React, {useState, useEffect, useContext} from 'react'
import {  MDBNavbarBrand } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import {Context} from "./components/Store"


import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiFeather from "react-icons/fi"
import ProductActions from "./ProductActions"
import OrderActionc from "./OrderActionc"


const Data = [

    
  {

    title: 'قبول /رفض المكتبات ',
    path: '/JoinRequestAdmin',
    icon: <FiFeather.FiPlus />,
    cName: 'nav-text'
  },

 
  {
    title: 'صفحة الأعطال  ',
    path: '/Proplem',
    icon: <FiFeather.FiSettings />,
    cName: 'nav-text'
  }
];


function HomeAdmin() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [state, dispatch] = useContext(Context);



    return (
      <div>
      <IconContext.Provider value={{ color: '#fff' }}>
              <div >
             
                <Link to='#' className='menu-bars'>
                  <FaIcons.FaBars onClick={showSidebar} />
                </Link>
              </div> <MDBNavbarBrand style={{marginRight:"30%"}}>
            <img
              src='https://j.top4top.io/p_191710ex01.jpeg'
              height='235'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
          
              <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                  <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                    </Link>
                  </li>
                  {Data.map((item, index) => {
                    return (
                      <li key={index} className={item.cName}>
                        <Link to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </IconContext.Provider>
              
                 
                  <div   style={{marginRight:"23%",marginTop:"1%"}}>
               
      
                  </div>
                  
      
              </div>
          )
      }
      
  

export default HomeAdmin
