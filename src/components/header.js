import React from 'react';
import ReactDOM from 'react-dom';
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
              <MDBNavbarLink aria-current='page' href='#'>
                الصفحة الرئيسية
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>المميزات</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>الأسعار</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>المزيد عنا</MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>
          <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='#'>
          <MDBIcon className='ms-1' icon='user' size='lg' />
      </MDBBtn>  
        </div>
      </MDBContainer>
    </MDBNavbar>

  
  );
}

export default header;