
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header"

import Footer from "./components/Footer"
import Home from "./Home"
import About from "./About"
import Pricing from "./pricing"
import Login from "./login"
import Register from "./register"
import Features from "./features"
import PrintingShopInfo from "./PrintingShopInfo"
import AdressInfo from "./AdressInfo"
import AddDrivers from "./AddDrivers"
import PrintShopProfile from "./PrintShopProfile";
import Cuponspage from "./Cuponspage"
import Branchprinter from "./Branchprinter"
import AddProduct from "./AddProduct"
import Product from "./Product"
import PrivacyPolicy from "./PrivacyPolicy"
<<<<<<< HEAD
import HomeAdmin from "./Dachboard"
import JoinRequestAdmin from "./JoinRequestAdmin"
import Dachboard from "./Dachboard"
import Proplem from "./Proplem"
=======
import Store from "./components/Store"
// import Acc from "./Acc"
>>>>>>> main




function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">

   <Store>
    <Router>
     <Header/>
     <Switch>
        <Route path="/Login">  <Login/>  </Route>
        <Route path="/Register">  <Register/>  </Route>
        <Route path="/Pricing">  <Pricing />   </Route>
        <Route path="/About">  <About />    </Route>
        <Route path="/Features">  <Features />    </Route>
        <Route path="/PrintingShopInfo">  <PrintingShopInfo />    </Route>
        <Route path="/AdressInfo">  <AdressInfo />    </Route>
        <Route path="/PrintShopProfile">  <PrintShopProfile />    </Route>
        <Route path="/AddDrivers">  <AddDrivers />   </Route>
        <Route path="/Cuponspage">  <Cuponspage />   </Route>
        <Route path="/Branchprinter">  <Branchprinter />   </Route>
        <Route path="/AddProduct">  <AddProduct />   </Route>
        <Route path="/Product">  <Product />   </Route>
        <Route path="/Home">  <Home />   </Route>
        <Route path="/PrivacyPolicy">  <PrivacyPolicy />   </Route>
<<<<<<< HEAD
        <Route path="/JoinRequestAdmin">  <JoinRequestAdmin />   </Route>
        <Route path="/Proplem">  <Proplem />   </Route>
=======
        {/* <Route path="/Acc">  <Acc />   </Route> */}

>>>>>>> main

        <Route path="/Dachboard">  <Dachboard />   </Route>
        
  
        <Route path="/HomeAdmin">  <HomeAdmin />   </Route>
        
    </Switch>
       <Footer/> 
<<<<<<< HEAD



     
</Router>
</div>

    </div>
   
  
=======
</Router>
</Store>
</div></div>
>>>>>>> main
  );
}


export default App;
