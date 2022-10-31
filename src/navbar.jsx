import React from "react";
import { NavLink } from "react-router-dom";
const Navbar=({setShow})=>{
    return(
     <nav className="navbar navbar-light bg-warning " >
        <NavLink className="navbar-brand" to="/dishes"onClick={()=>setShow(true)}>All Dishes</NavLink>
        <NavLink className="navbar-brand"  to="/selecteddishes"onClick={()=>setShow(false)} >Selected Dishes</NavLink>
  </nav>
    )
     
   
}
export default Navbar
