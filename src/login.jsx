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
    setMessage("please fill username")
  }else if(password===""||password===null){
    setMessage("please fill password")
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
    setMessage("username or password is incorrect")
  }
}
return (
            <div>
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
  {   message !==""&&   <div style={{color:"red",marginTop:10,height:30}}>{message}</div>}
  <button  className='btn btn-warning' onClick={loginbutton} >LOGIN</button>
              </div>
            </div>
  
//             <div>
//               <div className='loginPage'>
//                <div className='form-group'>
//                 <label htmlFor='text' className='form-label'>Enter email address</label>
          
//                 <input type="email" className='form-control' 
//                  onChange={(e) => setValues({ ...values, username: e.target.value})} 
//                 id="email" placeholder='Enter email address'></input>
//                 </div>
//                <div className="form-group">
//     <label htmlFor="password"   className='form-label'>Password</label>
//     <input type="password" className="form-control" 
//     onChange={(e) => setValues({ ...values, password: e.target.value })}
//     name="password" id="password" placeholder="Password"></input>
//   </div>
 
//   <button  className='btn btn-warning' onClick={handleSubmit} >LoGIN</button>
//               </div>
//             </div>
  
//         );
// return (
//   <div>
//     <h1>Login Account</h1>
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">
//         Email
//         <input
//           type="email"
//           name="email"
//           value={data.email}
//           onChange={handleChange}
//         />
//       </label>
//       <label htmlFor="password">
//         Password
//         <input
//           type="password"
//           name="password"
//           value={data.password}
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit">Login</button>
//     </form>
//   </div>
// );
 )
};
    


 
export default Login;