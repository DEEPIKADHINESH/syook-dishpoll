import React,{useState}from 'react';
import "./login.css";
import {useNavigate} from "react-router-dom";
function Login() {
  const usernameTmp="amar"
  const passwordTmp="amar123"
  const usernameTmp1="akbar"
  const passwordTmp1="akbar123"
  const usernameTmp2="antony"
  const passwordTmp2="antony123"
  const usernameTmp3="john"
  const passwordTmp3="john123"
  const usernameTmp4="paul"
  const passwordTmp4="paul123"
  const navigate=useNavigate()
   const[email,setEmail]=useState("");
   const[password,setPassword]=useState("");
  const[message,setMessage]=useState("")
const loginbutton=()=>{
  if(email===""||email===null){
    setMessage("Please fill Username")
  }else if(password===""||password===null){
    setMessage("Please fill Password")
  }else if (email===usernameTmp && password===passwordTmp){
    navigate("/dishes")
  }
  else if(email===usernameTmp1&&password===passwordTmp1){
    navigate("/dishes")
  }
  else if(email===usernameTmp2&&password===passwordTmp2){
    navigate("/dishes")
  }
  else if(email===usernameTmp3&&password===passwordTmp3){
    navigate("/dishes")
  }
  else if(email===usernameTmp4&&password===passwordTmp4){
    navigate("/dishes")
  }
  else{
    setMessage("Username or Password is incorrect")
  }
}
return (
            <div id="loginForm">
              <div className='loginPage'>
               <div className='form-group'>
                <label htmlFor='text' className='form-label'>Enter Username</label>
          
                <input type="email" className='form-control' 
                value={email} onChange={(e)=>setEmail(e.target.value)}
                id="email" placeholder='Enter email address'></input>
                </div>
               <div className="form-group">
    <label htmlFor="password"   className='form-label'>Enter Password</label>
    <input type="password" className="form-control" value={password}
    onChange={e=>setPassword(e.target.value)}
    name="password" id="password" placeholder="Password"></input>
  </div>
  {message !==""&&   <h3 style={{color:"red",marginTop:10,height:30}}>{message}</h3>}
  <button  className='btn btn-primary' onClick={loginbutton} >LOGIN</button>
              </div>
            </div>
)
};
    


 
export default Login;