import React from 'react'
import { Button, Modal, Table, Container,FormGroup} from 'react-bootstrap';
import axios from 'axios';

function OrderDetailes() {
    const [items , setitems ] = React.useState([]);

    const GetInfo=(e)=>{
        axios.get('https://apieasyprint20210215153907.azurewebsites.net/api/items/'+e)
        .then(response => {
            console.log(response);
            setitems(response);
           }).catch(error => {
             console.log(error.response)
         });  
      }
    return (
        <div>
            <h1>معلومات الطلب</h1>
            <br /> <br />
            <Button style={{ backgroundColor: 'green'}}>تغيير حالة الطلب الى منتهي</Button>
            <br /> <br />

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

           


        </div>
    )
}

export default OrderDetailes
