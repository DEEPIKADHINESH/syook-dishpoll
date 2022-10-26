import './App.css';
import Login from './login';
import {Switch,Route} from "react-router-dom";
import React,{useState} from 'react';
function App() {
  const [token,setToken]=useState()
  if(!token){
    return <Login setToken={setToken}/>
  }
  return (
    <div className="App">
    <Switch>
    <Route path="/login" component={Login}/>
    </Switch>
      
     
     
    </div>
  );
}

export default App;
