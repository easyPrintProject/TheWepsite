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
            <Link to="/">
              <MDBNavbarLink aria-current='page' >
                الصفحة الرئيسية
              </MDBNavbarLink></Link>
            </MDBNavbarItem>

            <MDBNavbarItem>
            <Link to="./features">
              <MDBNavbarLink >المميزات</MDBNavbarLink></Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <Link to="./Pricing">
              <MDBNavbarLink >الأسعار</MDBNavbarLink></Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <Link to="./About">
              <MDBNavbarLink >المزيد عنا</MDBNavbarLink></Link>
            </MDBNavbarItem>

          </MDBNavbarNav>
          <Link to="./Login">
          <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} >
          <MDBIcon className='ms-1' icon='user' size='lg' />
      </MDBBtn>  </Link>
        </div>
      </MDBContainer>
    </MDBNavbar>

  
  );
}

export default header;