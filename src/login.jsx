import React,{useState}from 'react';
import "./login.css";
import {Link} from "react-router-dom";
function Login() {
   const[email,setEmail]=useState("");
   const[password,setPassword]=useState("");
return (
            <div>
              <form className='loginPage'>
               <div className='form-group'>
                <label htmlFor='email' className='form-label'>Enter email address</label>
                <input type="email" className='form-control' 
                value={email} onChange={(e)=>setEmail(e.target.value)}
                id="email" placeholder='Enter email address'></input>
                </div>
               <div className="form-group">
    <label htmlFor="password"   className='form-label'>Password</label>
    <input type="password" className="form-control" value={password}
    onChange={e=>setPassword(e.target.value)}
    name="password" id="password" placeholder="Password"></input>
  </div>
  <button  className='btn btn-warning'  ><Link to="/dishes">Submit</Link></button>
              </form>
            </div>
        );
    
}
 
export default Login;