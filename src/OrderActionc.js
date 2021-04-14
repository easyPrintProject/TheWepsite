import React, {  useState, useEffect,useContext } from 'react'
import { Link } from "react-router-dom";
import { Button, Modal, Table, Container,FormGroup} from 'react-bootstrap';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import {  useHistory } from "react-router-dom";
import {Context} from "./components/Store"

  
  
function OrderActionc() {


  //modat states 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
  const [allOrders, setAllOrders] = useState([]);
  const [items , setitems ] = React.useState([]);
  const [data, setData] = useState(productInfo);
  const [modalInsert, setModalInsert] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    id: 'null', file: '', name: "",
      noOfPage: "", printType: "",
      description: "", price: ""
  }); 

  useEffect(()=> {
    if (allOrders!=[] || allOrders!=null){
       allOrders.forEach(element => {
        if(element.deliveryStatusId==5){
          axios.get("https://apieasyprint20210215153907.azurewebsites.net/api/UpdateStatusPrinter/"+element.id)
          .then(response => {
              console.log(response.data);
             }).catch(error => {
               console.log(error.response)
           });
        }
       });
     

    }

  }, [allOrders])

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
      }, []) //will only run when then app component loads

    
      const GetInfo=(e)=>{


      }
      

    return (
        <div>
  
    <Container>
      <h1 className="header">إدارة الطلبات</h1>
      <br />
      
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
          {allOrders.map((Order) => {
            return(
            <tr style={{fontSize:"18px", textAlign: 'center'}}>
              <td>{Order.id}</td>
              <td>{Order.orderStatus}</td>
              <td Order={{height: '120px' , width: '130px'}}>{Order.deliveryStatus}</td>
              <td>{Order.orderDate}</td>
              <td>                                 
              {Order.customerName}
              </td>
              <td>{Order.total}</td>
            <td>

              <Table>
              <thead>
          <tr>
            <th>رقم المنتج </th>
            <th>العنوان  </th>
            <th>طلب منتج </th>
            <th> طلب خدمة</th>
            <th>وصف الخدمة </th>
            <th> السعر النهائي للمنتج </th>
            <th> </th>

          </tr>
        </thead>
        <tbody>
          {Order.items.map((item)=> {
            return(
              <tr>
                <td>{item.itemID}</td>
                <td>{item.title}</td>
                <td>{item.isService.toString()}</td>
                <td>{item.isProduct.toString()}</td>
                <td>{item.description}</td>
                <td>{item.itemPrice} ريال</td>
              </tr>
            )
          })}
        </tbody>
              </Table>
         </td>
            </tr>

            
          )})
          }
        </tbody>
      </Table>
      
    </Container>
    
      <Modal show={show} onHide={handleClose} className='test'>
        <Modal.Header closeButton>
          <Modal.Title> تفاصيل الطلب </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Table className="test" style={{fontSize:"19px"}} >
        <thead>
          <tr>
            <th>رقم المنتج</th>
            <th>وصف المنتج</th>
            <th>خدمة طباعة</th>
            <th>طلب منتج</th>
            <th>السعر</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </Table>
          
           </Modal.Body>
        <Modal.Footer>
          <button  type="button" className="btn" style={{marginBottom:99, fontSize:15}} onClick={GetInfo,handleShow} >
            تم
            </button>
            <button  type="button" className="btn" style={{marginBottom:99, fontSize:15}} onClick={GetInfo(),handleShow} >
            تغيير حالة الطلب الى منتهي
            </button>
        </Modal.Footer>
      </Modal>


        </div>
    )

        }
export default OrderActionc
