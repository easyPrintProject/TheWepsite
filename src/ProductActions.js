import React, {  useState, useEffect,useContext } from 'react'
import { Link } from "react-router-dom";
import { Button, Modal, Table, Container,FormGroup} from 'react-bootstrap';
import axios from 'axios';

import {  useHistory } from "react-router-dom";
import {Context} from "./components/Store"

export function ProductActions() {
  const history = useHistory();
  const [state, dispatch] = useContext(Context);

    const productInfo = [
    { 
    id: "1",
      file: "file.png",
       name: "ملزمة بيئة صفية", 
       noOfPage: "200", 
       printType: "أبيض & أسود",
        description: "ملزمة لمادة من مواد كلية الآداب",
         price: "32 ريال" },

  ];
  useEffect(() => {
    axios.get("https://apieasyprint20210215153907.azurewebsites.net/api/CourceMaterial/a40756b0-a9a9-4079-8495-d44e45b05f5b")
    .then(response => {
     console.log(response.data);
      setAllProduct(
       response.data
        );
    }).catch(error => {
      console.log(error.response)
  });
  }, []) //will only run when then app component loads
 
  
  // States ~
  const [allProducts, setAllProduct] = useState([]);
  const [data, setData] = useState(productInfo);
  const [modalInsert, setModalInsert] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    id: 'null', file: '', name: "",
      noOfPage: "", printType: "",
      description: "", price: ""
  });
  // Funcions = () =>
  const selectProduct= (element, modify) => {
    setSelectedProduct(element);
    (modify === 'Edit') ? setModalEdit(true) : setModalDelete(true);  
  };
  const CheckAvailable =(e) =>{
    if (e==true)
    return(
    <button className="btn btn-danger" onClick={() =>selectProduct(allProducts.courceMaterialId, 'Delete')}>تغيير الحالة الى نفذت الكمية</button>
    )
    else 
    return(
      <text>غير متوفر</text>
    )
  }

 
  

 

  return (
  
    <Container>
      <h1 className="header">إدارة المنتجات</h1>
      <br />
      <Link to="/addProduct"><Button  className='test' style={{ backgroundColor: 'green'}}
      
       >اضافة منتج</Button></Link>
    
      <br /> <br />
      <Table className="test" style={{fontSize:"19px"}} >
        <thead>
          <tr>
            <th>اسم الملزمة</th>
            <th>التوفر</th>
            <th>الوصف</th>
            <th>السعر</th>
            <th>إدارة المنتجات</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((allProducts) => (
            <tr style={{fontSize:"18px", textAlign: 'center'}}>
              <td>{allProducts.courceMaterialTitle}</td>
              <td>{allProducts.isAvailable}</td>
              <td style={{height: '120px' , width: '130px'}}>{allProducts.courceMaterialTitle}</td>
              <td>{allProducts.courceMaterialPrice}</td>
              <td>                                 
              
              {/* Edit and delete buttons */}
                {CheckAvailable(allProducts.isAvailable)}
               
              </td>
            </tr>
            ))
          }
        </tbody>
      </Table>

    </Container>
  )
}


    
        export default ProductActions;

