import './App.css';
import Login from './login';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import React,{useState} from 'react';
import Dishes from './dishes';
import SelectedDishes from './selectedDishes';
import Navbar from './navbar';

function App() {
 const [show,setShow]=useState([false])
 const[cart,setCart]=useState([])
 const handleClick=(item)=>{
    // console.log(item)
    //  cart.push(item)
    //  console.log(cart)
    if(cart.indexOf(item) !==-1) return alert("item already added")
   setCart([...cart,item])
 }
 return (
    <div className="App">
    <Router>
    <Navbar setShow={setShow}/>
    {/* {show? <Dishes handleClick={handleClick}/> :<SelectedDishes cart={cart} setCart={setCart} />}  */}
    <Routes>
    <Route path="/login" element={<Login/>}>Login</Route>
     <Route path="/dishes" element={<Dishes handleClick={handleClick}/> }></Route>
     <Route path="/selectedDishes" element={<SelectedDishes cart={cart} setCart={setCart}/>}/>
      <Route path="/" element={<Login/>}>Login</Route>
      </Routes>
      </Router>
  </div>
  );
}

export default App;
