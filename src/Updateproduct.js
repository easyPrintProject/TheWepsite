import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function Updateproduct() {
    const [file, setFile]= useState("");
    const [name, setName]= useState("");
    const [noOfPage, setNoOfPage]= useState("");
    const [printType, setPrintType]= useState("");
    const [description, setdescription]= useState("");
    const [price, setPrice]= useState("");

    function Updateproduct(){
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
            
        <h2 style={{marginTop:"4%",fontSize:50}}> تعديل منتج</h2>    
        <div className="col-sm-6 offset-sm-3" style={{marginRight:"23%",marginTop:"10%"}}>
            <br/>
            <input type="file" className="form-control" style={{fontSize:22}}
            onChange={(e)=>setFile(e.target.value)}
            placeholder="صورة الملزمة" /> <br/>
            <input type="text" className="form-control" style={{fontSize:22}}
            onChange={(e)=>setName(e.target.value)}
             placeholder="اسم الملزمة" /> <br/>
            <input type="text" className="form-control" style={{fontSize:22}}
            onChange={(e)=>setNoOfPage(e.target.value)}
             placeholder="عدد الصفحات" /> <br/>
            <input type="text" className="form-control form-control-sm" style={{fontSize:22}}
            onChange={(e)=>setPrintType(e.target.value)}
            placeholder="نوع الطباعة" />  <br/>
            <input type="text" className="form-control" style={{fontSize:22}}
            onChange={(e)=>setdescription(e.target.value)}
            placeholder="الوصف" /> <br/>
            <input type="text" className="form-control" placeholder="السعر" style={{fontSize:22}}
            onChange={(e)=>setPrice(e.target.value)}
                        /> <br/>
     
 


      
      <div style={{marginBottom:111}}> 
    
        <Button variant="contained" size="large" color="#bdbdbd"  >
          تحديث
        </Button>
    
      </div>
     
    </div></div>
  );
}



export default Updateproduct
