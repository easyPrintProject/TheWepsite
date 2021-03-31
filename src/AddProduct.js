import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as FiFeather from "react-icons/fi"
import {
  MDBIcon } from 'mdb-react-ui-kit';
  import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

function AddProduct() {
    const [file, setFile]= useState("");
    const [name, setName]= useState("");
    const [noOfPage, setNoOfPage]= useState("");
    const [printType, setPrintType]= useState("");
    const [description, setdescription]= useState("");
    const [price, setPrice]= useState("");

    function addProduct(){
        console.warn(file,name,noOfPage,printType,description,price)
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('noOfPage', noOfPage);
        formData.append('printType', printType);
        formData.append('description', description);
        formData.append('price', price);
       // let res = await fetch("", // fetch to our db
       // {
        //    method: 'POST',
         //   body: formData
       // });
        alert("تم حفظ المنتج بنجاح") 

    }
    return (
        <div>
        <h2 style={{marginTop:"4%",fontSize:50}}> اضافة منتج</h2>    
        <div className="col-sm-6 offset-sm-3" style={{marginRight:"23%",marginTop:"10%"}}>
            <br/>
            <input type="file" className="form-control"
            onChange={(e)=>setFile(e.target.value)}
            placeholder="صورة الملزمة" /> <br/>
            <input type="text" className="form-control"
            onChange={(e)=>setName(e.target.value)}
             placeholder="اسم الملزمة" /> <br/>
            <input type="text" className="form-control"
            onChange={(e)=>setNoOfPage(e.target.value)}
             placeholder="عدد الصفحات" /> <br/>
            <input type="text" className="form-control form-control-sm"
            onChange={(e)=>setPrintType(e.target.value)}
            placeholder="نوع الطباعة" />  <br/>
            <input type="text" className="form-control" 
            onChange={(e)=>setdescription(e.target.value)}
            placeholder="الوصف" /> <br/>
            <input type="text" className="form-control" placeholder="السعر" 
            onChange={(e)=>setPrice(e.target.value)}
                        /> <br/>
        
           <div style={{marginBottom:111}}> 
    
    <Button variant="contained" size="large" color="#4a87e3" onClick={addProduct}  >
      اضافة الملزمة
    </Button>

  </div>
        </div>

        </div>
    )
}

export default AddProduct
