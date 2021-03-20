
import './App.css';
import Header from "./components/header"
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBContainer,
    MDBNavbarToggler,
    MDBIcon } from 'mdb-react-ui-kit';

function App() {
  return (
    <header>
    <Header />

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

    <p className='mt-4'>Scroll down</p>
    <p>Scroll down</p>
    <p>Scroll down</p>
    <p>Scroll down</p>
    <p>Scroll down</p>
    <p>Scroll down</p>
    <p>Scroll down</p>
    <p>Scroll down</p>
  </header>
  
  );
}

export default App;