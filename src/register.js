import React from 'react'
import './register.css'


function register() {
    return (
          <div>
    <div className="header">الانضمام كمقدم خدمة</div>
    <h2 className="sub-header">خاص بشركات ومؤسسات الطباعة والنسخ والتصوير
</h2>
    <div className="content">
      <div className="image">
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="Name">الاسم</label>
          <input type="text" name="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="Phone">رقم التواصل</label>
          <input type="text" name="Phone"  />
        </div>
        <div className="form-group">
          <label htmlFor="Email">البريد الإلكتروني</label>
          <input type="email" name="Eamil"  />
        </div>
        <div className="form-group">
          <label htmlFor="CoName"> الاسم التجاري</label>
          <input type="text" name="CoName" />
        </div>
        <div className="form-group">
          <label htmlFor="City"> المدينة</label>
          <input type="text" name="City"  />
        </div>
        <div className="form-group">
          <label htmlFor="password"> كلمة السر </label>
          <input type="password" name="password"
            onChange = {(event,newValue) => this.setState({password:newValue})}  />
        </div>
        <div className="form-group">
          <label htmlFor="password"> تأكيد كلمة السر </label>
          <input type="password" name="password" />
        </div>
      </div>
    </div>
    <div className="footer">
      <button type="button" className="btn">
        إرسال طلب
      </button>
    </div>
  </div>   
)
}
  

export default register
