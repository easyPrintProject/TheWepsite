import React, {  useState, useEffect,useContext } from 'react'
import { Link } from "react-router-dom";
import { Button, Modal, Table, Container,FormGroup} from 'react-bootstrap';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import {  useHistory } from "react-router-dom";
import {Context} from "./components/Store"


const columns = [

    { field: 'Id', headerName: 'ID'},
    { field: 'itemId', headerName: 'رقم الطلب'},
    { field: 'orderStatusId', hide:true},
    { field: 'orderStatus', headerName: 'حالة الطلب', width: 222},
    { field: 'deliveryStatusId', hide:true},
    {field: 'deliveryStatus', headerName: 'حالة التوصيل', width: 170},
    {field: 'orderDate', headerName: 'تاريخ الطلب', width: 170, type:"date"},
    {field: 'customerId',hide:true},
    {field: 'customerName', headerName: 'ايميل العميل', width: 170},
    {field: 'total', headerName: 'الاجمالي', width: 170},
  ];
  
  
function OrderActionc() {
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
      
       // States ~
  const [allOrders, setAllOrders] = useState([ ]);
  const [data, setData] = useState(productInfo);
  const [modalInsert, setModalInsert] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    id: 'null', file: '', name: "",
      noOfPage: "", printType: "",
      description: "", price: ""
  }); 

     useEffect(() => {
        axios.get("https://localhost:44399/api/PrinterOrder/A93F96CE-1CF1-4279-AB13-91F9B34F4C77")
        .then(response => {
            console.log(response.data);
            setAllOrders(
              response.data
               );
           }).catch(error => {
             console.log(error.response)
         });
      }, []) //will only run when then app component loads

      useEffect(() => {
        console.log(allOrders)
      }, [allOrders]) //will only run when then app component loads

  // Funcions = () =>
  const selectProduct= (element, modify) => {
    setSelectedProduct(element);
    (modify === 'Edit') ? setModalEdit(true) : setModalDelete(true);  
  };

  const handleChange= (e) => {
    const {name, value} = e.target;
    setSelectedProduct((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Funcions => Insert, edit, delete & order
  const openModalInsert = () => {
    setSelectedProduct(null); // Cleaning state.
    setModalInsert(true);
  };

  const insert = () => {
    let insertValue = selectedProduct;
    let newData = data;
    newData.push(insertValue);
    setData(newData);
    setModalInsert(false);
  };
  const edit = () => {
    let newData = data;
    newData.forEach( (product) => {
      if(product.file === selectedProduct.file) {
        product.id = selectedProduct.id;
        product.name = selectedProduct.name;
        product.noOfPage = selectedProduct.noOfPage;
        product.printType = selectedProduct.printType;
        product.description = selectedProduct.description;
        product.price = selectedProduct.price;

      };
    });
    setData(newData);
    setModalEdit(false);
  };

  const deleteProduct = () => {
    setData(data.filter( (product) => product.id !== selectedProduct.id) );
    setModalDelete(false);
  };

    return (
        <div>
            
    //  |-------------- Table --------------|  //
    <Container>
      <h1 className="header">إدارة الطلبات</h1>
      <br />
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={allOrders} columns={columns} pageSize={5}   />
    </div>
    
      <br /> <br />
   

      
    </Container>
            
        </div>
    )
}

export default OrderActionc
