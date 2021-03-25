
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header"
import Home from "./home"
import About from "./about"
import Pricing from "./pricing"
import Login from "./login"
import Register from "./register"
import  Features from "./features"
import PrintingShopInfo from "./PrintingShopInfo"
import AdressInfo from "./AdressInfo"
import AddDrivers from "./addDrivers"
import PrintShopProfile from "./PrintShopProfile";
import Addcoupons from "./Addcoupons"
import Product from "./Product"


function App() {
  return (
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
        <Route path="/Addcoupons">  <Addcoupons />   </Route> 
        <Route path="/Product">  <Product />   </Route> 
        <Route path="/">  <Home />   </Route>


    </Switch>
</Router>
 

   
  
  );
}

export default App;