
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header"
import Home from "./home"
import About from "./about"
import Pricing from "./pricing"
import Login from "./login"
import Register from "./register"
import  Features from "./features"





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
        <Route path="/">  <Home />   </Route>
         

    </Switch>
</Router>
 

   
  
  );
}

export default App;