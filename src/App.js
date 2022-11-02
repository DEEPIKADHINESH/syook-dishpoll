import './App.css';
import Login from './login';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import React,{useState} from 'react';
import Dishes from './dishes';
import SelectedDishes from './selectedDishes';
import Navbar from './navbar';
function App() {

 const[cart,setCart]=useState([])
const handleClick=(item)=>{
    let checkCart=cart.find((i)=>i.id === item.id)
    if(checkCart ) {alert ("Item is already in rank page")}
    else if(cart.length>=3) {alert("Maximum 3 items allowed to rank")}
   else {setCart([...cart,item])}
 }
 
return (
    <div className="App">
    <Router>
    <Navbar />
    <Routes>
    <Route path="/login" element={<Login />}>Login</Route>
     <Route path="/dishes" element={<Dishes handleClick={handleClick} cart={cart}/> }></Route>
     <Route path="/selectedDishes" element={<SelectedDishes cart={cart} setCart={setCart}/>}/>
      <Route path="/" element={<Login />}>Login</Route>
      </Routes>
      </Router>
  </div>
  );
}

export default App;
