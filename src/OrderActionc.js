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
    {
      field: '',
      headerName: 'المزيد',
      renderCell: () => (
        <strong>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
          >
            Open
          </Button>
        </strong>
      ),
    },
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
        axios.get("https://apieasyprint20210215153907.azurewebsites.net/api/PrinterOrder/a40756b0-a9a9-4079-8495-d44e45b05f5b")
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

 


    return (
        <div>
  
    <Container>
      <h1 className="header">إدارة الطلبات</h1>
      <br />
      {/* <div style={{ height: 400, width: '100%' }}> */}
      {/* <DataGrid rows={allOrders} columns={columns} pageSize={5}   /> */}
    {/* </div> */}
    
      <br /> <br />
      <br /> <br />

      <Table className="test" style={{fontSize:"19px"}} >
        <thead>
          <tr>
            <th>رقم الطلب </th>
            <th>حالة الطلب</th>
            <th>حالة التوصيل</th>
            <th>تاريخ الطلب</th>
            <th>ايميل العميل</th>
            <th> الاجمالي</th>
            <th> </th>

          </tr>
        </thead>
        <tbody>
          {allOrders.map((Order) => (
            <tr style={{fontSize:"18px", textAlign: 'center'}}>
              <td>{Order.itemId}</td>
              <td>{Order.orderStatus}</td>
              <td Order={{height: '120px' , width: '130px'}}>{Order.deliveryStatus}</td>
              <td>{Order.orderDate}</td>
              <td>                                 
              {Order.customerName}
              </td>
              <td>{Order.total}</td>
              <td><Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
          >
            المزيد
          </Button></td>
              

            </tr>
            ))
          }
        </tbody>
      </Table>


      

   

      
    </Container>
            
        </div>
    )
}

export default OrderActionc
