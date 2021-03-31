import React, {useState, useEffect} from 'react'
import {
     MDBBtn, 
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import './PrintShopProfile.css'
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiFeather from "react-icons/fi"

import Home from "./HomeAdmin"


const Data = [

    
    {
 
      title: ' طلب انظمام',
      path:"/JoinRequestAdmin",
      icon: <FiFeather.FiPlus />,
      cName: 'nav-text'
    },
    {
        title: 'الأعطال',
        path: '/Proplem',
        icon: <FiFeather.FiEdit />,
        cName: 'nav-text'
      },
    // {
    //   title: 'حذف منتج',
    //   path: '/deleteProduct',
    //   icon: <FiFeather.FiXCircle />,
    //   cName: 'nav-text'
    // },
    // {
    //   title: 'اضافة مندوب',
    //   path: '/addDrivers',
    //  icon: <FiFeather.FiUserPlus />,
    //   cName: 'nav-text'
    // },
    // {
    //   title: 'اضافة كوبون',
    //   path: '/addCoupons',
    //   icon: <FiFeather.FiPercent />,
    //   cName: 'nav-text'
    // },
    // {
    //   title: 'تعديل بيانات المكتبة ',
    //   path: '/modifyPrintShopInfo',
    //   icon: <FiFeather.FiSettings />,
    //   cName: 'nav-text'
    // }
  ];



function Dachboard() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);


  return (
    <div>
    <IconContext.Provider value={{ color: '#fff' }}>
            <div >
              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </div>
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
         

    
            </div>
        )
    }
 
    export default Dachboard
