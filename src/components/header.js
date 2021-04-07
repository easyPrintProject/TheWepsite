import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBContainer,
    MDBNavbarToggler,
    MDBBtn,
    MDBNavbarBrand,
    MDBIcon } from 'mdb-react-ui-kit';

function header() {

 
  return (
    <MDBNavbar expand='lg' light bgColor='white' sticky>
      <MDBContainer fluid>
        <MDBNavbarToggler
          aria-controls='navbarExample01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <MDBIcon fas icon='bars' />
        </MDBNavbarToggler>
        <div className='collapse navbar-collapse' id='navbarExample01'>
          <MDBNavbarNav right  className='mb-2 mb-lg-0'>
            <MDBNavbarItem >
            <Link to="./home" style={{fontFamily: 'Tajawal' , fontWeight: 'bolder'}}>
              <MDBNavbarLink aria-current='page' >
                الصفحة الرئيسية
              </MDBNavbarLink></Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <Link to="./Login" style={{fontFamily: 'Tajawal'}}>
              <MDBNavbarLink >تسجيل الدخول</MDBNavbarLink></Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <Link to="./features" style={{fontFamily: 'Tajawal'}}>
              <MDBNavbarLink >المميزات</MDBNavbarLink></Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <Link to="./Pricing" style={{fontFamily: 'Tajawal'}}>
              <MDBNavbarLink >الأسعار</MDBNavbarLink></Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <Link to="./About" style={{fontFamily: 'Tajawal'}}>
              <MDBNavbarLink >المزيد عنا</MDBNavbarLink></Link>
            </MDBNavbarItem>

          </MDBNavbarNav>
        
            
          <MDBNavbarBrand href='home'>
            <img
              src='https://j.top4top.io/p_191710ex01.jpeg'
              height='45'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
        </div>
      </MDBContainer>
    </MDBNavbar>

  
  );
}

export default header;