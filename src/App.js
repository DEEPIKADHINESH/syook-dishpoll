import './App.css';
import Login from './login';
import {Switch,Route} from "react-router-dom";
import React,{useState} from 'react';
import Dishes from './dishes';
function App() {
  const [token,setToken]=useState()
 
  return (
    <div className="App">
    <Switch>
    <Route path="/login" component={Login}/>
    <Route path="/dishes" component={Dishes}/>
    </Switch>
      
     
     
    </div>
  );
}

export default App;
