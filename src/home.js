import React from 'react'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";


function Home() {
  return (
    <div dir="rtl">
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v19-pla-208-mockups_2.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=88f13fefa39c5ea2808d73863b740872')", height: 600 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3' style={{ fontFamily: 'Tajawal', fontSize:45 }} >Easy Print</h1>
              <Link to="./Register">
                <a className='btn btn-dark btn-lg' href='./Login' role='button' style={{ fontFamily: 'Tajawal' }}>
                  التسجيل كمزود خدمة
            </a></Link>
            </div>
          </div>
        </div>
      </div>
      <h4 className='mb-3 d-flex justify-content-center align-items-center ' style={{ fontFamily: 'Tajawal', marginTop: 40, fontSize: 30, fontWeight: "bold" }}> تقييم العملاء </h4>

      <MDBCardGroup>
        <MDBCard>
          <MDBCardImage src='https://mostaql.hsoubcdn.com/uploads/404028-1508783429-FB_IMG_1508783256130.jpg' alt='...' position='top' />
          <MDBCardBody>
            <MDBCardTitle style={{ fontFamily: 'Tajawal' }}>الواحة</MDBCardTitle>
            <MDBCardText style={{ fontFamily: 'Tajawal' }}>
              تجربة رائعة ومفيدة.المنصة سهلة الاستخدام و بسيطة. سرعة ملحوظة بالاستجابة للطلبات. انصح باستخدام ايزي برينت
          </MDBCardText>
            <MDBCardText>
              <small className='text-muted' style={{ fontFamily: 'Tajawal' }}>منذ 3 شهور </small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <MDBCard>
          <MDBCardImage src='https://pbs.twimg.com/profile_images/903351010093146112/x_YAZSoJ_400x400.jpg' alt='...' position='top' />
          <MDBCardBody>
            <MDBCardTitle style={{ fontFamily: 'Tajawal' }}>المعالي</MDBCardTitle>
            <MDBCardText style={{ fontFamily: 'Tajawal' }}>
              تجربة رائعة ومفيدة.المنصة سهلة الاستخدام و بسيطة. سرعة ملحوظة بالاستجابة للطلبات. انصح باستخدام ايزي برينت
          </MDBCardText>
            <MDBCardText>
              <small className='text-muted' style={{ fontFamily: 'Tajawal' }}>منذ 4 شهور</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <MDBCard>
          <MDBCardImage src='https://cdn.salla.sa/pYxvvSbhZFzLeIBBM7PL8ooKQ7eiehDxzG9bqOjn.jpg' alt='...' position='top' />
          <MDBCardBody>
            <MDBCardTitle style={{ fontFamily: 'Tajawal', marginTop: -20 }}>المطار</MDBCardTitle>
            <MDBCardText style={{ fontFamily: 'Tajawal' }}>
              تجربة رائعة ومفيدة.المنصة سهلة الاستخدام و بسيطة. سرعة ملحوظة بالاستجابة للطلبات. انصح باستخدام ايزي برينت
              تجربة رائعة ومفيدة.المنصة سهلة الاستخدام و بسيطة. سرعة ملحوظة بالاستجابة للطلبات. انصح باستخدام ايزي برينت

          </MDBCardText>
            <MDBCardText>
              <small className='text-muted' style={{ fontFamily: 'Tajawal' }}>منذ شهرين</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>


    </div>
  )
}

export default Home
