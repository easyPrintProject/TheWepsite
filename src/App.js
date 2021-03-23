
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header"
import Home from "./home"
import About from "./about"
import Pricing from "./pricing"
import Login from "./login"
import Register from "./register"
import  Features from "./features"

<<<<<<< HEAD
<<<<<<< HEAD



=======
=======
>>>>>>> 186379365cdd8ccdafb848138a6a6b4f3287f793
import  IsCourses from "./isCourses"
import Dashboard from "./dashboard"
import Address from "./address"
import Products from "./products"
>>>>>>> 186379365cdd8ccdafb848138a6a6b4f3287f793

import PrintingShopInfo from "./PrintingShopInfo"
import AdressInfo from "./AdressInfo"



import PrintingShopInfo from "./PrintingShopInfo"
import AdressInfo from "./AdressInfo"



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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 186379365cdd8ccdafb848138a6a6b4f3287f793

        <Route path="/isCourses">  <IsCourses />    </Route>
        <Route path="/address">  <Address />    </Route>
        <Route path="/products">  <Products />    </Route>
        <Route path="/dashboard">  <Dashboard />    </Route>

        <Route path="/PrintingShopInfo">  <PrintingShopInfo />    </Route>
        <Route path="/AdressInfo">  <AdressInfo />    </Route>


<<<<<<< HEAD
>>>>>>> 186379365cdd8ccdafb848138a6a6b4f3287f793
=======
>>>>>>> 186379365cdd8ccdafb848138a6a6b4f3287f793
        <Route path="/">  <Home />   </Route>
         

    </Switch>
</Router>
 

   
  
  );
}

export default App;