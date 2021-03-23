import React from 'react'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup } from 'mdb-react-ui-kit';


function home() {
    return (
        <div dir="rtl">
             <div
      className='p-5 text-center bg-image'
      style={{ backgroundImage: "url('https://i.pinimg.com/originals/89/23/a2/8923a220c509f3e1a69af46b3588434e.jpg')", height: 600 }}
    >
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div className='text-white'>
            <h1 className='mb-3'>Easy Print</h1>
            <h4 className='mb-3'> الطباعة السهلة</h4>
            <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
              ابدأ الآن
            </a>
          </div>
        </div>
      </div>
    </div>
    <h4 className='mb-3 d-flex justify-content-center align-items-center '> تقييم العملاء </h4>

    <MDBCardGroup>
      <MDBCard>
        <MDBCardImage src='https://mostaql.hsoubcdn.com/uploads/404028-1508783429-FB_IMG_1508783256130.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>الواحة</MDBCardTitle>
          <MDBCardText>
            تجربة رائعة ومفيدة.المنصة سهلة الاستخدام و بسيطة. سرعة ملحوظة بالاستجابة للطلبات. انصح باستخدام ايزي برينت 
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>منذ 3 شهور </small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src='https://pbs.twimg.com/profile_images/903351010093146112/x_YAZSoJ_400x400.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>المعالي</MDBCardTitle>
          <MDBCardText>
          تجربة رائعة ومفيدة.المنصة سهلة الاستخدام و بسيطة. سرعة ملحوظة بالاستجابة للطلبات. انصح باستخدام ايزي برينت 
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>منذ 4 شهور</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src='https://cdn.salla.sa/pYxvvSbhZFzLeIBBM7PL8ooKQ7eiehDxzG9bqOjn.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>المطار</MDBCardTitle>
          <MDBCardText>
          تجربة رائعة ومفيدة.المنصة سهلة الاستخدام و بسيطة. سرعة ملحوظة بالاستجابة للطلبات. انصح باستخدام ايزي برينت 
          تجربة رائعة ومفيدة.المنصة سهلة الاستخدام و بسيطة. سرعة ملحوظة بالاستجابة للطلبات. انصح باستخدام ايزي برينت 

          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>منذ شهرين</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>


        </div>
    )
}

export default home
