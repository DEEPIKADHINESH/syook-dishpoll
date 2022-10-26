import React from 'react';
import "./login.css"
function Login() {
     return (
            <div>
              <form className='loginPage'>
               <div className='form-group'>
                <label htmlFor='email' className='form-label'>Enter email address</label>
                <input type="email" className='form-control' id="email" placeholder='Enter email address'></input>
                </div>
               <div className="form-group">
    <label htmlFor="password"   className='form-label'>Password</label>
    <input type="password" className="form-control" id="password" placeholder="Password"></input>
  </div>
  <button className="btn btn-primary">Submit</button>
              </form>
            </div>
        );
    
}
 
export default Login;