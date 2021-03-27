import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as FiFeather from "react-icons/fi"
import {
  MDBIcon } from 'mdb-react-ui-kit';
  import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

//import './Product.css'
//import { getDefaultNormalizer } from '@testing-library/dom';
  
  
  function Product(){
{/* const [data, setData]= useState([]);
 useEffect(()=>{
   getData();
 },[]) 
// edit -> another page

async function DeleteProduct(id){
  let res = await fetch (""+id, {
    method: 'DELETE'
  });
  res = await res.json();
  console.warn(res)
  getData();
}
 async function getData(){
   let res= await fetch("");
   res = await res.json();
   setData(res);
 } */}


 {/*onClick={() =>DeleteProduct(id)} */} 
    return (
        <div >
            
          <div>
          <MDBBtn color='success' href="AddProduct">اضافة منتج
        <MDBIcon className='ms-2'  icon='plus'  /> 
        </MDBBtn>
          </div>
          <div className="ButtonStyle"> 
        <div class="d-grid gap-3 d-md-flex justify-content-md-end" >  
        <MDBBtn color='danger' >حذف
        <MDBIcon className='ms-2'  icon='trash'  /> 
        </MDBBtn>
        <MDBBtn  color='info'>تعديل
        <MDBIcon className='ms-2' icon='edit'  /> 
        </MDBBtn>   </div>     </div>
   



        </div>
    )
  }

export default Product

