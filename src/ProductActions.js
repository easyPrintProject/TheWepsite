import React, {  useState } from 'react'
import { Link } from "react-router-dom";
import { Button, Modal, Table, Container,FormGroup} from 'react-bootstrap';



export function ProductActions() {

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
    //  |-------------- Table --------------|  //
    <Container>
      <h1 className="header">إدارة المنتجات</h1>
      <br />
      <Button  className='test' style={{ backgroundColor: 'green'}}
       onClick={() => openModalInsert()}>اضافة منتج</Button>
    
      <br /> <br />
      <Table className="test" style={{fontSize:"19px"}} >
        <thead>
          <tr>
          <th>ID</th>
            <th>الغلاف</th>
            <th>اسم الملزمة</th>
            <th>عدد الصفحات</th>
            <th>نوع الطباعة</th>
            <th>الوصف</th>
            <th>السعر</th>
            <th>إدارة المنتجات</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr style={{fontSize:"18px", textAlign: 'center'}}>
              <td>{product.id}</td>
              <td>{product.file}</td>
              <td>{product.name}</td>
              <td>{product.noOfPage}</td>
              <td>{product.printType}</td>
              <td style={{height: '120px' , width: '130px'}}>{product.description}</td>
              <td>{product.price}</td>
              <td>                                 
              
              {/* Edit and delete buttons */}
                <button className="btn btn-primary"
                 onClick={() =>selectProduct(product, 'Edit')}>تعديل</button>{' '}
                <button className="btn btn-danger" 
                onClick={() =>selectProduct(product, 'Delete')}>حذف</button>
              </td>
            </tr>
            ))
          }
        </tbody>
      </Table>

      {/* ~~~~~ Insert  ~~~~~ */}
      <Modal show={modalInsert}>
        <Modal.Header>
          <div><h3>اضافه منتج</h3></div>
        </Modal.Header>

        <Modal.Body>
        <div className="form-group">

            <label>ID</label>
            <input
              className="form-control"
              type="text"
              name="id"
              value={selectedProduct ? selectedProduct.id : ''}
              onChange={handleChange}
            />
            <br/>
            <label>الغلاف</label>
            <input
              className="form-control"
              type="file"
              name="file"
              value={selectedProduct ? selectedProduct.file : ''}
              onChange={handleChange}
            />
            <br />
            <label>اسم الملزمة</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={selectedProduct ? selectedProduct.name : ''}
              onChange={handleChange}
            />
            <br />
            <label>عدد الصفحات</label>
            <input
              className="form-control"
              type="text"
              name="noOfPage"
              value={selectedProduct ? selectedProduct.noOfPage : ''}
              onChange={handleChange}        
            />
            <br />
            <label>نوع الطباعة</label>
            <input
              className="form-control"
              type="text"
              name="printType"
              value={selectedProduct ? selectedProduct.printType : ''}
              onChange={handleChange}        
            />
            <br />
            <label>الوصف</label>
            <input
              className="form-control"
              type="text"
              name="description"
              value={selectedProduct ? selectedProduct.description : ''}
              onChange={handleChange}        
            />
            <br />
            <label> السعر</label>
            <input
              className="form-control"
              type="text"
              name="price"
              value={selectedProduct ? selectedProduct.price : ''}
              onChange={handleChange}        
            />
            <br />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button className="btn btn-primary" onClick={() => insert()}>اضافة</Button>
          <Button className="btn btn-danger" onClick={() => setModalInsert(false)}>إلغاء</Button>
        </Modal.Footer>
      </Modal>


      {/* ~~~~~~~ Edit  ~~~~~~~ */}
      <Modal show={modalEdit}>
        <Modal.Header>
          <div><h3>تعديل منتج</h3></div>
        </Modal.Header>

        <Modal.Body>
        
        <FormGroup>
            <label> ID </label>
            <input className="form-control"
            readOnly
              name="id"
              type="text"
              value={selectedProduct && selectedProduct.id}
              onChange={handleChange}
            />
          </FormGroup>
         
          <FormGroup>
            <label> الغلاف </label>
            <input className="form-control"
              name="file"
              type="file"
              value={selectedProduct && selectedProduct.file}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>اسم الملزمة</label>
            <input className="form-control"
              name="name"
              type="text"
              value={selectedProduct && selectedProduct.name}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>عدد الصفحات</label>
            <input className="form-control"
              name="noOfPage"
              type="text" 
              value={selectedProduct && selectedProduct.noOfPage}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>نوع الطباعة</label>
            <input className="form-control" 
              name="printType" 
              type="text" 
              value={selectedProduct && selectedProduct.printType}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>وصف المنتج</label>
            <input className="form-control" 
              name="description" 
              type="text" 
              value={selectedProduct && selectedProduct.description}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>السعر</label>
            <input className="form-control" 
              name="price" 
              type="text" 
              value={selectedProduct && selectedProduct.price}
              onChange={handleChange}
            />
          </FormGroup>
        </Modal.Body>

        <Modal.Footer>
        <Button className="btn btn-danger" onClick={() => setModalEdit(false)}>إلغاء</Button>
          <Button color="primary" onClick={() => edit()}>تعديل</Button>
        </Modal.Footer>
      </Modal>
      
      {/* ~~~~ Delete  ~~~~ */ } 
      <Modal show={modalDelete}>
        <Modal.Body>هل أنت متأكد من حذف المنتج؟  </Modal.Body>

        <Modal.Footer>
          <Button className="btn btn-danger" onClick={() => deleteProduct()}>نعم</Button>
          <Button className="btn btn-secondary" onClick={() => setModalDelete(false)}>لا</Button>
        </Modal.Footer>
      </Modal>
      
    </Container>
  )
}


    
        export default ProductActions;

